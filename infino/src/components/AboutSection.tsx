
const AboutSection = () => {
  const skills = [
    'MERN Stack Development',
    'Next.js & React Native',
    'Node.js & Python',
    'Java & C Programming',
    'PHP & Laravel',
    'Automation Engineering',
    'System Architecture',
    'DevOps & CI/CD'
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      handle: 'DEV6210',
      url: 'https://github.com/DEV6210',
      icon: '📂',
      color: 'text-gray-700 hover:text-black'
    },
    {
      name: 'LinkedIn',
      handle: 'Amit Mandal',
      url: 'https://www.linkedin.com/in/amit-mandal-80802926b/',
      icon: '💼',
      color: 'text-blue-600 hover:text-blue-800'
    },
    {
      name: 'Freelancer',
      handle: 'fullstackcoderx',
      url: 'https://www.freelancer.com/u/fullstackcoderx?sb=t',
      icon: '🧑‍💻',
      color: 'text-green-600 hover:text-green-800'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-cyber-purple">Me</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                I'm <strong className="text-tech-blue">Amit Mandal</strong> — a passionate fullstack software developer and the mind behind <strong className="text-cyber-purple">Infino</strong>.
              </p>

              <p>
                With hands-on experience in building scalable, efficient, and innovative applications, I specialize in technologies like
                <strong className="text-neon-green"> React Native, Next.js, Python, Node.js, Laravel</strong>, and more.
              </p>

              <p>
                Whether it's web, mobile, or backend systems, I love turning complex problems into smart, automated solutions.
                As a freelancer, I've helped clients around the world build high-quality products that make a real impact.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-tech-blue">🔧 Technical Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 animate-slide-in-right p-2 rounded-lg hover:bg-white/60 transition-all duration-200"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Section */}
            {/* <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-tech-blue">🔗 Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-md transition-all duration-200 ${link.color} animate-fade-in-up`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <div>
                      <div className="font-semibold">{link.name}</div>
                      <div className="text-sm opacity-75">{link.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right Side - Enhanced Visual */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-tech-blue via-cyber-purple to-neon-green rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse-glow">
                  <span className="text-4xl">🚀</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">Innovation Without Limits</h3>
                <p className="text-blue-100 mb-6">
                  Transforming ideas into reality through cutting-edge development and intelligent automation solutions.
                </p>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-blue-200">Projects</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">2+</div>
                    <div className="text-sm text-blue-200">Years</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">∞</div>
                    <div className="text-sm text-blue-200">Passion</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <div className="text-lg font-semibold mb-2">💼 Available for Freelance</div>
                  <div className="text-sm text-blue-200">Ready to bring your ideas to life!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h3 className="text-xl font-semibold mb-4 text-tech-blue">🔗 Connect With Me</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-md transition-all duration-200 ${link.color} animate-fade-in-up`}
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <span className="text-2xl">{link.icon}</span>
              <div>
                <div className="font-semibold">{link.name}</div>
                <div className="text-sm opacity-75">{link.handle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
