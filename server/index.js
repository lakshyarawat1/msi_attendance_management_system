import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import chalk from 'chalk'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const log = console.log

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(PORT, () => {
    log(chalk.white(`\n----------------------------------------`))
    log(chalk.green(`\nServer is running on port ${PORT}`))
    log(chalk.blue(`Access the server at http://localhost:${PORT}`))
})