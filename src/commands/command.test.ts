import { State } from '../state'
import { command } from './command'

describe('Robot command', () => {
  test('Robot should ignore invalid commands - command not recognized', () => {
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
    expect(command(initialState, 'gibberish')).toStrictEqual(expectedState)
  })

  test('Robot should act on valid PLACE commands', () => {
    const initialState: State = {
      currentFace: undefined,
      position: undefined,
      isPlaced: false,
    }
    const expectedState: State = {
      currentFace: 'NORTH',
      position: { x: '1', y: '1' },
      isPlaced: true,
    }
    expect(command(initialState, 'PLACE 1,1,NORTH')).toStrictEqual(
      expectedState
    )
  })

  test('it should ignore invalid PLACE commands - out of bounds', () => {
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
    expect(command(initialState, 'PLACE 100,100,NORTH')).toStrictEqual(
      expectedState
    )
  })
})

describe('Robot command - ignore all commands before placement', () => {
  const originalLog = console.log
  const mockedConsole = (output: string) => output
  beforeEach(() => (console.log = mockedConsole))
  afterEach(() => (console.log = originalLog))
  test('Robot should ignore valid commands before placement - MOVE', () => {
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
    expect(command(initialState, 'MOVE')).toStrictEqual(expectedState)
  })

  test('Robot should ignore valid commands before placement - RIGHT', () => {
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
    expect(command(initialState, 'RIGHT')).toStrictEqual(expectedState)
  })

  test('Robot should ignore valid commands before placement - LEFT', () => {
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
    expect(command(initialState, 'LEFT')).toStrictEqual(expectedState)
  })

  test('Robot should ignore valid commands before placement - REPORT', () => {
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
    expect(command(initialState, 'REPORT')).toStrictEqual(expectedState)
  })

  test('Robot should act on valid commands after placement - REPORT', () => {
    const initialState: State = {
      currentFace: 'NORTH',
      position: { x: '1', y: '2' },
      isPlaced: true,
    }
    const expectedState: State = {
      currentFace: 'NORTH',
      position: { x: '1', y: '2' },
      isPlaced: true,
    }
    expect(command(initialState, 'REPORT')).toStrictEqual(expectedState)
  })

  test('Robot should act on valid commands after placement - MOVE', () => {
    const initialState: State = {
      currentFace: 'NORTH',
      position: { x: '1', y: '2' },
      isPlaced: true,
    }
    const expectedState: State = {
      currentFace: 'NORTH',
      position: { x: '1', y: '3' },
      isPlaced: true,
    }
    expect(command(initialState, 'MOVE')).toStrictEqual(expectedState)
  })
})
