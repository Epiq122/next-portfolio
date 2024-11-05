'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    message: '',
    email: '',
  });
  const text = 'Say Hello';

  const form = useRef();

  // Sanitize input to prevent XSS
  const sanitizeInput = (input) => {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
      .replace(/\\/g, '&#x5C;')
      .replace(/{/g, '&#x7B;')
      .replace(/}/g, '&#x7D;')
      .replace(/\(/g, '&#x28;')
      .replace(/\)/g, '&#x29;');
  };

  const validateForm = (formData) => {
    const errors = {
      message: '',
      email: '',
    };
    let isValid = true;

    // Get and sanitize form data
    const message = formData.get('user_message');
    const email = formData.get('user_email');

    // Check for suspicious patterns
    const suspiciousPatterns = [
      /<script>/i,
      /javascript:/i,
      /on\w+=/i,
      /data:/i,
      /vbscript:/i,
      /expression\(/i,
      /url\(/i,
    ];

    // Validate message
    if (!message || message.trim() === '') {
      errors.message = 'Message cannot be empty';
      isValid = false;
    } else if (suspiciousPatterns.some((pattern) => pattern.test(message))) {
      errors.message = 'Invalid characters detected';
      isValid = false;
    }

    // Validate email
    if (!email || email.trim() === '') {
      errors.email = 'Email cannot be empty';
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      errors.email = 'Please enter a valid email';
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setValidationErrors({ message: '', email: '' });

    const formData = new FormData(form.current);

    if (!validateForm(formData)) {
      return;
    }

    // Sanitize form data before sending
    const sanitizedMessage = sanitizeInput(formData.get('user_message'));
    const sanitizedEmail = sanitizeInput(formData.get('user_email'));

    // Update form values with sanitized content
    form.current.user_message.value = sanitizedMessage;
    form.current.user_email.value = sanitizedEmail;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setValidationErrors({ message: '', email: '' });
        },
        () => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center'>
          <div className='text-6xl mb-8'>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>

          {/* Gmail Link */}
          <a
            href='mailto:robgleasonjobs122@gmail.com'
            className='flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-4'
          >
            <Mail className='w-5 h-5' />
            <span className='font-medium'>Email Me Directly</span>
          </a>
        </div>

        <form
          onSubmit={sendEmail}
          ref={form}
          className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'
        >
          <span>Dear Robert Gleason</span>
          <div className='flex flex-col'>
            <textarea
              rows={6}
              className={`bg-transparent border-b-2 border-b-black outline-none resize-none ${
                validationErrors.message ? 'border-red-500' : ''
              }`}
              name='user_message'
              maxLength={1000}
            />
            {validationErrors.message && (
              <span className='text-red-500 text-sm mt-1'>
                {validationErrors.message}
              </span>
            )}
          </div>

          <span>My email address is:</span>
          <div className='flex flex-col'>
            <input
              name='user_email'
              type='email'
              className={`bg-transparent border-b-2 border-b-black outline-none ${
                validationErrors.email ? 'border-red-500' : ''
              }`}
              maxLength={100}
            />
            {validationErrors.email && (
              <span className='text-red-500 text-sm mt-1'>
                {validationErrors.email}
              </span>
            )}
          </div>

          <span>Regards</span>
          <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-purple-300 transition-colors duration-300'>
            Send
          </button>

          {success && (
            <span className='text-green-600 font-semibold'>
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className='text-red-600 font-semibold'>
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
