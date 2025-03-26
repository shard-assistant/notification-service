import { z } from "zod"

export const сonfirmationTemplateSchema = z.object({
	confirmLink: z.string().url()
})
