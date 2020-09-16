import 'reflect-metadata'
import express, { json, Application } from 'express'
import { createConnection } from 'typeorm'
import cors from 'cors'

createConnection()
const app: Application = express()

app.use(cors())
app.use(json())

export default app
