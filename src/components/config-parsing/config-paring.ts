import configParsing from '@justichentai/config-parsing'

export default async function test() {
  const res = await configParsing(
    './src/components/config-parsing/test.config.json'
  )
  console.log(res)
}
