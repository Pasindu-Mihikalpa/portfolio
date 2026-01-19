import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, CheckCircle, X, Loader2 } from 'lucide-react';

export default function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Using your REAL credentials
    emailjs.sendForm(
      'service_u5yittr',   // Service ID
      'template_cx8pqby',  // Template ID
      form.current, 
      'cPAF1Ql3zsSJWY7ik'  // Public Key
    )
      .then((result) => {
          console.log(result.text);
          setIsLoading(false);
          setShowSuccessModal(true); // Show success popup
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setIsLoading(false);
          alert("Failed to send message. Please check your internet connection.");
      });
  };

  return (
    <div className="container px-6 mx-auto">
      
      {/* --- SECTION HEADER --- */}
      <div className="mb-16 text-center">
        <h2 className="relative z-10 inline-block text-4xl font-bold text-white md:text-5xl">
          GET IN <span className="text-cyan-400">TOUCH</span>
          <span className="block w-full h-1 mt-2 rounded-full bg-cyan-400"></span>
        </h2>
        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-[#1f2937] opacity-30 select-none z-0">
          CONTACT
        </span>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        
        {/* LEFT COLUMN: Contact Info */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white">Let's Talk About Your Project</h3>
          <p className="text-gray-400">
            I am currently seeking internship opportunities. Feel free to reach out!
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4 group">  
              <div className="p-4 transition-colors rounded-full bg-gray-800/50 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                <p className="text-lg font-bold text-white">+94 74 091 5987</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 group">
              <div className="p-4 transition-colors rounded-full bg-gray-800/50 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400">Email</h4>
                <p className="text-lg font-bold text-white">pasindumihikalpa@outlook.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 group">
              <div className="p-4 transition-colors rounded-full bg-gray-800/50 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400">Location</h4>
                <p className="text-lg font-bold text-white">Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Name Input */}
            <input 
              type="text" 
              name="from_name" 
              placeholder="Your Name" 
              required
              className="w-full p-4 text-white transition-colors border border-gray-800 bg-gray-900/50 rounded-xl focus:border-cyan-400 focus:outline-none"
            />
            
            {/* Email Input */}
            <input 
              type="email" 
              name="from_email" 
              placeholder="Your Email" 
              required
              className="w-full p-4 text-white transition-colors border border-gray-800 bg-gray-900/50 rounded-xl focus:border-cyan-400 focus:outline-none"
            />
          </div>
          
          {/* Subject Input */}
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            required
            className="w-full p-4 text-white transition-colors border border-gray-800 bg-gray-900/50 rounded-xl focus:border-cyan-400 focus:outline-none"
          />
          
          {/* Message Input */}
          <textarea 
            name="message" 
            rows="6" 
            placeholder="Message" 
            required
            className="w-full p-4 text-white transition-colors border border-gray-800 resize-none bg-gray-900/50 rounded-xl focus:border-cyan-400 focus:outline-none"
          ></textarea>

          {/* LOADING BUTTON */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="flex items-center gap-2 px-8 py-4 font-bold text-black transition-transform rounded-full bg-cyan-400 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                Sending...
                <Loader2 size={18} className="animate-spin" /> {/* Spinning Icon */}
              </>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>
        </form>

      </div>

      {/* --- SUCCESS MODAL POPUP --- */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
          <div className="relative w-full max-w-md p-8 text-center bg-[#1f2937] border border-gray-700 rounded-2xl shadow-2xl transform transition-all scale-100">
            
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="absolute p-2 text-gray-400 transition-colors top-4 right-4 hover:text-white"
            >
              <X size={24} />
            </button>

            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-green-500/20">
                <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
              </div>
            </div>

            <h3 className="mb-2 text-2xl font-bold text-white">Message Sent!</h3>
            <p className="mb-8 text-gray-400">
              Thank you for reaching out. I will get back to you as soon as possible.
            </p>

            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 font-bold text-white transition-colors bg-green-600 rounded-xl hover:bg-green-700"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}