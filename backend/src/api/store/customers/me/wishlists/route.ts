import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { createWishlistWorkflow } from "../../../../../workflows/create-wishlist";
import { MedusaError } from "@medusajs/framework/utils";

export async function POST(
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) {
  // Debug logging
  console.log("[Wishlist POST] auth_context:", req.auth_context)
  console.log("[Wishlist POST] actor_id:", req.auth_context?.actor_id)
  console.log("[Wishlist POST] publishable_key_context:", req.publishable_key_context)
  console.log("[Wishlist POST] sales_channel_ids:", req.publishable_key_context?.sales_channel_ids)

  if (!req.auth_context?.actor_id) {
    console.log("[Wishlist POST] No actor_id, returning 401")
    return res.status(401).json({ message: "Unauthorized" })
  }

  if (!req.publishable_key_context?.sales_channel_ids.length) {
    console.log("[Wishlist POST] No sales_channel_ids")
    throw new MedusaError(
      MedusaError.Types.INVALID_DATA,
      "At least one sales channel ID is required to be associated with the publishable API key in the request header."
    )
  }
  const { result } = await createWishlistWorkflow(req.scope)
    .run({
      input: {
        customer_id: req.auth_context.actor_id,
        sales_channel_id: req.publishable_key_context?.sales_channel_ids[0]
      }
    })

  console.log("[Wishlist POST] Success, created wishlist")
  res.json({
    wishlist: result.wishlist
  })
}

export async function GET(
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) {
  // Debug logging
  console.log("[Wishlist GET] auth_context:", req.auth_context)
  console.log("[Wishlist GET] actor_id:", req.auth_context?.actor_id)
  console.log("[Wishlist GET] Authorization header:", req.headers.authorization?.substring(0, 30) + "...")

  if (!req.auth_context?.actor_id) {
    console.log("[Wishlist GET] No actor_id, returning 401")
    return res.status(401).json({ message: "Unauthorized" })
  }

  const query = req.scope.resolve("query")

  const { data } = await query.graph({
    entity: "wishlist",
    fields: ["*", "items.*", "items.product_variant.*"],
    filters: {
      customer_id: req.auth_context.actor_id
    }
  })

  if (!data.length) {
    console.log("[Wishlist GET] No wishlist found for customer:", req.auth_context.actor_id)
    throw new MedusaError(
      MedusaError.Types.NOT_FOUND,
      "No wishlist found for customer"
    )
  }

  console.log("[Wishlist GET] Success, found wishlist with", data[0]?.items?.length || 0, "items")
  return res.json({
    wishlist: data[0]
  })
}