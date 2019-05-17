#!/usr/bin/env bash

# If yarn is not detected, install it.
if which yarn; then
  echo "Skipping installation of yarn -- yarn already installed."
  echo "yarn --version: `yarn --version`"
else
  echo "which yarn: `which yarn`"
  echo "Yarn is not installed and accessible."
  echo "Installing yarn..."

  curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
  sudo yum install -y nodejs
  sudo yum install -y yarn

  echo "... and finished installing yarn."
fi