/* task:Завершите функцию `showEmailConfirmation`, чтобы она возвращала строку: 
`"We just sent an email to X. Please check your inbox."`. Вместо `X` вставьте электронный адрес */

function showEmailConfirmation(email) {
	return `We just sent an email to ${email}. Please check your inbox.`;
}

showEmailConfirmation("sam@example.com");
showEmailConfirmation("alex@example.com");