import { Shield, Radio, Users, Building, Home, Store, ArrowRight } from 'lucide-react';

type PageType = 'home' | 'about' | 'services' | 'why-choose' | 'contact';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Shield,
      title: 'Manned Guarding',
      description: 'Professional on-site security personnel providing comprehensive protection for your facilities.',
      features: [
        'Highly trained security officers',
        'Access control and visitor management',
        'Regular patrols and monitoring',
        'Incident reporting and response',
        'Customer service oriented approach',
      ],
      applications: ['Corporate offices', 'Residential properties', 'Manufacturing facilities', 'Retail establishments'],
    },
    {
      icon: Radio,
      title: 'Mobile Patrols',
      description: 'Strategic mobile security patrols ensuring comprehensive coverage and rapid response capabilities.',
      features: [
        'Regular scheduled patrols',
        'Random security checks',
        'Rapid emergency response',
        'Multiple site coverage',
        'Detailed patrol reports',
      ],
      applications: ['Commercial complexes', 'Residential estates', 'Construction sites', 'Vacant properties'],
    },
    {
      icon: Users,
      title: 'Event Security',
      description: 'Comprehensive security management for events of all sizes, ensuring safety and smooth operations.',
      features: [
        'Crowd control management',
        'Access control and ticketing support',
        'VIP protection services',
        'Emergency response planning',
        'Post-event reporting',
      ],
      applications: ['Corporate events', 'Concerts and festivals', 'Private functions', 'Sporting events'],
    },
  ];

  const industries = [
    { icon: Building, name: 'Corporate Offices', description: 'Comprehensive security for business environments' },
    { icon: Store, name: 'Retail & Commercial', description: 'Protection for stores and shopping centers' },
    { icon: Home, name: 'Residential', description: 'Safety solutions for homes and estates' },
    { icon: Users, name: 'Events & Hospitality', description: 'Security for events and venues' },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Security Services</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We deliver high-quality, customized security services to meet the unique needs of our clients
              across various industries and sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-gradient-to-br from-slate-700 to-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="bg-slate-100 rounded-full p-1 mt-0.5 mr-3">
                            <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                          </div>
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Ideal For:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-slate-50 rounded-2xl p-12 text-center">
                    <service.icon className="h-32 w-32 text-slate-300 mx-auto" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Providing specialized security solutions across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-8 w-8 text-slate-900" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-slate-600">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Request a Free Consultation
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let us assess your security needs and provide a customized solution
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
