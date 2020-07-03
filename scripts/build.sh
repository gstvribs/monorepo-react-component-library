#!/usr/bin/env bash

set -e # exit with nonzero exit code if anything fails

rm -rf dist

# Generate static storybook
mkdir dist
npm run build:storybook
