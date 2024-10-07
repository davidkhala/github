# Release
[Download index page](https://enterprise.github.com/releases)

Version log
- 3.14.1: September 23, 2024

## Install
GitHub Enterprise Server requires two storage volumes
- one mounted to the root filesystem path (/)
- the other to the user filesystem path (/data/user).

### on Hyper-V
Install media format: VHD

### on OpenStack KVM
Install media format: QCOW2

### on VMWare
Install media format: OVA

### on GCP 
[Official guide](https://docs.github.com/en/enterprise-server@3.14/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-google-cloud-platform)

# [Storage architecture](https://docs.github.com/en/enterprise-server@3.14/admin/overview/system-overview#storage-architecture)
GitHub Enterprise Server requires two storage volumes: root + data
## Data volume
Data volume is mounted to the user filesystem path (/data/user)
## Root volume
Root volume is ephemeral: Any data on the root filesystem will be replaced during upgrade

Root volume is split into 4 partitions
- 2 small for boot modes (BIOS and UEFI)
- 2 large for the software primary and upgrade/rollback


