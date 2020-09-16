import app from './app'
import { config } from 'dotenv'

config()

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
