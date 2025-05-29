
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-neon-green">Infino</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Building automation solutions that transform how businesses operate. 
              Innovation meets practicality in every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-200">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-200">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#hire" className="text-gray-400 hover:text-white transition-colors duration-200">Hire Me</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Automation Development</span></li>
              <li><span className="text-gray-400">App Development</span></li>
              <li><span className="text-gray-400">System Optimization</span></li>
              <li><span className="text-gray-400">Consulting</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Infino. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with ❤️ by Amit Mandal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
