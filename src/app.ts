import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'

createConnection()
const app = express()

export default app
