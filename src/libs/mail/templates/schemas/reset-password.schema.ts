import { z } from "zod"

export const resetPasswordTemplateSchema = z.object({
	resetLink: z.string().url()
})
