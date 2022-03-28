# OnionPeeler

[![TypeScript version][ts-badge]][typescript-39]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![CircleCI](https://circleci.com/gh/barthogenes/OnionPeeler/tree/master.svg?style=svg)](https://circleci.com/gh/barthogenes/OnionPeeler/tree/master)
[![codecov](https://codecov.io/gh/barthogenes/OnionPeeler/branch/master/graph/badge.svg?token=4RP6MXG20B)](https://codecov.io/gh/barthogenes/OnionPeeler)

My personal attempt at solving [Tom's Data Onion](https://www.tomdalling.com/toms-data-onion/) puzzle using NodeJS and TypeScript.

## Decoded layers

| **Layer nr** | **Link to decoded file**                          |
| ------------ | ------------------------------------------------- |
| 1            | [Click here (Spoiler alert!)](Layer0-Decoded.txt) |
| 2            | [Click here (Spoiler alert!)](Layer1-Decoded.txt) |
| 3            | [Click here (Spoiler alert!)](Layer2-Decoded.txt) |
| 4            | [Click here (Spoiler alert!)](Layer3-Decoded.txt) |
| 5            | WIP 🚧                                             |
| 6            | WIP 🚧                                             |

This repository was created from the wonderful <https://github.com/jsynowiec/node-typescript-boilerplate> template.

🏃🏽 Tools used:

- [TypeScript][typescript] [3.9][typescript-39]
- [ESLint][eslint] with some initial rules recommendation
- [Jest][jest] for fast unit testing and code coverage
- Type definitions for Node.js and Jest
- [Prettier][prettier] to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations
- simple example of TypeScript code and unit test
- .editorconfig for consistent file format
- configuration for [GitHub Actions][gh-actions]

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

## Available Scripts

- `start` - run my onion decryption program (work in progress),
- `clean` - remove coverage data, Jest cache and transpiled files,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/barthogenes/OnionPeeler/blob/master/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-3.9-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2012.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v12.x/docs/api/
[typescript]: https://www.typescriptlang.org/
[typescript-39]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/barthogenes/OnionPeeler/blob/master/LICENSE
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[gh-actions]: https://github.com/features/actions
[prettier]: https://prettier.io
