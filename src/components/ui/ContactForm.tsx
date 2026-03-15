import { useRef, useState, type FormEvent } from 'react'
import sendContactEmail from '../../services/emailService'
import SendButton from './SendButton'

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    const formData = new FormData(formRef.current)

    if (formData.get('website')) return

    try {
      setLoading(true)

      await sendContactEmail(formRef.current)

      alert('Message sent successfully!')

      formRef.current.reset()
    } catch (error) {
      alert('Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full space-y-8 md:w-114"
    >
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-base text-white">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="border-b-secondary border-b py-2 text-white placeholder:text-white/80 focus:ring-0 focus:outline-none"
          placeholder="Enter your Name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-base text-white">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="border-b-secondary border-b py-2 text-white placeholder:text-white/80 focus:ring-0 focus:outline-none"
          placeholder="Enter your Email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-base text-white">
          Project Description
        </label>
        <textarea
          id="description"
          name="message"
          rows={4}
          required
          className="border-b-secondary border-b py-2 text-white placeholder:text-white/80 focus:ring-0 focus:outline-none"
          placeholder="Enter your Project Description"
        />
      </div>
      {/* <button className="bg-background hover:bg-background/70 w-full rounded-full py-2 transition-colors duration-300">
        <span className="text-accent">Send Now!</span>
      </button> */}
      <SendButton loading={loading} />
    </form>
  )
}

export default ContactForm
