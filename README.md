# Skeleton Eslint config

#### Airbnb eslint with Prettier

[![npm version](https://badge.fury.io/js/eslint-config-skeleton.svg)](http://badge.fury.io/js/eslint-config-skeleton)

This package gives you a seamless integration between [Airbnb eslint](https://www.npmjs.com/package/eslint-config-airbnb) and [Prettier](https://prettier.io/).

Create a `.eslintrc` file with the following:

```yml
extends: 'eslint-config-skeleton'
```

## Installation

### OSX/Linux

To install this package and all its peer dependencies run:

```bash
(
  export PKG=eslint-config-skeleton;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

### Windowss

```bash
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-skeleton
```

## Prettier

### VS Code integration:

Install [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for VS code.
Add to the following to the settings:

```
"prettier.eslintIntegration": true,
```

See the [extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) README for more details.
