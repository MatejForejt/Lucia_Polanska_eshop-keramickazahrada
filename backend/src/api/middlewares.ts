import { defineMiddlewares, validateAndTransformBody, authenticate, MedusaNextFunction, MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { PostCustomPriceSchema } from "./store/variants/[id]/price/route"
import { PostStoreReviewSchema } from "./store/reviews/route"
import {
  PostAddCustomLineItemSchema,
} from "./store/carts/[id]/line-items-custom/route"

// Debug middleware to log incoming requests
const debugAuthMiddleware = () => {
  return async (req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) => {
    console.log("[Middleware Debug] Path:", req.path)
    console.log("[Middleware Debug] Method:", req.method)
    console.log("[Middleware Debug] Authorization header:", req.headers.authorization?.substring(0, 50) + "...")
    console.log("[Middleware Debug] x-publishable-api-key:", req.headers["x-publishable-api-key"])
    console.log("[Middleware Debug] auth_context before:", (req as any).auth_context)

    next()
  }
}

// Debug middleware to log after authenticate
const debugAfterAuthMiddleware = () => {
  return async (req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) => {
    console.log("[Middleware Debug After Auth] auth_context:", (req as any).auth_context)
    console.log("[Middleware Debug After Auth] actor_id:", (req as any).auth_context?.actor_id)
    next()
  }
}

export default defineMiddlewares({
  routes: [
    {
      matcher: "/store/variants/:id/price",
      methods: ["POST"],
      middlewares: [
        validateAndTransformBody(PostCustomPriceSchema),
      ],
    },
    {
      matcher: "/store/reviews",
      methods: ["POST"],
      middlewares: [
        authenticate("customer", ["bearer", "session"]),
        validateAndTransformBody(PostStoreReviewSchema),
      ],
    },
    {
      matcher: "/store/carts/:id/line-items-custom",
      methods: ["POST"],
      middlewares: [
        validateAndTransformBody(PostAddCustomLineItemSchema),
      ],
    },
    // Wishlist authentication with debug
    {
      matcher: "/store/customers/me/wishlists",
      methods: ["GET", "POST"],
      middlewares: [
        debugAuthMiddleware(),
        authenticate("customer", ["bearer", "session"]),
        debugAfterAuthMiddleware(),
      ],
    },
    {
      matcher: "/store/customers/me/wishlists/items",
      methods: ["GET", "POST"],
      middlewares: [
        debugAuthMiddleware(),
        authenticate("customer", ["bearer", "session"]),
        debugAfterAuthMiddleware(),
      ],
    },
    {
      matcher: "/store/customers/me/wishlists/items/:id",
      methods: ["DELETE"],
      middlewares: [
        debugAuthMiddleware(),
        authenticate("customer", ["bearer", "session"]),
        debugAfterAuthMiddleware(),
      ],
    },
    // Customer reviews authentication
    {
      matcher: "/store/customers/me/reviews",
      methods: ["GET"],
      middlewares: [
        debugAuthMiddleware(),
        authenticate("customer", ["bearer", "session"]),
        debugAfterAuthMiddleware(),
      ],
    },
  ],
})