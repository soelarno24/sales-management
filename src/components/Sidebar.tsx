import { useState } from 'react';
import Icon from './Icon';

interface NavItem {
  icon: string;
  label: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { icon: 'dashboard', label: 'Dashboard', active: true },
  { icon: 'business', label: 'Developer Management' },
  { icon: 'apartment', label: 'Projects' },
  { icon: 'inventory_2', label: 'Inventory' },
  { icon: 'group', label: 'User Management' },
  { icon: 'payments', label: 'Finance' },
  { icon: 'analytics', label: 'Reporting' },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <aside className="h-screen w-72 fixed left-0 top-0 z-40 bg-surface flex flex-col py-8 px-6 gap-y-6">
      {/* Logo */}
      <div className="flex items-center gap-4 px-2 mb-4">
        <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container">
          <Icon name="business_center" />
        </div>
        <div>
          <h1 className="font-headline text-xl text-on-surface leading-tight">Alexandria</h1>
          <p className="font-label uppercase tracking-widest text-[10px] font-semibold text-on-secondary-fixed-variant">
            Editorial Curator
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1 overflow-y-auto no-scrollbar">
        {navItems.map((item, index) => (
          <a
            key={item.label}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}
            className={`flex items-center gap-3 px-4 py-3 transition-all ${
              activeIndex === index
                ? 'text-on-primary-fixed-variant font-bold bg-primary-fixed rounded-lg scale-[0.98]'
                : 'text-on-secondary-fixed-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            <Icon name={item.icon} />
            <span className="font-label uppercase tracking-widest text-xs">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto flex flex-col gap-1 border-t border-outline-variant/10 pt-6">
        <button className="bg-linear-to-r from-primary to-primary-container text-on-primary py-3 px-4 rounded-xl font-semibold text-sm mb-4 shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity cursor-pointer">
          New Listing
        </button>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-on-secondary-fixed-variant hover:text-on-surface transition-all"
        >
          <Icon name="help" />
          <span className="font-label uppercase tracking-widest text-[10px] font-semibold">Support</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-on-secondary-fixed-variant hover:text-on-surface transition-all"
        >
          <Icon name="logout" />
          <span className="font-label uppercase tracking-widest text-[10px] font-semibold">Sign Out</span>
        </a>
      </div>
    </aside>
  );
}
