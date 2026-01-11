
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const officeLocation = {
    address: "Tsedey Bank Head Office, Ras Mekonen Ave",
    city: "Leghar, Addis Ababa, Ethiopia",
    hours: "Monday to Saturday, 8:00 AM - 5:00 PM",
    mapUrl: "https://www.google.com/maps/place/Tsedey+Bank+Head+Office/@9.0311,38.7630,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!8m2!3d9.0311!4d38.7630!16s%2Fg%2F11s5l5l5l5",
    coordinates: {
      lat: 9.0311,
      lng: 38.7630
    }
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
           <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-10 h-[2px] bg-red-500"></span>
            <span className="text-[10px] font-black text-red-600 tracking-[0.4em] uppercase">Contact Us </span>

          </div>

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
            className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100 transform hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10 z-10 rounded-2xl pointer-events-none"></div>
            
            <iframe
              src={`https://maps.google.com/maps?q=${officeLocation.coordinates.lat},${officeLocation.coordinates.lng}&z=17&output=embed&z=17&t=m&hl=en&ie=UTF8&iwloc=B`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'saturate(1.2) contrast(1.1)' }}
              allowFullScreen
              loading="eager"
              className="absolute inset-0 w-full h-full"
              title="Tsedey Bank Head Office Location"
              aria-label="Interactive map showing Tsedey Bank Head Office location"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Custom Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <MapPin size={24} className="text-red-600" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl flex items-center space-x-2 border border-gray-100">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-gray-800">Tsedey Bank HQ</span>
              </div>
            </div>

            {/* Overlay Button */}
            <a
              href={officeLocation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-8 right-8 z-20 bg-black text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-red-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-red-500/30"
              aria-label="Open in Google Maps"
            >
              <span>Open in Maps</span>
              <ArrowRight size={16} />
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
