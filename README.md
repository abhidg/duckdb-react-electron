[![tests](https://github.com/abhidg/duckdb-react-electron/actions/workflows/tests.yml/badge.svg)](https://github.com/abhidg/duckdb-react-electron/actions/workflows/tests.yml)

# duckdb-react-electron

This is a repository to showcase a simple electron app with a Node.js backend using DuckDB and React frontend.
Using DuckDB shows how to use native modules in an Electron app.

## Components

There are several components that go into a Electron app:

* **Frontend**: A frontend framework, such as React / Vue.js. It is possible to write a
  Electron app without a frontend framework as well, as an Electron app can be a thin
  wrapper around a website.
* **Backend**: Usually using some native Node.js modules. The backend does not need to
  in Node.js though, it can be in any language.
* **webpack**: webpack is one of several Javascript/Typescript bundlers that minifies and
  'bundles' the frontend component of the Electron app into one file that can be loaded
  from the `index.html` file. Webpack configurations can be complex, so it is recommended
  to start with a template.

The frontend component in Electron is isolated in the browser context and does
not have access to native Node.js and no direct filesystem access. Communication
between the frontend and backend happen through an IPC layer.

## Local setup

1. Ensure `make` works: `xcode-select --install` on macOS, or `sudo apt install make` on Debian
2. Install Node.js 21 through package manager or using something like [`nvm`](https://github.com/nvm-sh/nvm).
3. Run tests: `make test`
4. Start app: `make start`
5. Install pre-commit and pre-commit hooks: `pre-commit install`

## How this project was created

While this repository can be used as a template, here are the steps to recreate from the source
electron-forge template using [Yarn](https://yarnpkg.com).

1. First add `create-electron-app` as a global script, this is so that we can use
   it to bootstrap a new repository
   ```shell
   yarn add global create-electron-app
   ```

2. Create electron app template using the webpack typescript template.
   ```shell
   yarn create electron-app my-new-app -- --template=webpack-typescript
   ```

3. Upgrade to the Yarn 4 and pin the yarn version
   ```shell
   corepack enable
   ```
   This might fail if you do not have write access to the location where `corepack`
   is installed, in that case, use a directory in your PATH where you have write access:
   ```shell
   corepack enable --install-directory ~/bin
   ```

4. Pin the yarn version:
   ```shell
   corepack use 'yarn@4'
   ```

4. Yarn install and start
   ```shell
   yarn
   yarn start
   ```

5. Commit the `yarn.lock` file to pin dependencies.
