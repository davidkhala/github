set -x
# Purpose: Trial, demo, or 10 light users
# vCPUs: 4
# Memory: 32 GB
# Storage: Root=200GB, Data=150GB

image=github-enterprise-3-14-1
instance=github-enterprise
data_disk=ghe-data-disk
network=ghe-network
firewall=ghe-firewall
list-images() {
  gcloud compute images list --project github-enterprise-public --no-standard-images
}

create(){
  # Create data disk
  gcloud compute disks create $data_disk --size=150GB --zone=${zone}
  # Create and configure network
  gcloud compute networks create $network --subnet-mode auto
  gcloud compute firewall-rules create $firewall --network=$network --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
  
  # Create instance
  gcloud compute instances create $instance --machine-type=e2-highmem-4 \
    --image-project=github-enterprise-public --image=$image \
    --boot-disk-size=200GB --disk name=${data_disk} \
    --metadata serial-port-enable=1 \
    --network=$network \
    --zone=${zone}
   
}
terminate(){
  gcloud compute instances delete $instance --zone=${zone} --quiet
  gcloud compute firewall-rules delete $firewall --quiet
  gcloud compute networks delete $network
  gcloud compute disks delete $data_disk

}


$@

