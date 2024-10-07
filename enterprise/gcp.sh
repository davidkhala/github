
# Purpose: Trial, demo, or 10 light users
# vCPUs: 4
# Memory: 32 GB
# Storage: Root=200GB, Data=150GB

image=github-enterprise-3-14-1


list-images() {
  gcloud compute images list --project github-enterprise-public --no-standard-images
}

$@

