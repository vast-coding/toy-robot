# Toy Robot

## Introduction

The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units.

- [code](https://github.com/vast-coding/toy-robot)

- [requirements](https://github.com/vast-coding/toy-robot/blob/main/repuirements.md)

- [test coverage](https://toy-robot-test-coverage.vercel.app/)

- [TypeDoc documentation](https://toy-robot-documentation.vercel.app/)

Output and control is by terminal.

## Commands

A list of commands are in the `src/input.txt` file.

Starting the simulation by running `npm run dev` will execute each command in this test file, line by line.

- `PLACE` - initial command to place Robot on board. All other commands are ignored until initial valid `PLACE` command.

- `MOVE` - move one unit forward in current direction. Falling off edge is prevented.

- `LEFT` and `RIGHT` - rotate 90 degrees.

- `REPORT` - display `X`,`Y` and `F` of the robot in the terminal.

## Developement

- Mac OSX
- Node 14.15.1
- Typescript
- Jest

## Installation

1. Clone the repository: `git clone https://github.com/vast-coding/toy-robot.git`
2. Run `npm install` inside folder
3. Running application:

   1. To run robot simulation in terminal: `npm run dev` _(uses watch mode, so updating `src/data/input.txt` will refresh results)_

   2. tests
      - to run tests: `npm run test`
      - to see the test results in browser, simply open [test coverage](https://toy-robot-test-coverage.vercel.app/) or run tests again to generate new results locally.

4. Robot instructions are in `src/data/input.txt`. You can edit this file, and see live changes. _be sure to use `npm run dev` first_

### Other terminal commands

- `npm run test:watch` for developement and debugging

- `npm run docs` generate documentation using TypeDoc
