export type Face = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST'

type Step = -1 | 0 | 1

export type Movement = {
  readonly x: Step
  readonly y: Step
  readonly RIGHT: Face
  readonly LEFT: Face
}

export type MoveOptions = {
  readonly NORTH: Movement
  readonly EAST: Movement
  readonly SOUTH: Movement
  readonly WEST: Movement
}

export const moveOptions: MoveOptions = {
  NORTH: { x: 0, y: 1, RIGHT: 'EAST', LEFT: 'WEST' },
  EAST: { x: 1, y: 0, RIGHT: 'SOUTH', LEFT: 'NORTH' },
  SOUTH: { x: 0, y: -1, RIGHT: 'WEST', LEFT: 'EAST' },
  WEST: { x: -1, y: 0, RIGHT: 'NORTH', LEFT: 'SOUTH' },
}
