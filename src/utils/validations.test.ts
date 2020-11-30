import { State, state as initialState } from '../state'
import {
  checkIsValidCoordinates,
  checkIsValidFace,
  checkIsValidInstruction,
} from './validations'

describe('validations', () => {
  test('checkIsValidCoordinates should give true for valid coordinates', () => {
    expect(checkIsValidCoordinates('1', '4')).toStrictEqual(true)
  })

  test('checkIsValidCoordinates should give false for invalid coordinates', () => {
    expect(checkIsValidCoordinates('10', '40')).toStrictEqual(false)
  })

  test('checkIsValidFace should give true for valid face', () => {
    expect(checkIsValidFace('NORTH')).toStrictEqual(true)
  })
  test('checkIsValidFace should give false for invalid face', () => {
    expect(checkIsValidFace('north')).toStrictEqual(false)
  })

  test('checkIsValidInstruction should give true for valid instruction', () => {
    expect(checkIsValidInstruction('MOVE')).toStrictEqual(true)
  })
  test('checkIsValidInstruction should give false for invalid instruction', () => {
    expect(checkIsValidInstruction('move')).toStrictEqual(false)
  })
})
