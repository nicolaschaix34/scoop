# Scoop - mini serveur local (facultatif : index.html marche aussi en double-clic)
# Usage : powershell -ExecutionPolicy Bypass -File scripts\serve.ps1 [-Port 8080]
param([int]$Port = 8080)
$root = Split-Path $PSScriptRoot -Parent
$mime = @{ '.html'='text/html; charset=utf-8'; '.js'='text/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.json'='application/json'; '.svg'='image/svg+xml'; '.png'='image/png'; '.ico'='image/x-icon'; '.md'='text/plain; charset=utf-8' }
$l = [System.Net.HttpListener]::new()
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
Write-Output "Scoop sur http://localhost:$Port/  (Ctrl+C pour arreter)"
while ($l.IsListening) {
  $ctx = $l.GetContext()
  $path = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
  if ($path -eq '') { $path = 'index.html' }
  $full = [System.IO.Path]::GetFullPath((Join-Path $root $path))
  $res = $ctx.Response
  if ($full.StartsWith($root) -and (Test-Path $full -PathType Leaf)) {
    $bytes = [System.IO.File]::ReadAllBytes($full)
    $ext = [System.IO.Path]::GetExtension($full).ToLower()
    $res.ContentType = if ($mime[$ext]) { $mime[$ext] } else { 'application/octet-stream' }
    $res.Headers.Add('Cache-Control', 'no-store')
    $res.OutputStream.Write($bytes, 0, $bytes.Length)
  } else { $res.StatusCode = 404 }
  $res.Close()
}
