# Scoop - récupère les Shorts YouTube récents de rédactions fiables
# Usage : powershell -ExecutionPolicy Bypass -File scripts\fetch-shorts.ps1 [-Hours 36]
# Sortie : scripts\shorts-today.txt (candidats, lus ensuite pour choisir les vidéos du fil)
# Astuce : la playlist "UUSH" + ID de chaîne (sans "UC") contient uniquement les Shorts de la chaîne.
param([int]$Hours = 36)

$channels = [ordered]@{
  'franceinfo'       = 'UCO6K_kkdP-lnSCiO3tPx7WA'
  'Le Monde'         = 'UCYpRDnhk5H8h16jpS84uqsA'
  'HugoDécrypte'     = 'UCAcAnMF0OrCtUep3Y4M-ZPw'
  'France 24'        = 'UCCCPCZNChQdGa9EkATeye4g'
  'AFP'              = 'UCckz6n8QccTd6K_xdwKqa0A'
  'Brut'             = 'UCSKdvgqdnj72_SLggp7BDTg'
  'Le Figaro'        = 'UCCDz_XYeKWd0OIyjp95dqyQ'
  'Libération'       = 'UC9x4Iyu-D257P0P-VDRwSzw'
  'TV5MONDE Info'    = 'UCzKH70qfN_yuXq3s91fdwmg'
  'RFI'              = 'UCm4fSpMpPIZ9z6KHoezLUAg'
  'euronews'         = 'UCW2QcKZiU8aUGg4yxCIditg'
  'France Inter'     = 'UCJldRgT_D7Am-ErRHQZ90uw'
  'Mediapart'        = 'UCdnaDhU-LDQrIEEmSIfq0-Q'
  'Le Parisien'      = 'UCfHn_8-ehdem86fEvlFg-Gw'
  'TF1 INFO'         = 'UCsrPUA0ZSDCNZC6wyRlR7ZA'
  'LCI'              = 'UCewhc0fvja891XkpIPGRMxQ'
  'France Culture'   = 'UCd5DKToXYTKAQ6khzewww2g'
}

$since = (Get-Date).ToUniversalTime().AddHours(-$Hours)
$out = Join-Path $PSScriptRoot 'shorts-today.txt'
$lines = @("Scoop - Shorts candidats du $(Get-Date -Format 'yyyy-MM-dd HH:mm') (dernières $Hours h)", 'Format : source | publié (UTC) | id | intégrable | titre', '')
$n = 0
foreach ($name in $channels.Keys) {
  $pl = 'UUSH' + $channels[$name].Substring(2)
  try {
    $r = Invoke-WebRequest "https://www.youtube.com/feeds/videos.xml?playlist_id=$pl" -UseBasicParsing -TimeoutSec 25
    [xml]$x = [System.Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray())
    foreach ($e in $x.feed.entry) {
      $pub = [DateTime]::Parse($e.published).ToUniversalTime()
      if ($pub -lt $since) { continue }
      $id = $e.videoId
      # Vérifie que la vidéo accepte l'intégration (oEmbed renvoie 401/403 sinon)
      $emb = 'oui'
      try { $null = Invoke-WebRequest "https://www.youtube.com/oembed?url=https://www.youtube.com/shorts/$id&format=json" -UseBasicParsing -TimeoutSec 15 } catch { $emb = 'non' }
      $title = ($e.title -replace '\s+', ' ').Trim()
      $lines += "$name | $($pub.ToString('yyyy-MM-dd HH:mm')) | $id | $emb | $title"
      $n++
    }
  } catch {
    $lines += "$name | ERREUR : $($_.Exception.Message)"
  }
}
$lines | Out-File -FilePath $out -Encoding utf8
Write-Output "OK : $n Shorts -> $out"
