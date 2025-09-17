import { useState, useEffect } from 'react'
import type { ContactFormData } from '../types/contact'

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    title: '',
    email: '',
    message: '',
    honeypot: '', // Bots will fill this, humans won't see it
    submittedAt: 0
  })

  const [startTime, setStartTime] = useState(Date.now())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitCount, setSubmitCount] = useState(0)

  useEffect(() => {
    // Reset submission count after 1 hour
    const resetTimer = setTimeout(() => setSubmitCount(0), 3600000)
    return () => clearTimeout(resetTimer)
  }, [submitCount])

  const validateEmail = (email: string) => {
    // Enhanced email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    
    // Check for common spam domains (expand this list as needed)
    const spamDomains = ['temp-mail.org', 'tempmail.com']
    const domain = email.split('@')[1]
    
    return emailRegex.test(email) && !spamDomains.includes(domain)
  }

  const validateName = (name: string) => {
    // Check for suspicious patterns
    const suspicious = /[<>{}]/
    return name.length > 1 && !suspicious.test(name)
  }

  const validateTitle = (title: string) => {
    // Check for suspicious patterns and common spam keywords
    const spamKeywords = ['admin', 'root', 'seo', 'casino', 'viagra']
    return !spamKeywords.some(keyword => 
      title.toLowerCase().includes(keyword)
    )
  }

  const validateMessage = (message: string) => {
    // Check for suspicious patterns and common spam characteristics
    const suspicious = /[<>{}]|http|www\./i
    return message.length > 10 && !suspicious.test(message)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Anti-spam checks
    try {
      // 1. Check submission rate
      if (submitCount >= 3) {
        throw new Error('Too many submissions. Please try again later.')
      }

      // 2. Check honeypot
      if (formData.honeypot) {
        throw new Error('Invalid submission.')
      }

      // 3. Check submission speed (too fast = probably a bot)
      const timeTaken = Date.now() - startTime
      if (timeTaken < 5000) { // Less than 5 seconds
        throw new Error('Please review your information before submitting.')
      }

      // 4. Validate all fields
      if (!validateName(formData.name)) {
        throw new Error('Please enter a valid name.')
      }

      if (!validateEmail(formData.email)) {
        throw new Error('Please enter a valid email address.')
      }

      if (!validateTitle(formData.title)) {
        throw new Error('Please enter a valid professional title.')
      }

      if (!validateMessage(formData.message)) {
        throw new Error('Please enter a valid message.')
      }

      // If all validations pass, proceed with submission
      setSubmitCount(prev => prev + 1)
      console.log('Form submitted:', formData)
      setFormData({
        name: '',
        title: '',
        email: '',
        message: '',
        honeypot: '',
        submittedAt: Date.now()
      })
      setStartTime(Date.now())
      setSubmitMessage('Thank you for your message. I will get back to you soon!')

    } catch (error) {
      if (error instanceof Error) {
        setSubmitMessage(error.message)
      } else {
        setSubmitMessage('Something went wrong. Please try again later.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Links */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <a 
              href="https://www.linkedin.com/in/musa-msomi-swe/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 opacity-50 pointer-events-none">
              {/* Honeypot field - hidden from real users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
                style={{ display: 'none' }}
                tabIndex={-1}
                aria-hidden="true"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Professional Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  required
                />
              </div>

              {submitMessage && (
                <div className={`text-sm ${submitMessage.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white 
                  bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-blue-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact