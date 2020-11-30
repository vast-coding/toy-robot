import { CurrentFace, State } from '../state'
import {
  checkIsValidCoordinates,
  checkIsValidFace,
  checkIsValidPlace,
} from '../utils/validations'

/**
 * PLACE
 *
 * Places the Robot to initial square.
 *
 * Also used by Move command to move to adjacent square.
 *
 * First validates the new position.
 *
 * If valid the state is updated with new position.
 *
 * @param state - the state of the app
 * @returns state
 */
export const place = (state: State, x: string, y: string, face: string) => {
  const isValidFace = checkIsValidFace(face)
  const isValidCoordinates = checkIsValidCoordinates(x, y)
  const validFace = face as CurrentFace

  if (isValidFace && isValidCoordinates) {
    state.position = { x, y }
    state.currentFace = validFace
    state.isPlaced = true
  }
  return state
}
