#!/usr/bin/env bash

set -eo pipefail

aria2c -x 10 https://github.com/pocketbase/pocketbase/releases/download/v0.22.7/pocketbase_0.22.7_linux_amd64.zip \
  && unzip pocketbase_0.22.7_linux_amd64.zip pocketbase \
  && mv pocketbase pb_bin \
  && rm pocketbase_0.22.7_linux_amd64.zip
