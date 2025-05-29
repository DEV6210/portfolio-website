import { Button } from '@/components/ui/button';
import HireMeModal from './HireMeModal';
import { useState } from 'react';

const HeroSection = () => {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-tech-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            {/* Greeting with emoji */}
            <div className="mb-4 animate-fade-in-up">
              <span className="text-4xl md:text-6xl">👋</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-tech-blue via-cyber-purple to-neon-green bg-clip-text text-transparent">
                Amit Mandal
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-700 mb-4 animate-fade-in-up font-semibold" style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center gap-2">
                🚀 <span>Fullstack Developer</span>
              </span>            
              <span className="mx-2">|</span>
              <span className="inline-flex items-center gap-2">
                <span>Freelancer</span>
              </span>
            </div>

            {/* Tech Stack */}
            <div className="text-base md:text-lg text-gray-600 mb-6 animate-fade-in-up max-w-4xl mx-auto" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {['MERN Stack', 'Next.js', 'React Native', 'Node.js', 'Python', 'Java', 'C', 'PHP', 'Laravel','AWS (S3, EC2, Lambda)', 'MongoDB','MySQL'].map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-cyber-purple hover:text-cyber-purple transition-all duration-200 animate-slide-in-right"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    🔧 {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up font-medium" style={{ animationDelay: '0.5s' }}>
              💼 <span className="text-cyber-purple font-bold">Infino</span> — <span className="italic">Innovation Without Limits</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-tech-blue to-cyber-purple hover:from-cyber-purple hover:to-tech-blue hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white px-8 py-4 text-lg font-semibold rounded-full"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                📂 View My Work
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-green to-emerald-500 hover:from-emerald-500 hover:to-neon-green hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white px-8 py-4 text-lg font-semibold rounded-full"
                onClick={() => setIsHireModalOpen(true)}
              >
                💼 Hire Me
              </Button>
            </div>
          </div>

          {/* Enhanced Floating Tech Icons */}
          <div className="absolute top-20 right-10 animate-float opacity-30">
            <div className="w-20 h-20 bg-gradient-to-br from-tech-blue to-cyber-purple rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <span className="text-white font-bold text-2xl">{'</>'}</span>
            </div>
          </div>
          
          <div className="absolute bottom-20 left-10 animate-float opacity-30" style={{ animationDelay: '1.5s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-emerald-400 rounded-2xl flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
          </div>

          <div className="absolute top-1/3 left-20 animate-float opacity-25" style={{ animationDelay: '2.5s' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🚀</span>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyber-purple rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-cyber-purple rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <HireMeModal 
        open={isHireModalOpen} 
        onOpenChange={setIsHireModalOpen} 
      />
    </>
  );
};

export default HeroSection;
