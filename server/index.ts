import next from 'next'
import express from 'express'
// import { Response, Request } from 'express'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // server.get('/a', (req: Request, res: Response) => {
  //   return app.render(req, res, '/a')
  // })

  // server.get('/b', (req: Request, res: Response) => {
  //   return app.render(req, res, '/b')
  // })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`)
  })
})
