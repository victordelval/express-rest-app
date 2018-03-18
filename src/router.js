import auth from './routes/auth'
import user from './routes/me'
import music from './routes/music'

export default app => {
    app.use('/auth', auth)
    app.use('/me', user)
    app.use('/music', music)
}