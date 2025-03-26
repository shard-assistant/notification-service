import { Body, Heading, Link, Tailwind, Text } from "@react-email/components"
import { Html } from "@react-email/html"
import * as React from "react"

import { z } from "zod"
import { сonfirmationTemplateSchema } from "./schemas/confirmation.schema"

type ConfirmationTemplateProps = z.infer<typeof сonfirmationTemplateSchema>
 
export function ConfirmationTemplate(props: ConfirmationTemplateProps) {
	const { confirmLink } = сonfirmationTemplateSchema.parse(props);
	return ( 
		<Tailwind>
			<Html>
			<Body className="text-black">
				<Heading>Подтверждение электронной почты</Heading>
				<Text>
					Для подтверждения электронной почты, пожалуйста, перейдите по
					следующей ссылке:
				</Text>
				<Link href={confirmLink}>Подтвердить почту</Link>
				<Text>
					Эта ссылка действительна в течение 1 часа. Если вы не запрашивали
					подтверждение, пожалуйста, проигнорируйте это письмо.
				</Text>
				<Text>Спасибо за использование нашего сервиса!</Text>
			</Body>
		</Html>
		</Tailwind>
  )
}