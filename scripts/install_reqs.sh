#!/bin/bash
sudo yum -y update
sudo yum install -y git node yarn
cd /home/ec2-user
git clone https://github.com/bstee615/benjicom.git
cd benjicom
sudo bash scripts/install_yarn.sh
sudo yarn install