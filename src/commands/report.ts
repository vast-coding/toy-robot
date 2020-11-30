import { Coordinate, State } from '../state'

/**
 * REPORT
 *
 * Does not modify the state
 *
 * Simply console.logs the state.
 *
 * The returned string is used by jest for debugging
 *
 * @param state - the state of the app
 * @returns Robot position in required format
 */
export const report = (state: State) => {
  const validPosition = state.position as Coordinate
  const appState = `Output: ${validPosition.x},${validPosition.y},${state.currentFace}`
  console.log(appState)
  return appState
}
