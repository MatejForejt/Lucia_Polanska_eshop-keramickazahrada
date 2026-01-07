import { defineMiddlewares, validateAndTransformBody, authenticate } from "@medusajs/framework/http"
import { PostCustomPriceSchema } from "./store/variants/[id]/price/route"
import { PostStoreReviewSchema } from "./store/reviews/route"
import {
  PostAddCustomLineItemSchema,
} from "./store/carts/[id]/line-items-custom/route"

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
    // Wishlist authentication
    {
      matcher: "/store/customers/me/wishlists",
      methods: ["GET", "POST"],
      middlewares: [
        authenticate("customer", ["bearer", "session"]),
      ],
    },
    {
      matcher: "/store/customers/me/wishlists/items",
      methods: ["GET", "POST"],
      middlewares: [
        authenticate("customer", ["bearer", "session"]),
      ],
    },
    {
      matcher: "/store/customers/me/wishlists/items/:id",
      methods: ["DELETE"],
      middlewares: [
        authenticate("customer", ["bearer", "session"]),
      ],
    },
    // Customer reviews authentication
    {
      matcher: "/store/customers/me/reviews",
      methods: ["GET"],
      middlewares: [
        authenticate("customer", ["bearer", "session"]),
      ],
    },
  ],
})