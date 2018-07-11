# fpm-cli

[![Build Status](https://travis-ci.org/graffic/fpm-cli.svg?branch=master)](https://travis-ci.org/graffic/fpm-cli) [![Coverage Status](https://coveralls.io/repos/github/graffic/fpm-cli/badge.svg?branch=master)](https://coveralls.io/github/graffic/fpm-cli?branch=master)

Rewrite of the bad cli app from FPM.

## What I want to show.

Besides how I write `javascript` in `NodeJS` I wanted to add some things that I believe are important in most applications:
- Tests.
- Automation: run the tests and [report coverage](https://coveralls.io/github/graffic/fpm-cli) automatically using [travis-ci](https://travis-ci.org/graffic/fpm-cli).
- Coding standards: one is better than none. I've chosen Javascript Standard, (it is the first time I'm using it and I'm still getting around to not using `;`)

### Missing things

That would be nice to explore/show.
 - Configuration: urls might depend on environment.
 - Parameters:

## Assumptions

The **concept**: an app that list FPM employees and get the first Linus posts from somewhere.

- The application outputs the results in the terminal
- The app has also logging, by default configured