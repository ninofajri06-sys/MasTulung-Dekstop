import { X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const WA_URL = 'https://wa.me/6281358307627?text=Mas%20Tulung';

interface CardQrModalProps {
  onClose: () => void;
}

export function CardQrModal({ onClose }: CardQrModalProps) {
  return (
    <div
      className="bg-white rounded-[16px] overflow-hidden relative"
      style={{ width: '320px', border: '1px solid #4a90e2' }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-[#737373] hover:text-black transition-colors"
      >
        <X size={16} />
      </button>

      <div className="px-7 py-6 flex flex-col items-center gap-5">
        {/* Title */}
        <div className="w-full">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-black">
            Hubungi Penyedia Jasa
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-black text-xs mt-2 leading-5">
            Silahkan scan kode QR dibawah
          </p>
        </div>

        {/* Real QR Code */}
        <div
          className="bg-[#f8f9fa] rounded-[10px] flex items-center justify-center p-3"
          style={{ border: '1px solid #b3b3b3' }}
        >
          <QRCodeSVG
            value={WA_URL}
            size={108}
            bgColor="#f8f9fa"
            fgColor="#000000"
            level="M"
          />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="bg-[#4a90e2] text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-sm px-8 py-2 rounded-[5px] hover:bg-[#2e72c4] transition-colors"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
