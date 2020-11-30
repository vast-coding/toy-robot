import { State } from '../state'
import { moveOptions } from '../utils/movements'
import { place } from './place'

/**
 * MOVE
 *
 * Moves the Robot to square it is facing, if that square is on the board.
 *
 * Calculates the new Robot position, then passes that position to the place command.
 *
 * The place command will then move if position is valid.
 *
 * @param state - the state of the app
 * @returns state
 */
export const move = (state: State) => {
  if (!state.isPlaced || !state.position || !state.currentFace) {
    return state
  }
  const step = moveOptions[state.currentFace]
  const newState = place(
    state,
    `${Number(state.position.x) + step.x}`,
    `${Number(state.position.y) + step.y}`,
    state.currentFace
  )
  return newState
}
