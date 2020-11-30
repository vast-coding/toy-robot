# Toy Robot

## Introduction

The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units.

- [requirements](requirements.md)

- [test coverage](https://toy-robot-test-coverage.vercel.app/)

Control is by terminal.

## Commands

- `PLACE` - initial command to place Robot on board. All other commands are ignored until initial `PLACE` command.

- `MOVE` - move one unit forward in current direction. Falling off edge is prevented.

- `LEFT` and `RIGHT` - rotate 90 degrees.

- `REPORT` - display `X`,`Y` and `F` of the robot.

## Developement tools

- Mac OSX
- Node 14.15.1
-

## Installation

1. `git clone my repo` - clone repo to your machine
2. `npm install` - install and cd to folder
3. Run:
   1. to run robot: `npm run dev` _(uses watch mode, so updating `src/data/input.txt` will trigger reload)_
   2. tests
      1. to run tests: `npm run test`
      2. to see test results in browser, simply open
4. Robot instructions are in `src/data/input.txt`. You can edit this file, and see live changes. _be sure to use `npm run test` first_
