#!/bin/bash
set -e

# Install jekyll so build commands work in Codex
apt-get update
DEBIAN_FRONTEND=noninteractive apt-get install -y ruby-full build-essential zlib1g-dev

# Install jekyll, bundler, and the theme gem
gem install jekyll bundler jekyll-theme-minimal

