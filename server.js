import Express from 'express'

const server = Express()
const port = process.env.PORT || 3000

server.use(Express.static('src'))
server.listen(port, () => console.log(`Server running at localhost:${port}`))

export { server }
