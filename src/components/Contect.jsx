import React from 'react'
import { Mail, Linkedin, Instagram } from 'lucide-react'

const Contact = () => {
  const contacts = [
    {
      id: 1,
      icon: Mail,
      label: 'Email',
      value: 'kunno1751@gmail.com',
      link: 'mailto:kunno1751@gmail.com',
      bgColor: 'bg-gradient-to-br from-red-400 to-pink-600',
      hoverColor: 'hover:from-red-500 hover:to-pink-700'
    },
    {
      id: 2,
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: 'https:linkedin.com/in/kunal-patel-b1bb0431a',
      bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700'
    },
    {
      id: 3,
      icon: Instagram,
      label: 'Instagram',
      value: '',
      link: 'https://www.instagram.com/codewithkunal09?igsh=MW14cXRxOGJ4d2F1aQ==',
      bgColor: 'bg-gradient-to-br from-purple-400 to-pink-500',
      hoverColor: 'hover:from-purple-500 hover:to-pink-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br bg-black bg-black to-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            If you're interested in collaboration, let's work together!
          </p>
          <p className="text-gray-400">
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact) => {
            const IconComponent = contact.icon
            return (
              <a
                key={contact.id}
                href={contact.link}
                target={contact.label !== 'Email' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group"
              >
                <div className={`${contact.bgColor} ${contact.hoverColor} rounded-xl p-8 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}>
                  <div className="flex flex-col items-center text-white">
                    <IconComponent size={48} className="mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-2">
                      {contact.label}
                    </h3>
                    <p className="text-sm text-center break-words max-w-xs">
                      {contact.value}
                    </p>
                    <div className="mt-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to connect →
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Looking to collaborate on exciting projects?
          </p>
          <p className="text-gray-300 font-semibold mt-2">
            I'm always open to new opportunities and discussions!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact