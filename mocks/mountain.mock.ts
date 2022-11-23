// src/mocks/handlers.js
import { rest } from 'msw'

export default [
  rest.get('https://api.nuxtjs.dev/mountains', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),

      ctx.json([
        {
          name: 'hugeDogOne'
        },
        {
          name: 'hugeDogTwo'
        }
      ])
    )
  })
]
