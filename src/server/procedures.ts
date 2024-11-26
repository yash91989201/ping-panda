import { j } from "./__internals/j"

const authMiddleware = j.middleware(({ next }) => {
  return next({})
})

export const baseProcedure = j.procedure
export const publicProcedure = baseProcedure
export const privateProcedure = publicProcedure.use(authMiddleware)
