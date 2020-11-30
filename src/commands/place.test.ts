import { State, state as initialState } from '../state'

import { place } from './place'

describe('PLACE command', () => {
  const createInitialState = (): State => ({
    currentFace: undefined,
    position: undefined,
    isPlaced: false,
  })

  test('it should PLACE the robot with valid x, y, face values', () => {
    expect(place(createInitialState(), '1', '2', 'NORTH')).toStrictEqual({
      currentFace: 'NORTH',
      position: { x: '1', y: '2' },
      isPlaced: true,
    })
  })

  test('it should not PLACE the robot with invalid x, y, face values', () => {
    expect(place(createInitialState(), '1', '2', 'invalid')).toStrictEqual(
      createInitialState()
    )
  })

  test('it should not PLACE the robot off the board', () => {
    expect(place(createInitialState(), '10', '20', 'NORTH')).toStrictEqual(
      createInitialState()
    )
  })
})
