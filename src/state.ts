export type Face = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST'
export type CurrentFace = undefined | Face
export type Coordinate = { x: string; y: string }
export type Position = undefined | Coordinate

let currentFace: Face | undefined
let position: Coordinate | undefined
let isPlaced = false

export type State = {
  currentFace: CurrentFace
  position: Position
  isPlaced: boolean
}
export const state = {
  currentFace,
  position,
  isPlaced,
}
