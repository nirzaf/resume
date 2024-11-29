import { FC, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Contact {
  email: string;
  mobile: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

interface HeaderProps {
  name: string;
  title: string;
  contact: Contact;
  profileImage: string;
}

const Header: FC<HeaderProps> = ({ name, title, contact, profileImage }) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const card = elementRef.current?.getBoundingClientRect();
      if (card) {
        const x = e.clientX - card.left;
        const y = e.clientY - card.top;
        setMousePosition({ x, y });
        
        const centerX = card.width / 2;
        const centerY = card.height / 2;
        const rotateX = (y - centerY) / 200;
        const rotateY = -(x - centerX) / 200;
        setCardPosition({ x: rotateY, y: rotateX });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [elementRef]);

  const handleContactClick = (url: string, type: string) => {
    if (type === 'email') {
      window.location.href = `mailto:${url}`;
    } else if (type === 'mobile') {
      window.location.href = `tel:${url}`;
    } else if (type === 'location') {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(url)}`, '_blank');
    } else {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <header 
        ref={elementRef} 
        className="relative group"
        style={{
          transform: `perspective(2000px) rotateX(${cardPosition.y}deg) rotateY(${cardPosition.x}deg)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
        
        <div className="relative h-full bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg backdrop-blur-sm backdrop-filter">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white/30 to-purple-50/30 dark:from-gray-900/30 dark:via-gray-800/30 dark:to-gray-900/30 rounded-xl"></div>
          
          <div className={`relative transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-600/40 rounded-full blur-md"></div>
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-md transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-blue-500/30 dark:ring-purple-400/30 ring-offset-2 ring-offset-white dark:ring-offset-gray-900"></div>
              </div>
            </div>

            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4 tracking-tight">
                {name}
              </h1>
              <div className="relative inline-block">
                <div className="relative px-8 py-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-blue-400/10 rounded-lg"></div>
                  <div className="absolute inset-0 bg-white/30 dark:bg-gray-800/30 rounded-lg backdrop-blur-sm"></div>
                  <h2 className="relative text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-medium">
                    {title}
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="space-y-3">
                <ContactItem
                  icon="fa-envelope"
                  text={contact.email}
                  onClick={() => handleContactClick(contact.email, 'email')}
                  gradientFrom="from-blue-400"
                  gradientTo="to-blue-600"
                />
                <ContactItem
                  icon="fa-mobile-alt"
                  text={contact.mobile}
                  onClick={() => handleContactClick(contact.mobile, 'mobile')}
                  gradientFrom="from-blue-500"
                  gradientTo="to-blue-700"
                />
                <ContactItem
                  icon="fa-map-marker-alt"
                  text={contact.location}
                  onClick={() => handleContactClick(contact.location, 'location')}
                  gradientFrom="from-blue-600"
                  gradientTo="to-blue-800"
                />
              </div>

              <div className="space-y-3">
                <ContactItem
                  icon="fa-linkedin"
                  text="LinkedIn"
                  onClick={() => handleContactClick(contact.linkedin, 'link')}
                  gradientFrom="from-purple-400"
                  gradientTo="to-purple-600"
                />
                <ContactItem
                  icon="fa-github"
                  text="GitHub"
                  onClick={() => handleContactClick(contact.github, 'link')}
                  gradientFrom="from-purple-500"
                  gradientTo="to-purple-700"
                />
                <ContactItem
                  icon="fa-globe"
                  text="Portfolio"
                  onClick={() => handleContactClick(contact.portfolio, 'link')}
                  gradientFrom="from-purple-600"
                  gradientTo="to-purple-800"
                />
              </div>
            </div>
          </div>
        </div>

        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 197, 253, 0.1) 0%, transparent 60%)`
          }}
        ></div>
      </header>
    </div>
  );
};

interface ContactItemProps {
  icon: string;
  text: string;
  onClick: () => void;
  gradientFrom: string;
  gradientTo: string;
}

const ContactItem: FC<ContactItemProps> = ({ icon, text, onClick, gradientFrom, gradientTo }) => (
  <button
    onClick={onClick}
    className="w-full group flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/30 dark:hover:bg-gray-800/30 backdrop-blur-sm hover:scale-[1.01]"
  >
    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center shadow-md transform transition-transform group-hover:scale-[1.02]`}>
      <i className={`fas ${icon} text-white text-lg`}></i>
    </div>
    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
      {text}
    </span>
  </button>
);

export default Header;
