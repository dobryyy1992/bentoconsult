const messages = {
  "en": {
    "sending": "Sending...",
    "success": "Message sent successfully!",
    "error": "Something went wrong. Please try again or email us directly."
  },
  "bg": {
    "sending": "Изпращане...",
    "success": "Съобщението е изпратено успешно!",
    "error": "Нещо се обърка. Моля, опитайте отново или ни пишете директно."
  },
  "ru": {
    "sending": "Отправка...",
    "success": "Сообщение успешно отправлено!",
    "error": "Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую."
  }
} as const;

type Lang = keyof typeof messages;
const htmlLang = document.documentElement.lang;
const t = messages[(htmlLang in messages ? htmlLang : 'en') as Lang];

const form = document.getElementById('contact-form') as HTMLFormElement | null;
const status = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn?.setAttribute('disabled', 'true');
  if (status) {
    status.classList.remove('hidden', 'text-red-400', 'text-green-400');
    status.textContent = t.sending;
    status.classList.add('text-gray-400');
  }
  try {
    const res = await fetch(atob('aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vZi9tcWVnZHl6bA=='), {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error();
    if (status) {
      status.textContent = t.success;
      status.classList.remove('text-gray-400');
      status.classList.add('text-green-400');
    }
    form.reset();
  } catch {
    if (status) {
      status.textContent = t.error;
      status.classList.remove('text-gray-400');
      status.classList.add('text-red-400');
    }
  }
  submitBtn?.removeAttribute('disabled');
});
