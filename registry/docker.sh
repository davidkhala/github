login(){
  export username=${username:-davidkhala}
  curl https://raw.githubusercontent.com/davidkhala/linux-utils/refs/heads/main/apps/docker/login.sh | bash -s github

}
push(){
    local image=$1
    curl https://raw.githubusercontent.com/davidkhala/linux-utils/refs/heads/main/apps/docker/push.sh | bash -s github $image
}

$@
