# Toy Robot

## Introduction

The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units.

- [code](https://github.com/vast-coding/toy-robot.md)

- [requirements](requirements.md)

- [test coverage](https://toy-robot-test-coverage.vercel.app/)

Control is by terminal.

## Commands

- `PLACE` - initial command to place Robot on board. All other commands are ignored until initial `PLACE` command.

- `MOVE` - move one unit forward in current direction. Falling off edge is prevented.

- `LEFT` and `RIGHT` - rotate 90 degrees.

- `REPORT` - display `X`,`Y` and `F` of the robot.

## Developement

- Mac OSX
- Node 14.15.1

## Installation

1. Clone the repository: `git clone https://github.com/vast-coding/toy-robot.git`
2. Run `npm install` inside folder
3. Running application:
   1. to run robot: `npm run dev` _(uses watch mode, so updating `src/data/input.txt` will refresh results)_
   2. tests
      1. to run tests: `npm run test`
      2. to see the test results in browser, simply open [test coverage](https://toy-robot-test-coverage.vercel.app/) or run tests again to generate new results locally.
4. Robot instructions are in `src/data/input.txt`. You can edit this file, and see live changes. _be sure to use `npm run test` first_
