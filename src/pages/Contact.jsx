import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_u5yittr', 'template_cx8pqby', form.current, 'cPAF1Ql3zsSJWY7ik')
      .then((result) => {
          alert("Message sent successfully!");
          setIsSending(false);
          e.target.reset();
      }, (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
          setIsSending(false);
      });
  };

  return (
    <div className="py-12 mb-12 animate-fade-in-up">
      <div className="container max-w-6xl px-6 mx-auto">
        
        {/* Page Header */}
        <div className="relative mb-16 text-center">
          <h1 className="relative z-10 inline-block text-4xl font-bold text-white uppercase md:text-5xl">
            Contact Me
            <span className="block w-full h-1 mt-2 rounded-full bg-cyan-400"></span>
          </h1>
          <span className="absolute z-0 text-6xl font-bold tracking-widest text-gray-800 -translate-x-1/2 -translate-y-1/2 select-none top-1/2 left-1/2 md:text-8xl opacity-20 whitespace-nowrap">
            GET IN TOUCH
          </span>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white">Let's Talk About Your Project</h2>
              <p className="leading-relaxed text-gray-400">
                I am currently seeking internship opportunities. Feel free to reach out!
              </p>
            </div>
            <div className="space-y-6">
              <ContactItem icon={<Phone size={20} />} title="Phone" value="+94 74 091 5987" />
              <ContactItem icon={<Mail size={20} />} title="Email" value="pmihikalpa2022@gmail.com" />
              <ContactItem icon={<MapPin size={20} />} title="Location" value="Sri Lanka" />
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="space-y-2">
              <input 
                type="text" 
                name="from_name"
                placeholder="Your Name" 
                className="w-full bg-[#101010] border border-[#1f2937] text-white p-4 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>
            
            <div className="space-y-2">
              <input 
                type="email" 
                name="from_email"
                placeholder="Your Email" 
                className="w-full bg-[#101010] border border-[#1f2937] text-white p-4 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                className="w-full bg-[#101010] border border-[#1f2937] text-white p-4 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <textarea 
                name="message"
                rows="5"
                placeholder="Message" 
                className="w-full bg-[#101010] border border-[#1f2937] text-white p-4 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSending}
              className="px-8 py-4 border-2 border-[#2f3b4b] text-white font-bold rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>Sending... <Loader2 size={18} className="animate-spin"/></>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

const ContactItem = ({ icon, title, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full h flex items-center justify-center text-cyan-400 border border-[#1f2937] shadow-sm">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-white">{title}</h4>
      <p className="text-sm text-gray-400">{value}</p>
    </div>
  </div>
);

ContactItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};