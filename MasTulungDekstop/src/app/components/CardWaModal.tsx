import { useState } from 'react';
import { X } from 'lucide-react';

const WA_NUMBER = '+62 81358307627';
const WA_NUMBER_CLEAN = '6281358307627';
const WA_URL = `https://wa.me/${WA_NUMBER_CLEAN}?text=Mas%20Tulung`;

interface CardWaModalProps {
  onClose: () => void;
  onScanQR: () => void;
}

export function CardWaModal({ onClose, onScanQR }: CardWaModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      const ta = document.createElement('textarea');
      ta.value = WA_NUMBER;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (_) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="bg-white rounded-[16px] overflow-hidden relative"
      style={{ width: '340px', border: '1px solid #4a90e2' }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-[#737373] hover:text-black transition-colors"
      >
        <X size={16} />
      </button>

      <div className="px-7 py-6 flex flex-col gap-4">
        {/* Title */}
        <div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-black">
            Hubungi Penyedia Jasa
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-black text-xs mt-2 leading-5">
            Silahkan salin nomor dibawah ini atau tekan buka WhatsApp
          </p>
        </div>

        {/* Phone number field */}
        <div
          className="bg-[#f8f9fa] rounded-[10px] flex items-center justify-between px-3 py-3"
          style={{ border: '1px solid #b3b3b3' }}
        >
          <span className="font-['Plus_Jakarta_Sans',sans-serif] text-black text-sm">
            {WA_NUMBER}
          </span>
          <button
            onClick={handleCopy}
            className="bg-[#50e3c2] text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-sm px-4 py-2 rounded-[5px] shrink-0 hover:bg-[#3ecfb0] transition-colors"
          >
            {copied ? 'Tersalin!' : 'Salin'}
          </button>
        </div>

        {/* WhatsApp button */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#4a90e2] text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-sm text-center py-3 rounded-[5px] hover:bg-[#2e72c4] transition-colors"
        >
          Buka WhatsApp
        </a>

        {/* Scan QR link */}
        <button
          onClick={onScanQR}
          className="text-[#23a6f0] font-['Plus_Jakarta_Sans',sans-serif] text-xs text-center hover:underline"
        >
          Atau scan QR
        </button>
      </div>
    </div>
  );
}
