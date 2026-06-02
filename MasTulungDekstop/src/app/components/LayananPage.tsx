import imgBg from '../../imports/Layanan/29ff2a4e74d1b25e8457bc6cca0cce3bae84f391.png';
import { Star } from 'lucide-react';

interface LayananPageProps {
  onOrder: () => void;
}

const services = [
  { id: 1, name: 'Pindah Kos', desc: 'Tossa/Mobil' },
  { id: 2, name: 'Antar Makanan', desc: 'Deskripsi layanan antar makanan' },
  { id: 3, name: 'Antar Barang', desc: 'Deskripsi layanan antar barang' },
  { id: 4, name: 'Titip Laundry', desc: 'Min 5kg' },
  { id: 5, name: 'Titip Belanja', desc: 'Deskripsi layanan titip belanja' },
  { id: 6, name: 'Lainnya', desc: 'Jasa Intel dan lain lain' },
];

function ServiceCard({ name, desc, onOrder }: { name: string; desc: string; onOrder: () => void }) {
  return (
    <div className="bg-[#ebf3fc] rounded-[20px] overflow-hidden flex flex-col" style={{ border: '1px solid #4a90e2' }}>
      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span className="font-['Montserrat',sans-serif] font-bold text-sm text-black tracking-[0.1px]">
            Layanan <span className="text-[#4a90e2]">MasTulung</span>
          </span>
          <div className="bg-[#252b42] flex items-center gap-1 px-2 py-1 rounded-full shrink-0">
            <Star size={12} className="fill-[#FFCE31] text-[#FFCE31]" />
            <span className="font-['Montserrat',sans-serif] text-white text-xs leading-none">4.9</span>
          </div>
        </div>

        {/* Service Name */}
        <h3 className="font-['Montserrat',sans-serif] font-bold text-[#252b42] tracking-[0.1px]">
          {name}
        </h3>

        {/* Description */}
        <p className="font-['Montserrat',sans-serif] text-[#737373] text-sm leading-5 tracking-[0.2px]">
          {desc}
        </p>

        {/* Order Button */}
        <button
          onClick={onOrder}
          className="mt-1 border border-[#4a90e2] text-[#4a90e2] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-sm px-5 py-2 rounded-full self-start hover:bg-[#4a90e2] hover:text-white transition-colors"
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
}

export function LayananPage({ onOrder }: LayananPageProps) {
  return (
    <div className="bg-[#f8f9fa]">
      <div className="max-w-[1440px] mx-auto px-5 pt-5 pb-16">
        {/* Hero Banner */}
        <div className="relative bg-[#c2d9f5] overflow-hidden mb-10" style={{ minHeight: '220px' }}>
          {/* Decorative image */}
          <div
            className="absolute pointer-events-none select-none"
            style={{
              right: '-10%',
              bottom: '-30%',
              width: '70%',
              transform: 'rotate(-10.53deg)',
              transformOrigin: 'center bottom',
              opacity: 0.75,
            }}
          >
            <img src={imgBg} alt="" className="w-full h-auto object-bottom" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-10 xl:px-14 py-12 xl:py-16 max-w-[950px]">
            <h1
              className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-black leading-tight"
              style={{ fontSize: 'clamp(26px, 4.5vw, 64px)' }}
            >
              Mau Minta Tolong Apa Hari Ini?
            </h1>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              desc={service.desc}
              onOrder={onOrder}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
