import { Body, Heading, Tailwind, Text } from "@react-email/components"
import { Html } from "@react-email/html"
import * as React from "react"

interface TwoFactorAuthTemplateProps {
	code: string
}

export function TwoFactorAuthTemplate({
	code
}: TwoFactorAuthTemplateProps) {
  return (
    <Tailwind>
      <Html>
			<Body className="text-black">
				<Heading>Двухфакторная аутентификация</Heading>
				<Text>
					Ваш код двухвакторной аутентификации: <strong>{code}</strong>
				</Text>
				<Text>
					Введите этот код в приложении для завершения
					процесса аутентификации.
				</Text>
				<Text>Если вы не запрашивали этот код, просто проигнорируйте это письмо.</Text>
			</Body>
		</Html>
    </Tailwind>
  )
}