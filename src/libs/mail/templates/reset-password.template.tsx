import { Body, Heading, Link, Tailwind, Text } from "@react-email/components"
import { Html } from "@react-email/html"
import * as React from "react"
import { z } from "zod"
import { resetPasswordTemplateSchema } from "./schemas/reset-password.schema"

type ResetPasswordTemplateProps = z.infer<typeof resetPasswordTemplateSchema>

export function ResetPasswordTemplate(props: ResetPasswordTemplateProps) {
	const { resetLink } = resetPasswordTemplateSchema.parse(props)
  return (
    <Tailwind>
      <Html>
			<Body className="text-black">
				<Heading>Сброс пароля</Heading>
				<Text>
					Вы запросили сброс пароля. Пожалуйста, перейдите по
					ссылке, чтобы задать новый пароль.
				</Text>
        <Link href={resetLink}>Сменить пароль</Link>
				<Text>
					Эта ссылка действительна в течение 1 часа. Если вы не запрашивали
					сброс пароля, просто проигнорируйте это письмо.
				</Text>
				<Text>Спасибо за использование нашего сервиса!</Text>
			</Body>
		</Html>
    </Tailwind>
  )
}