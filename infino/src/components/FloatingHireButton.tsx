
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import HireMeModal from './HireMeModal';

const FloatingHireButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}>
        <Button 
          onClick={() => setIsHireModalOpen(true)}
          className="bg-cyber-gradient hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white px-6 py-3 rounded-full animate-pulse-glow"
          size="lg"
        >
          💼 Hire Me
        </Button>
      </div>

      <HireMeModal 
        open={isHireModalOpen} 
        onOpenChange={setIsHireModalOpen} 
      />
    </>
  );
};

export default FloatingHireButton;
