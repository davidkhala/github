
function Install-GH {
  winget install --accept-source-agreements --id GitHub.cli	
}
function Update-GH() {
  winget upgrade --id GitHub.cli
}
