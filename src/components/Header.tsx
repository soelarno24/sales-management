import { useState, useEffect } from 'react';
import Icon from './Icon';

const AVATAR_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCMjI2Ro3edpxVjk09nx201uy5XgKz64hKHbQhJ3pB64h6yasU1azk-VkR1rAsyzlyFGqfPbbVVNlIREK_f8DgPlmoR130JyDVzOwkKyCa9Qs2ejE7IVsioorw8YoNHnQWxREQo9mgFR5k3yFvrChLljTPrYP2O4CK7D_7kN59odXXiMNzlc57B4PozVRIrI_4yFbfaBNYYPev7Uzni51yV2jmzbppwA-Tmc6F9JCGjaAt4bAGKgpRtyQg6FonxLqwsmKVoacTlW_y_';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 right-0 z-30 flex justify-between items-center w-full px-8 h-16 bg-surface-container-lowest transition-all duration-300 ${
        scrolled ? 'shadow-sm bg-white/90 backdrop-blur-md' : ''
      }`}
    >
      <div className="flex items-center gap-6 flex-1">
        <div className="relative w-full max-w-md group">
          <Icon
            name="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
          />
          <input
            className="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary transition-all font-body outline-none"
            placeholder="Search projects, sales or users..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 cursor-pointer">
          <Icon name="notifications" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 cursor-pointer">
          <Icon name="settings" />
        </button>
        <div className="h-8 w-[1px] bg-outline-variant opacity-20 mx-2"></div>
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-on-surface">Alexandria Admin</p>
            <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
              System Administrator
            </p>
          </div>
          <img
            className="w-9 h-9 rounded-full object-cover ring-2 ring-primary-fixed"
            alt="Admin avatar"
            src={AVATAR_URL}
          />
        </div>
      </div>
    </header>
  );
}
