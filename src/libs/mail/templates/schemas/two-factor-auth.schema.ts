import { z } from "zod"

export const twoFactorAuthTemplateSchema = z.object({
	code: z.string()
})
