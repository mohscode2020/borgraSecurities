import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

type PageType = 'home' | 'about' | 'services' | 'why-choose' | 'contact';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="Borgra Security Limited"
                className="h-12 w-auto"
              />
              <div>
                <div className="text-lg font-bold">Borgra Security</div>
                <div className="text-xs text-slate-400">Limited</div>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Your Trusted Partner in Comprehensive Security Solutions
            </p>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['home', 'about', 'services', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => handleNavClick(page as PageType)}
                  className="block text-slate-300 hover:text-white transition-colors text-sm capitalize"
                >
                  {page === 'home' ? 'Home' : page === 'about' ? 'About Us' : page === 'services' ? 'Services' : 'Contact'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>Manned Guarding</p>
              <p>Mobile Patrols</p>
              <p>Event Security</p>
              <p>Corporate Protection</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <div className="text-slate-300">
                  <p>Lakeside Estate, Community 8</p>
                  <p>House No. C8-414A</p>
                  <p>Ashley Botwe - Adenta Municipality</p>
                  <p>Accra, Ghana</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <a href="tel:+233248803936" className="text-slate-300 hover:text-white transition-colors">
                  +233 24 880 3936
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <a href="mailto:borgra.secure@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  borgra.secure@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2025 Borgra Security Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
