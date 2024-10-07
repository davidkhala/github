set -x
# Purpose: Trial, demo, or 10 light users
# vCPUs: 4
# Memory: 32 GB
# Storage: Root=200GB, Data=150GB

image=github-enterprise-3-14-1
instance=github-enterprise
data_disk=ghe-data-disk

list-images() {
  gcloud compute images list --project github-enterprise-public --no-standard-images
}

create(){
  # Create data disk
  gcloud compute disks create $data_disk --size=150GB --zone=${zone}
  gcloud compute instances create $instance --machine-type e2-highmem-4 \
    --image-project github-enterprise-public --image=$image \
    --disk name=${data_disk} \
    --metadata serial-port-enable=1 \
    --network NETWORK-NAME \
    --zone=${zone}
   
}


$@

