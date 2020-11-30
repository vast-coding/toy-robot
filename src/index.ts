import { command } from './commands'
import fs from 'fs'
import readline from 'readline'
import { state } from './state'

async function processLineByLine() {
  const fileStream = fs.createReadStream('src/data/input.txt')

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  for await (const line of rl) {
    command(state, line)
  }
}

processLineByLine()
