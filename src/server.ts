import 'reflect-metadata'
import app from './app'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'

dotenv.config()
createConnection()

const PORT = 4000
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
