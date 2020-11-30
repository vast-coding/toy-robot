import { State, state as initialState } from '../state'

import { report } from './report'

describe('REPORT', () => {
  const originalLog = console.log
  const mockedConsole = (output: string) => output
  beforeEach(() => (console.log = mockedConsole))
  afterEach(() => (console.log = originalLog))

  test('Robot should report when it has been placed', () => {
    const state: State = {
      currentFace: 'NORTH',
      position: { x: '0', y: '0' },
      isPlaced: true,
    }
    const output: string = `Output: 0,0,NORTH`
    expect(report(state)).toStrictEqual(output)
  })
})
