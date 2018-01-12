# Skeleton Eslint config

[![npm version](https://badge.fury.io/js/eslint-config-skeleton.svg)](http://badge.fury.io/js/eslint-config-skeleton)

Airbnb eslint config with Prettier support.

## Installation

### OSX/Linux
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
