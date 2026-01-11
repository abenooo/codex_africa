
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const officeLocation = {
    address: "Ras Mekonnen Ave, Leghar, 15th Floor",
    city: "Addis Ababa, Ethiopia",
    hours: "Monday to Saturday, 8:00 AM - 5:00 PM",
    phone: "+251 911 123456",
    mapUrl: "https://www.google.com/maps/place/Ras+Mekonnen+Ave,+Addis+Ababa,+Ethiopia/@9.031084,38.762972,17z/data=!3m1!4b1!4m6!3m5!1s0x162b8f9e3e1e1e1f:0x1b9b9b9b9b9b9b9b9!8m2!3d9.031084!4d38.762972!16s%2Fg%2F11b8f9f9f9?entry=ttu"
  };

  const teamMembers = [
    {
      name: "Abenezer Kifle",
      role: "Founder & Full Stack Developer",
      phone: "+251 910 979060"
    },
    {
      name: "Matyas Abera",
      role: "Co-Founder & Senior Business Analyst",
      phone: "+251 911 487246"
    }
  ];

  const contactMethods = [
    {
      title: "Book online",
      description: "Choose your date and book online now.",
      buttonText: "Book Now",
      href: "https://cal.com/abenezer-kifle-t8tqcf/platform-demo",
      target: "_blank"
    },
    {
      title: "Call us",
      description: (
        <div className="space-y-4">
          <p className="text-sm font-medium text-gray-700">Direct Contacts:</p>
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="space-y-1">
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="text-xs text-gray-600">{member.role}</p>
                <a
                  href={`tel:${member.phone.replace(/\s+/g, '')}`}
                  className="text-sm text-red-600 hover:underline flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {member.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      ),
      buttonText: "Call Main Office",
      href: "tel:+251911123456"
    },
    {
      title: "Visit us",
      description: officeLocation.hours,
      buttonText: "Get Directions",
      href: officeLocation.mapUrl,
      target: "_blank"
    }
  ];

  return (
    <section className="bg-[#FAFAFA] py-24 sm:py-32 relative overflow-hidden" id="contact">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-6"
          >
            <MapPin size={16} className="text-gray-500" />
            <span className="text-sm font-black uppercase tracking-widest text-gray-500">Contact Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6"
          >
            Visit Our <span className="font-black">Office</span> in <br className="hidden sm:block" />
            <span className="font-black">Addis Ababa</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            We'd love to hear from you. Get in touch with us today.
          </motion.p>
        </div>

        {/* Content Area - Map and Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.358174897084!2d38.760397!3d9.031084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b9b9b9b9b9b9b9b9!2sRas%20Mekonnen%20Ave!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              title="Office Location on Map"
            ></iframe>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white rounded-full shadow-lg flex items-center">
              <MapPin size={18} className="text-red-500 mr-2" fill="currentColor" />
              <span className="font-medium">We are here</span>
            </div>

            <a
              href={officeLocation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Open in Google Maps"
            >
              <ArrowRight size={20} className="text-gray-800" />
            </a>
          </motion.div>

          {/* Right Side: Contact Cards */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                  <a
                    href={method.href}
                    target={method.target || "_self"}
                    rel={method.target ? "noopener noreferrer" : ""}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium text-sm hover:bg-red-600 transition-colors"
                  >
                    {method.buttonText}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
