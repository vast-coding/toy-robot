import { State } from '../state'
import { move } from './move'

describe('MOVE', () => {
  test('it should not move without valid initial PLACE COMMAND', () => {
    const initialState: State = {
      currentFace: undefined,
      position: undefined,
      isPlaced: false,
    }
    const expectedState: State = {
      currentFace: undefined,
      position: undefined,
      isPlaced: false,
    }
    expect(move(initialState)).toStrictEqual(expectedState)
  })

  test('it should MOVE when Robot has been placed', () => {
    const initialState: State = {
      currentFace: 'NORTH',
      position: { x: '0', y: '0' },
      isPlaced: true,
    }
    const expectedState: State = {
      currentFace: 'NORTH',
      position: { x: '0', y: '1' },
      isPlaced: true,
    }
    expect(move(initialState)).toStrictEqual(expectedState)
  })

  test('Robot should not MOVE off the board facing NORTH', () => {
    const state: State = {
      currentFace: 'NORTH',
      position: { x: '0', y: '4' },
      isPlaced: true,
    }
    const expectedState: State = {
      currentFace: 'NORTH',
      position: { x: '0', y: '4' },
      isPlaced: true,
    }
    expect(move(state)).toStrictEqual(expectedState)
  })

  test('Robot should not MOVE off the board facing SOUTH', () => {
    const state: State = {
      currentFace: 'SOUTH',
      position: { x: '0', y: '0' },
      isPlaced: true,
    }
    const expectedState: State = {
      currentFace: 'SOUTH',
      position: { x: '0', y: '0' },
      isPlaced: true,
    }
    expect(move(state)).toStrictEqual(expectedState)
  })

  test('Robot should not MOVE off the board facing EAST', () => {
    const state: State = {
      currentFace: 'EAST',
      position: { x: '4', y: '0' },
      isPlaced: true,
    }
    const expectedState: State = {
      currentFace: 'EAST',
      position: { x: '4', y: '0' },
      isPlaced: true,
    }
    expect(move(state)).toStrictEqual(expectedState)
  })

  test('Robot should not MOVE off the board facing WEST', () => {
    const state: State = {
      currentFace: 'WEST',
      position: { x: '0', y: '0' },
      isPlaced: true,
    }
    const expectedState: State = {
      currentFace: 'WEST',
      position: { x: '0', y: '0' },
      isPlaced: true,
    }
    expect(move(state)).toStrictEqual(expectedState)
  })
})
