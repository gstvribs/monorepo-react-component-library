#!/usr/bin/env bash

set -e # exit with nonzero exit code if anything fails

# Changing name and user to differentiate commit and tag from the pipeline
git config user.name "design-system-bot"
git config user.email "design-system@bot.com"
