
export type Page = 'home' | 'layanan' | 'testimoni' | 'about';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Layanan', page: 'layanan' },
  { label: 'Testimoni', page: 'testimoni' },
  { label: 'About Us', page: 'about' },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <header className="bg-white px-5 py-3 sticky top-0 z-40 shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center gap-8">
        <button
          onClick={() => onNavigate('home')}
          className="font-['Montserrat',sans-serif] font-bold text-[#4a90e2] text-2xl shrink-0 hover:opacity-80 transition-opacity leading-[38px]"
        >
          MasTulung
        </button>
        <nav className="flex items-center gap-5 flex-1">
          {navLinks.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`font-['Montserrat',sans-serif] font-bold text-sm tracking-[0.2px] whitespace-nowrap transition-colors cursor-pointer ${
                currentPage === page
                  ? 'text-[#4a90e2]'
                  : 'text-[#737373] hover:text-[#2e72c4]'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
