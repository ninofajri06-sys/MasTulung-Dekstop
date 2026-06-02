import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar, type Page } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { LayananPage } from './components/LayananPage';
import { TestimoniPage } from './components/TestimoniPage';
import { AboutUsPage } from './components/AboutUsPage';
import { CardWaModal } from './components/CardWaModal';
import { CardQrModal } from './components/CardQrModal';

type Modal = 'wa' | 'qr' | null;

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const pageTransition = { duration: 0.28, ease: [0.4, 0, 0.2, 1] };

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [modal, setModal] = useState<Modal>(null);

  return (
    <div className="size-full overflow-auto bg-[#f8f9fa]">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
        >
          {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
          {currentPage === 'layanan' && <LayananPage onOrder={() => setModal('wa')} />}
          {currentPage === 'testimoni' && <TestimoniPage />}
          {currentPage === 'about' && <AboutUsPage />}
        </motion.div>
      </AnimatePresence>

      {/* Modal overlay */}
      <AnimatePresence>
        {modal && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setModal(null)}
          >
            <motion.div
              key={modal}
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 16 }}
              transition={{ duration: 0.25, ease: [0.34, 1.26, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {modal === 'wa' && (
                <CardWaModal
                  onClose={() => setModal(null)}
                  onScanQR={() => setModal('qr')}
                />
              )}
              {modal === 'qr' && (
                <CardQrModal onClose={() => setModal(null)} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
