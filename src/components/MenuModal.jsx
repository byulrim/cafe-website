import React, { useState, useEffect, useCallback, useRef } from 'react';

const MenuModal = ({ item, onClose }) => {
  const [closing, setClosing] = useState(false);
  const backdropRef = useRef(null);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 250);
  }, [onClose]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleClose]);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) handleClose();
  };

  const shareToInstagram = () => {
    const text = encodeURIComponent(`☕ ${item.name} at Aurora Cafe\n${item.review || ''}\n#AuroraCafe #CafeLife`);
    window.open(`https://www.instagram.com/?text=${text}`, '_blank');
  };

  if (!item) return null;

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop bg-black/60 ${closing ? 'closing' : ''}`}
    >
      <div className="modal-content w-full max-w-lg max-h-[90vh] overflow-y-auto modal-scroll bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 border border-white/15 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-t-3xl">
          <img
            src={item.image || 'https://via.placeholder.com/400x300'}
            alt={item.name}
            className="w-full h-56 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/60 transition-all border border-white/20 text-lg"
            aria-label="Close"
          >
            ✕
          </button>
          <span className="absolute bottom-4 right-4 px-4 py-2 bg-amber-500/90 backdrop-blur-md rounded-full text-white font-semibold text-sm shadow-lg">
            {item.price}
          </span>
        </div>

        <div className="p-8">
          <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">{item.name}</h3>
          {item.nameEn && <p className="text-sm text-gray-400 font-light mb-5">{item.nameEn}</p>}
          <p className="text-gray-300 font-light leading-relaxed mb-6">{item.description}</p>
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-3 font-semibold">Main Ingredients</h4>
            <div className="flex flex-wrap gap-2">
              {(item.ingredients || '').split(', ').map((ing, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-sm text-gray-200 font-light">
                  {ing}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/10">
            <h4 className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-2 font-semibold">Short Review</h4>
            <p className="text-gray-100 text-lg font-light italic leading-relaxed">"{item.review}"</p>
          </div>
          <button
            onClick={shareToInstagram}
            className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-500 hover:via-pink-400 hover:to-orange-300 text-white rounded-2xl font-semibold tracking-wide transition-all shadow-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram에 공유하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
