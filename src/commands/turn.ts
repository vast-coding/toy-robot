import { State } from '../state'
import { moveOptions } from '../utils/movements'
type TurnDirection = 'LEFT' | 'RIGHT'

/**
 * turn
 *
 * function used by right and left function to turn robot appropriately
 *
 * @param state - the state of the app
 * @returns state
 */
const turn = (state: State, turnDirection: TurnDirection) => {
  if (!state.isPlaced || !state.currentFace) {
    return state
  }
  const nextStep = moveOptions[state.currentFace]
  state.currentFace = nextStep[turnDirection]
  return state
}

export const right = (state: State) => turn(state, 'RIGHT')
export const left = (state: State) => turn(state, 'LEFT')
