import configParsing from '@justichentai/config-parsing/index'
import path from 'path'

console.log('configParsing解析中')
console.log(__dirname)
console.log(path.resolve(__dirname, 'test.config.ts'))

export default function test() {
  configParsing(path.resolve(__dirname, 'test.config.ts'))
}
