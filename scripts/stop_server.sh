#!/bin/bash

kill "$(sudo ps -ef | grep node | head -n1 | awk '{ print $2 }')"