import { Target, Eye, Shield, CheckCircle, Award, Users } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Shield, title: 'Integrity', description: 'We uphold the highest ethical standards in all our operations' },
    { icon: Award, title: 'Professionalism', description: 'Our team maintains excellence in service delivery' },
    { icon: CheckCircle, title: 'Reliability', description: 'Consistent, dependable security solutions you can trust' },
    { icon: Users, title: 'Customer Focus', description: 'Your safety and satisfaction are our top priorities' },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Borgra Security Limited</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Your trusted partner in creating safe and secure environments across Ghana
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                <Shield className="h-4 w-4 text-slate-700" />
                <span className="text-sm font-medium text-slate-700">Who We Are</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Premier Security Experts in Accra
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Borgra Security Limited is a premier security services provider based in Accra, Ghana.
                  We specialize in delivering comprehensive, reliable, and professional security solutions
                  tailored to meet the unique needs of businesses, organizations, and individuals.
                </p>
                <p>
                  With years of experience in the security industry, our team of highly trained professionals
                  combines expertise with cutting-edge technology to provide exceptional protection services.
                  We understand that every client has distinct security requirements, and we pride ourselves
                  on delivering customized solutions that ensure peace of mind.
                </p>
                <p>
                  Our commitment to excellence, combined with our deep understanding of the local security
                  landscape, makes us the preferred choice for organizations seeking dependable security
                  partnerships in Ghana.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
                <div className="text-slate-600">Clients Served</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                <div className="text-slate-600">Availability</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-slate-600">Commitment</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-slate-900 mb-2">10+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="bg-gradient-to-br from-slate-700 to-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" strokeWidth={2} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To protect lives, property, and assets through exceptional security services delivered
                by trained and dedicated personnel. We strive to create safe environments where our clients
                can operate with confidence and peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="bg-gradient-to-br from-slate-700 to-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" strokeWidth={2} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be Ghana's most trusted and innovative security company, setting the standard for
                excellence in protection services through continuous improvement, technological advancement,
                and unwavering commitment to our clients' safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-900 transition-all transform group-hover:scale-110">
                  <value.icon className="h-10 w-10 text-slate-900 group-hover:text-white transition-colors" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Discover how our expertise can enhance your security posture
          </p>
        </div>
      </section>
    </div>
  );
}
