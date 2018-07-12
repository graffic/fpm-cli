# fpm-cli

[![Build Status](https://travis-ci.org/graffic/fpm-cli.svg?branch=master)](https://travis-ci.org/graffic/fpm-cli) [![Coverage Status](https://coveralls.io/repos/github/graffic/fpm-cli/badge.svg?branch=master)](https://coveralls.io/github/graffic/fpm-cli?branch=master)

Rewrite of the bad cli app from FPM.

## How to run the app

### Clonning this repo:

- Clone: `git clone https://github.com/graffic/fpm-cli.git`
- Install deps: `yarn` (or also `npm install`)
- Run `yarn start` (or `npm run start`)
- Run with logging: `DEBUG=1 yarn start`

This allows you to run:
- Test: `yarn test`
- Tests with coverage: `yarn coverage`

### Installing

In a local environment or globally.

- yarn: `yarn global add github:graffic/fpm-cli`
- npm: `npm install -g github:graffic/fpm-cli`
- Run the app: `fpm-cli`
- Run with logging: `DEBUG=1 fpm-cli`

## What I want to show.

Besides how I write `javascript` in `NodeJS` I wanted to add some things that I believe are important in most applications:
- Tests: unit (each module), integration (most of the modules together)
- Automation: run the tests and [report coverage](https://coveralls.io/github/graffic/fpm-cli) automatically using [travis-ci](https://travis-ci.org/graffic/fpm-cli).
- Coding standards: one is better than none. I've chosen [Javascript Standard Style](https://standardjs.com/), (it is the first time I'm using it and I'm still getting my head around not using semicolons)

### Missing things

That would be nice to explore/show.
 - Configuration: urls might depend on environment, logging might depend on environment
 - Parameters: the employee name might need to change, perhaps we want to list employees only or to list comments only.

## Assumptions

The **concept**: an app that list FPM employees and get the first posts that has a keyword and a title length from `jsonplaceholder.typicode.com`.

- It doesn't search for the *Linus* keyword but for a keyword that is found in some posts.
- The application outputs the results in the terminal
- The app has also logging, disabled by default and enabled by setting the environment variable `DEBUG=1`