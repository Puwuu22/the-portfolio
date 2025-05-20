import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  
  // Social links
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Puwuu22', ariaLabel: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/quynh-ttp/', ariaLabel: 'LinkedIn' },
    { icon: <FaInstagram />, url: '#', ariaLabel: 'Instagram' },
    { icon: <FaEnvelope />, url: 'mailto:trinhquynh5d@gmail.com', ariaLabel: 'Email' }
  ];

  // Contact info
  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt />, 
      title: 'Location', 
      value: 'Thu Duc, Ho Chi Minh City, Vietnam', 
      link: null 
    },
    { 
      icon: <FaEnvelope />, 
      title: 'Email', 
      value: 'trinhquynh5d@gmail.com', 
      link: 'mailto:trinhquynh5d@gmail.com' 
    },
    { 
      icon: <FaPhoneAlt />, 
      title: 'Phone', 
      value: '+8868684090', 
      link: 'tel:+84868684090' 
    }
  ];

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 relative inline-block">
              Trịnh Thị Phương Quỳnh
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#48017a] to-[#ae7edc]"></span>
            </h3>
            <p className="text-white/60 mb-6">
              A passionate developer focused on creating beautiful and functional web experiences with modern technologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#48017a] flex items-center justify-center text-white/80 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
            {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 relative inline-block">
              Contact Information
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#48017a] to-[#ae7edc]"></span>
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-xl text-[#ae7edc] mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-white/70 hover:text-[#ae7edc] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/70">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800/50 text-center">
          <p className="text-white/50 text-sm">
            © 2025 Trịnh Thị Phương Quỳnh. All rights reserved.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}