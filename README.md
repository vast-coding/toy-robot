# Toy Robot

## Introduction

The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units.

- [code](https://github.com/vast-coding/toy-robot)

- [requirements](https://github.com/vast-coding/toy-robot/blob/main/repuirements.md)

- [test coverage](https://toy-robot-tests-coverage-report.vercel.app)

- [TypeDoc documentation](https://toy-robot-documentation-ts.vercel.app/)

Output and control is by terminal.

## Commands

A list of commands to run are in the `src/data/input.txt` file.

Starting the simulation will execute each command in this text file, line by line. Editing this file will update the results in the terminal.

- `PLACE` - initial command to place Robot on board. All other commands are ignored until initial valid `PLACE` command.

- `MOVE` - move one unit forward in current direction. Falling off edge is prevented.

- `LEFT` and `RIGHT` - rotate 90 degrees.

- `REPORT` - display `X`,`Y` and `F` of the robot in the terminal.

## Developement

- Jest
- Mac OSX
- Node 14.15.1
- TypeDoc
- Typescript

## Installation

### In terminal:

1. Clone the repository: `git clone https://github.com/vast-coding/toy-robot.git`
2. Enter folder `cd toy-robot`
3. Run `npm install`
4. Run `npm start` (runs in watch mode)
5. Modify the data in `src/data/input.txt`, results will refresh immediately in terminal

### Tests

- to run tests and generate test-coverage data: `npm run test`
- to run tests in watch mode: `npm run test:watch`
- to see the test results in the browser, simply open [test coverage](https://toy-robot-tests-coverage-report.vercel.app) or run tests again to generate new results locally.

### Updating instructions

Robot instructions are in `src/data/input.txt`. You can edit and save this file, and see resulting live changes in the terminal. _be sure to use `npm run start` first_

### Other terminal commands

- `npm run docs` generate documentation using TypeDoc
- `npm run test:watch-coverage` update test and coverage results
