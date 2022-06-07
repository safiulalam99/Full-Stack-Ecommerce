export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      JWT_SECRET: string
      ENV: 'test' | 'dev' | 'prod'
    }
  }
}
