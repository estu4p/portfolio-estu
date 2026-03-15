import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const sendContactEmail = async (form: HTMLFormElement) => {
  return emailjs.sendForm(serviceId, templateId, form, publicKey)
}

export default sendContactEmail
