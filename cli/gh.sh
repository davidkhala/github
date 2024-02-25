login() {
  # This is interactive
  gh auth login
}
rename-codespace() {
  gh codespace edit --codespace=$1 --display-name=$2

}

$1
