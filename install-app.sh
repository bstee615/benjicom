# install tooling
yes | sudo yum update
yes | sudo yum install git
sudo curl https://nodejs.org/dist/latest/node-v11.13.0-linux-x64.tar.gz > node.tgz
tar xzf node.tgz
cd node-v11.13.0-linux-x64/bin
export PATH="$PATH:$(pwd)"
npm install -g npm
cd ../..

# download project
git clone http://github.com/bstee615/benjicom
cd benjicom

# install dependencies
npm i

# run
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
npm start > log.txt