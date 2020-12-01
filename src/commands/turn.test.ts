import { State, state as initialState } from '../state'
import { left, right } from './turn'

describe('MOVE', () => {
  test('it should not turn right when Robot has not been placed', () => {
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
    expect(right(initialState)).toStrictEqual(expectedState)
  })

  test('it should not turn left when Robot has not been placed', () => {
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
    expect(left(initialState)).toStrictEqual(expectedState)
  })

  test('it should turn left when Robot has been placed', () => {
    const initialState: State = {
      currentFace: 'NORTH',
      position: { x: '0', y: '0' },
      isPlaced: true,
    }
    const expectedState: State = {
      currentFace: 'WEST',
      position: { x: '0', y: '0' },
      isPlaced: true,
    }
    expect(left(initialState)).toStrictEqual(expectedState)
  })
  describe('Robot turns RIGHT', () => {
    test('it should face EAST when Robot has been placed NORTH', () => {
      const initialState: State = {
        currentFace: 'NORTH',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      const expectedState: State = {
        currentFace: 'EAST',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      expect(right(initialState)).toStrictEqual(expectedState)
    })

    test('it should face SOUTH when Robot has been placed EAST', () => {
      const initialState: State = {
        currentFace: 'EAST',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      const expectedState: State = {
        currentFace: 'SOUTH',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      expect(right(initialState)).toStrictEqual(expectedState)
    })

    test('it should face WEST when Robot has been placed SOUTH', () => {
      const initialState: State = {
        currentFace: 'SOUTH',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      const expectedState: State = {
        currentFace: 'WEST',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      expect(right(initialState)).toStrictEqual(expectedState)
    })

    test('it should face NORTH when Robot has been placed WEST', () => {
      const initialState: State = {
        currentFace: 'WEST',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      const expectedState: State = {
        currentFace: 'NORTH',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      expect(right(initialState)).toStrictEqual(expectedState)
    })
  })
  describe('Robot turns LEFT', () => {
    test('it should face WEST when Robot has been placed NORTH', () => {
      const initialState: State = {
        currentFace: 'NORTH',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      const expectedState: State = {
        currentFace: 'WEST',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      expect(left(initialState)).toStrictEqual(expectedState)
    })

    test('it should face NORTH when Robot has been placed EAST', () => {
      const initialState: State = {
        currentFace: 'EAST',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      const expectedState: State = {
        currentFace: 'NORTH',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      expect(left(initialState)).toStrictEqual(expectedState)
    })

    test('it should face EAST when Robot has been placed SOUTH', () => {
      const initialState: State = {
        currentFace: 'SOUTH',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      const expectedState: State = {
        currentFace: 'EAST',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      expect(left(initialState)).toStrictEqual(expectedState)
    })

    test('it should face SOUTH when Robot has been placed WEST', () => {
      const initialState: State = {
        currentFace: 'WEST',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      const expectedState: State = {
        currentFace: 'SOUTH',
        position: { x: '0', y: '0' },
        isPlaced: true,
      }
      expect(left(initialState)).toStrictEqual(expectedState)
    })
  })
})
