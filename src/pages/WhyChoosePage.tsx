import { Users, Target, Clock, Zap, Shield, Award, CheckCircle, TrendingUp } from 'lucide-react';

export default function WhyChoosePage() {
  const reasons = [
    {
      icon: Users,
      title: 'Experienced Professionals',
      description: 'Our security personnel undergo rigorous training and continuous professional development to ensure they deliver the highest standards of service.',
      details: [
        'Comprehensive background checks and vetting',
        'Ongoing training in security protocols and customer service',
        'Experienced field supervisors and management team',
        'Regular performance evaluations and skill assessments',
      ],
    },
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'We understand that every client has unique security requirements. Our approach is to create customized solutions that address your specific needs.',
      details: [
        'Comprehensive security assessments',
        'Custom security plans and protocols',
        'Flexible service packages',
        'Scalable solutions that grow with your needs',
      ],
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Security concerns don\'t follow a schedule, and neither do we. Our team is available around the clock to respond to your needs.',
      details: [
        'Round-the-clock monitoring and response',
        'Emergency dispatch capabilities',
        'Dedicated support team',
        'Real-time incident reporting and communication',
      ],
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'We leverage modern security technology to enhance our service delivery and provide comprehensive protection.',
      details: [
        'Digital reporting and documentation systems',
        'GPS-tracked mobile patrols',
        'Real-time communication networks',
        'Modern security equipment and tools',
      ],
    },
    {
      icon: Shield,
      title: 'Client-Focused Approach',
      description: 'Your satisfaction and safety are our top priorities. We work closely with you to ensure our services exceed your expectations.',
      details: [
        'Dedicated account managers',
        'Regular service reviews and feedback',
        'Transparent communication',
        'Responsive to client concerns and requests',
      ],
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Our reputation is built on years of successful service delivery across diverse industries and client types.',
      details: [
        'Long-term client relationships',
        'Positive client testimonials',
        'Low incident rates',
        'Industry recognition and compliance',
      ],
    },
  ];

  const benefits = [
    { icon: CheckCircle, title: 'Peace of Mind', description: 'Focus on your core business while we handle security' },
    { icon: TrendingUp, title: 'Risk Reduction', description: 'Minimize security threats and vulnerabilities' },
    { icon: Shield, title: 'Asset Protection', description: 'Safeguard your property, people, and resources' },
    { icon: Users, title: 'Professional Image', description: 'Enhance your organization\'s security presence' },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Businesses Choose Borgra Security
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Discover what sets us apart as Ghana's premier security services provider
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              At Borgra Security Limited, we combine expertise, technology, and dedication to provide
              security solutions that truly protect what matters most to you. Here's why organizations
              across Ghana trust us with their security needs.
            </p>
          </div>

          <div className="space-y-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-12">
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-slate-700 to-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      <reason.icon className="h-8 w-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">What This Means for You:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {reason.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="bg-slate-100 rounded-full p-1.5 mt-1 flex-shrink-0">
                            <CheckCircle className="h-4 w-4 text-slate-900" strokeWidth={2.5} />
                          </div>
                          <span className="text-slate-600">{detail}</span>
                        </div>
                      ))}
                    </div>
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
              The Borgra Security Advantage
            </h2>
            <p className="text-lg text-slate-600">
              Benefits you can expect when you partner with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-slate-900" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We don't just provide security services—we build lasting partnerships based on trust,
              reliability, and exceptional service delivery. When you choose Borgra Security, you're
              choosing a team that is genuinely invested in your safety and success.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-xs">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-slate-300">Client Satisfaction Focus</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-xs">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-slate-300">Support & Monitoring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-xs">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-slate-300">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
