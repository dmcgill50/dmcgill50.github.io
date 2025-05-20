#!/bin/bash
set -e

# Install jekyll so build commands work in Codex
apt-get update
DEBIAN_FRONTEND=noninteractive apt-get install -y ruby-full build-essential zlib1g-dev

# Install jekyll and bundler gems
gem install jekyll bundler

