import express from 'express'
import config from './config'
import router from './router'

let _server

const server = {
    start() {
        const app = express()

        config(app)
        router(app)

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