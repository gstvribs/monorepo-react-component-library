#!/usr/bin/env bash

set -e # exit with nonzero exit code if anything fails

# Lists all modified projects and will be published
npm run lerna:list:changed

# Build all changed projects
npm run lerna:build:changed

# Run lint on all projects
npm run lint:all

# Changing name and user to differentiate commit and tag from the pipeline
git config user.name "design-system-bot"
git config user.email "design-system@bot.com"
