# Scoop - récupère les titres du jour depuis des flux RSS de médias francophones
# Usage : powershell -ExecutionPolicy Bypass -File scripts\fetch-news.ps1
# Sortie : scripts\news-today.txt (lu ensuite pour rédiger la leçon du jour)

$ErrorActionPreference = 'Continue'
$out = Join-Path $PSScriptRoot 'news-today.txt'
$feeds = [ordered]@{
  'Le Monde - Une'          = 'https://www.lemonde.fr/rss/une.xml'
  'Le Monde - International'= 'https://www.lemonde.fr/international/rss_full.xml'
  'franceinfo'              = 'https://www.francetvinfo.fr/titres.rss'
  'France 24'               = 'https://www.france24.com/fr/rss'
  'Le Monde - Economie'     = 'https://www.lemonde.fr/economie/rss_full.xml'
  'Le Monde - Culture'      = 'https://www.lemonde.fr/culture/rss_full.xml'
  'Le Monde - Pixels/Medias'= 'https://www.lemonde.fr/actualite-medias/rss_full.xml'
}

function Get-Text($node) {
  if ($null -eq $node) { return '' }
  if ($node -is [string]) { $t = $node } else { $t = $node.InnerText }
  return (($t -replace '<[^>]+>', ' ') -replace '\s+', ' ').Trim()
}

$lines = @("Scoop - revue de presse brute du $(Get-Date -Format 'yyyy-MM-dd HH:mm')", '')
foreach ($name in $feeds.Keys) {
  try {
    $r = Invoke-WebRequest -Uri $feeds[$name] -UseBasicParsing -TimeoutSec 25
    [xml]$x = [System.Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray())
    $lines += "=== $name ==="
    foreach ($it in ($x.rss.channel.item | Select-Object -First 15)) {
      $d = Get-Text $it.description
      if ($d.Length -gt 300) { $d = $d.Substring(0, 300) + '...' }
      $lines += "- $(Get-Text $it.title)"
      $lines += "    $d"
      $lines += "    [$($it.pubDate)] $(Get-Text $it.link)"
    }
    $lines += ''
  } catch {
    $lines += "=== $name === ERREUR : $($_.Exception.Message)"
  }
}
$lines | Out-File -FilePath $out -Encoding utf8
Write-Output "OK -> $out"
