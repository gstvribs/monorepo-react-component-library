<h1 align="center">The Design System</h1>

> This is a proof of concept of a monorepo structure for serving react components and design tokens

<p align="center">
  <a href="https://lerna.js.org/">
    <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with Lerna" />
  </a>
  <a href="http://commitizen.github.io/cz-cli/">
	  <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitzen friendly" />
  </a>
  <a href="https://conventionalcommits.org">
	  <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits" />
  </a>
</p>

## Getting started

This is a monorepo repository using [Lerna](https://lerna.js.org/), [Commitzen](http://commitizen.github.io/cz-cli/) and [Conventional Commits](https://conventionalcommits.org) to maintain and manage component versions and for documentation, we use [Storybook](https://storybook.js.org/) and [Compodoc](https://compodoc.app/), you can access by clicking [here](https://thedesignsystem.gustavoribeiro.dev/)

List of packages containing in this repository:

| Name of package                                | Description                                  |
| ---------------------------------------------- | -------------------------------------------- |
| [`@thedesignsystem/components`](./components/) | React components with each package.json file |

## Setup

Local setup to run this project locally

### Tools:

- Node [version 10.20.1](https://nodejs.org/download/release/v10.21.0/)
  - If you use [nvm](https://github.com/nvm-sh/nvm) just run the command `nvm use` in the root folder

### Configuration

- Install all the dependencies: `npm i`
- You can see the components of this repo in:
  - Storybook by running `npm run start:storybook`

### Installing components

All components in this repository are installed separately, that is, each component has its own npm package, for example if you want to install the button component:

`npm i @thedesignsystem/button`
