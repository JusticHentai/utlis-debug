import simpleEnv, {
  parseScriptCommand,
} from '@justichentai/vite-plugin-simple-env'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const { env } = parseScriptCommand()

console.log(env)

export default defineConfig({
  plugins: [vue(), simpleEnv()],
})
