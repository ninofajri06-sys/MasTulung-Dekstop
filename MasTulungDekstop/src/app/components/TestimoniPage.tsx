import imgBg from '../../imports/Testimoni/77d27a3b43e7b6fe5cbace67979037a153c07eae.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Rina Kusuma',
    review: 'Agennya ramah banget, barang pindahan kos saya aman semua. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
  },
  {
    id: 2,
    name: 'Budi Santoso',
    review: 'Drivernya tepat waktu dan sopan. Titip belanja juga nggak ada yang salah beli.',
    avatar: 'https://images.unsplash.com/photo-1587397845856-e6cf49176c70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
  },
  {
    id: 3,
    name: 'Dewi Anggraini',
    review: 'Laundry dititipin ke Mas Tulung, hasilnya bersih dan wangi. Adminnya juga ganteng!',
    avatar: 'https://images.unsplash.com/photo-1515138692129-197a2c608cfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
  },
  {
    id: 4,
    name: 'Arif Wibowo',
    review: 'Antar makanan cepat sampai, masih panas waktu nyampe. Pelayanannya mantap jiwa!',
    avatar: 'https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
  },
];

function TestimonialCard({ name, review, avatar }: { name: string; review: string; avatar: string }) {
  return (
    <div
      className="bg-white rounded-[10px] flex flex-col items-center px-10 py-10 gap-5"
      style={{ border: '1px solid #4a90e2' }}
    >
      <div className="w-[85px] h-[85px] rounded-full overflow-hidden shrink-0">
        <ImageWithFallback
          src={avatar}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-black text-center">
        {name}
      </p>
      <div className="w-24 h-px bg-black" />
      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-black text-sm text-center leading-6">
        {review}
      </p>
    </div>
  );
}

export function TestimoniPage() {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-5 pt-5 pb-16">
        {/* Banner */}
        <div className="relative bg-[#c2d9f5] overflow-hidden mb-12" style={{ minHeight: '180px' }}>
          <div
            className="absolute pointer-events-none select-none"
            style={{
              right: '-8%',
              top: '-20%',
              width: '68%',
              transform: 'rotate(-14.93deg)',
              opacity: 0.7,
            }}
          >
            <img src={imgBg} alt="" className="w-full h-auto object-cover" />
          </div>
          <div className="relative z-10 flex items-center justify-center h-full px-8 py-10 xl:py-14">
            <h1
              className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-black text-center leading-tight"
              style={{ fontSize: 'clamp(28px, 4.5vw, 64px)' }}
            >
              Testimoni Pengguna{' '}
              <span className="text-[#4a90e2]">Mas Tulung</span>
            </h1>
          </div>
        </div>

        {/* Testimonial Cards — 2 columns on md, 4 on xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} name={t.name} review={t.review} avatar={t.avatar} />
          ))}
        </div>
      </div>
    </div>
  );
}
