import imgBg from '../../imports/AboutUs/77d27a3b43e7b6fe5cbace67979037a153c07eae.png';
import { Target, Eye, Heart, MapPin } from 'lucide-react';

const infoCards = [
  {
    icon: Target,
    title: 'Misi Kami',
    text: 'Menghubungkan masyarakat dengan penyedia jasa terpercaya untuk memenuhi berbagai kebutuhan sehari-hari dengan mudah, cepat, dan terjangkau.',
    accent: '#4a90e2',
  },
  {
    icon: Eye,
    title: 'Visi Kami',
    text: 'Menjadi platform layanan jasa terpercaya nomor satu di Indonesia yang memudahkan kehidupan sehari-hari masyarakat melalui teknologi.',
    accent: '#2e72c4',
  },
  {
    icon: Heart,
    title: 'Nilai Kami',
    text: 'Kepercayaan, kemudahan, dan kecepatan adalah tiga nilai utama yang kami pegang teguh dalam setiap layanan yang kami berikan kepada pelanggan.',
    accent: '#50e3c2',
  },
  {
    icon: MapPin,
    title: 'Lokasi',
    text: 'Saat ini Mas Tulung beroperasi di Kota Malang, Jawa Timur. Kami terus berkembang untuk menjangkau lebih banyak kota di Indonesia.',
    accent: '#f5a623',
  },
];

export function AboutUsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-5 pt-5 pb-16">
        {/* Banner */}
        <div className="relative bg-[#c2d9f5] overflow-hidden mb-12" style={{ minHeight: '140px' }}>
          <div
            className="absolute pointer-events-none select-none"
            style={{
              right: '-5%',
              top: '-25%',
              width: '65%',
              transform: 'rotate(-14.93deg)',
              opacity: 0.75,
            }}
          >
            <img src={imgBg} alt="" className="w-full h-auto object-cover" />
          </div>
          <div className="relative z-10 flex items-center justify-center h-full px-8 py-10 xl:py-14">
            <h1
              className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-black text-center leading-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              About Us
            </h1>
          </div>
        </div>

        {/* Intro */}
        <div className="px-2 mb-10">
          <h2
            className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-black"
            style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
          >
            MasTulung
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#737373] mt-3 max-w-2xl leading-7" style={{ fontSize: '16px' }}>
            Platform layanan jasa yang menghubungkan kamu langsung ke penyedia jasa terpercaya melalui WhatsApp.
            Mulai dari antar jemput, pindah kos, titip laundry, hingga belanja — semua bisa!
          </p>
        </div>

        {/* 4 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {infoCards.map(({ icon: Icon, title, text, accent }) => (
            <div
              key={title}
              className="bg-white rounded-[16px] p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
              style={{ border: `2px solid ${accent}` }}
            >
              <div
                className="w-12 h-12 rounded-[10px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: accent + '18' }}
              >
                <Icon size={24} style={{ color: accent }} strokeWidth={1.8} />
              </div>
              <h3
                className="font-['Plus_Jakarta_Sans',sans-serif] font-bold"
                style={{ color: accent }}
              >
                {title}
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#737373] text-sm leading-6">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
