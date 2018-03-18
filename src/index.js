import express from 'express'
import config from './config'

let _server

const server = {
    start() {
        const app = express()

        config(app)

        // Routes
        app.get('/', (req, res, next) => {
            res.status(200)
                .json({ data: 'Metodo get'})
        })

        app.post('/', (req, res, next) => {
            res.status(201)
                .json({ data: 'Metodo post'})
        })

        app.put('/', (req, res, next) => {
            res.status(201)
                .json({ data: 'Metodo put'})
        })

        app.delete('/', (req, res, next) => {
            res.status(200)
                .json({ data: 'Metodo delete'})
        })

        _server = app.listen('9000', () => {
            if (process.env.NODE_ENV !== 'test') {
                console.log('Server listening http://localhost:9000')
            }
        })

    },

    close() {
        _server.close()
    }
}

export default server

if (!module.parent) {
    server.start()
}