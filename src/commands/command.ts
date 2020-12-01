import {
  ValidInstructions,
  checkIsValidInstruction,
  checkIsValidPlace,
} from '../utils/validations'

import { State } from '../state'
import { left } from './turn'
import { move } from './move'
import { place } from './place'
import { report } from './report'
import { right } from './turn'

/**
 * No operation
 *
 * @remarks
 * CommandList is an object containing all valid commands.
 *
 * `PLACE` is the only command that needs more than 1 parameter.
 *
 * That is why it is called directly inside the `command()` function when a valid `PLACE` command is entered.
 *
 * All other commands: `MOVE`,`RIGHT`,`LEFT`,`REPORT`, are called using commandList.
 * The `commandList` dictionary/lookup is used for both validating input and
 * calling functions.
 */
/* istanbul ignore next */
const noop = () => {}

/**
 * `commandList` validation dictionary
 *
 * @remarks
 * The `commandList` dictionary is used for both validating input and
 * calling the functions.
 */
const commandList = {
  // PLACE command is called directly instead of commandList
  PLACE: noop,
  MOVE: move,
  RIGHT: right,
  LEFT: left,
  REPORT: report,
}

/**
 * Parses the input in `src/data/input.txt` line by line.
 *
 * @param state - the state of the app
 * @param line - the single line from input, entered as a string
 * @returns state
 *
 * @example
 *
 * ```ts
 * const state ={isPlaced, position:{x:'1',y:'2'}, currentFace:'NORTH'}
 * const instruction = 'MOVE'
 * const newState = command(state, instruction)
 * ```
 */
export const command = (state: State, line: string) => {
  const [instruction, args] = line.split(' ')
  const isValidPlaceCommand = checkIsValidPlace(instruction, args)
  if (isValidPlaceCommand) {
    const [x, y, face] = args.split(',')
    place(state, x, y, face)
    // display(state)
    return state
  }
  // ignore all instructions before placement
  if (!state.isPlaced) {
    return state
  }
  // instructions other than PLACE will be run here:
  const isValidInstruction = checkIsValidInstruction(instruction)
  const validInstruction = instruction as ValidInstructions
  /* istanbul ignore else */
  if (isValidInstruction) {
    commandList[validInstruction](state)
  }
  return state
}
