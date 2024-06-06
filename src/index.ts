import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config"
import { userRouter } from './users/user.router'

const app = new Hono()

//default route
app.get('/ok', (c) => {
  return c.text('The server is running  🥵🥵🥵')
})

//custom route

app.route("/api",userRouter)

console.log(`Server is running on port ${process.env.PORT}`);

// app.route("/", userRouter);// /users



serve({
  fetch: app.fetch,
  port:Number(process.env.PORT)
});
