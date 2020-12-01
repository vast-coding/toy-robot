const validFaces: readonly string[] = ['NORTH', 'EAST', 'SOUTH', 'WEST']

export const validInstructions: readonly string[] = [
  'PLACE',
  'MOVE',
  'RIGHT',
  'LEFT',
  'REPORT',
]
export type ValidInstructions = 'PLACE' | 'MOVE' | 'RIGHT' | 'LEFT' | 'REPORT'

// coordinates are validated as strings from commandline.  I feel this approach is simple and effective
export const validSquares: readonly string[] = ['0', '1', '2', '3', '4']

/**
 * createValidator
 *
 * All validations are done by looking up the string in a lookup table.
 *
 * This is the general typescript generic to create validation functions.
 *
 * @param lookup - the object to act a valid lookup dictionary.
 * @returns validation function specific to that lookup object
 */
const createValidator = <T>(lookup: T) => (token: any): token is T[keyof T] =>
  Object.values(lookup).includes(token as T[keyof T])

/**
 * checkIsValidInstruction
 *
 * @param string - the possible command as a string
 * @returns boolean - is the string a command
 *
 * @example
 *
 * ```ts
 * const isValid = checkIsValidInstruction('REPORT')
 * ```
 */
export const checkIsValidInstruction = createValidator(validInstructions)

/**
 * checkIsValidFace
 *
 * @param string - the possible command as a string
 * @returns boolean - is the string a valid Face
 *
 * @example
 *
 * ```ts
 * const isValid = checkIsValidFace('NORTH')
 * ```
 */
export const checkIsValidFace = createValidator(validFaces)

/**
 * checkIsValidRange
 *
 * Used for checking both x and y board positions
 *
 * @param string - the possible x or y board coordinate as a string
 * @returns boolean - is the given coordinate a valid coordinate
 *
 * @example
 *
 * ```ts
 * const isValid = checkIsValidRange('3')
 * ```
 */
const checkIsValidRange = createValidator(validSquares)

/**
 * checkIsValidCoordinates
 *
 * Used for checking both x, y board positions
 *
 * @param x - x coordinate
 * @param y - y coordinate
 * @returns boolean - are *both* x and y coordinates on the board?
 *
 * @example
 *
 * ```ts
 * const isValid = checkIsValidCoordinates('3','2')
 * ```
 */
export const checkIsValidCoordinates = (x?: string, y?: string) =>
  checkIsValidRange(x) && checkIsValidRange(y)

/**
 * checkIsValidPlace
 *
 * Returns true if a valid PLACE command has been entered
 *
 * @param string - the possible command as a string
 * @returns boolean - is the string a command
 *
 * @example
 *
 * ```ts
 * const isValid = checkIsValidPlace('PLACE 1,2,NORTH')
 * ```
 */
export const checkIsValidPlace = (instruction: string, args?: string) => {
  if (!args || instruction !== 'PLACE') {
    return false
  }
  const [x, y, face] = args.split(',')
  return checkIsValidFace(face) && checkIsValidCoordinates(x, y)
}
