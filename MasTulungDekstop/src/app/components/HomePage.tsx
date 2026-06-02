import imgBg from '../../imports/Homepage/77d27a3b43e7b6fe5cbace67979037a153c07eae.png';
import { Page } from './Navbar';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-[#f8f9fa]">
      <div className="max-w-[1440px] mx-auto px-5 pt-5 pb-12">
        {/* Hero Banner */}
        <div className="relative bg-[#c2d9f5] overflow-hidden" style={{ minHeight: '500px' }}>
          {/* Decorative background image */}
          <div
            className="absolute pointer-events-none select-none"
            style={{
              right: '-8%',
              top: '-18%',
              width: '72%',
              transform: 'rotate(-14.93deg)',
              transformOrigin: 'center top',
            }}
          >
            <img
              src={imgBg}
              alt=""
              className="w-full h-auto object-cover"
              style={{ opacity: 0.85 }}
            />
          </div>

          {/* Hero content */}
          <div className="relative z-10 px-10 xl:px-14 py-16 xl:py-20 max-w-[900px]">
            <h1
              className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-black leading-tight"
              style={{ fontSize: 'clamp(36px, 5.5vw, 82px)' }}
            >
              Butuh Bantuan?{' '}
              <span className="text-[#4a90e2]">MasTulung</span>{' '}
              Siap!
            </h1>
            <p
              className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-black mt-8"
              style={{ fontSize: 'clamp(15px, 1.7vw, 24px)' }}
            >
              Antar Jemput? Pindahan Kos? Titip Barang? Beliin ini itu?
            </p>
            <button
              onClick={() => onNavigate('layanan')}
              className="mt-10 bg-[#4a90e2] border border-[#4a90e2] text-[#ebf3fc] font-['Montserrat',sans-serif] font-bold rounded-[5px] hover:bg-[#2e72c4] hover:border-[#2e72c4] transition-colors"
              style={{ fontSize: 'clamp(16px, 1.5vw, 24px)', padding: 'clamp(12px, 1vw, 15px) clamp(24px, 2.8vw, 40px)' }}
            >
              Klik Disini!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
