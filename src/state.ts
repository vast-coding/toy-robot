export type CurrentFace = undefined | 'NORTH' | 'EAST' | 'SOUTH' | 'WEST'
export type Coordinate = { x: string; y: string }
export type Position = undefined | Coordinate

let currentFace: CurrentFace
let position: Position
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
