import { HeroSection } from '@/components/landing/hero-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { StatsSection } from '@/components/landing/stats-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      
      {/* Healthcare Info Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Healthcare ERP?</h3>
              <p className="text-gray-600 mb-4">
                Modern healthcare demands integrated systems that improve efficiency, reduce costs, and enhance patient outcomes. Our platform consolidates critical operations into one intuitive interface.
              </p>
              <p className="text-sm text-blue-600 font-medium">Learn more about ERP benefits →</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Security</h3>
              <p className="text-gray-600 mb-4">
                HIPAA-compliant infrastructure with end-to-end encryption ensures patient data remains confidential and secure. Regular security audits and compliance checks protect your facility.
              </p>
              <p className="text-sm text-blue-600 font-medium">Security details →</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 mb-4">
                Our dedicated support team available round-the-clock ensures your facility operates smoothly. Rapid response times and expert assistance for any issues.
              </p>
              <p className="text-sm text-blue-600 font-medium">Contact support →</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Healthcare Operations?</h2>
          <p className="text-xl mb-8 text-blue-100">Join hundreds of healthcare facilities using our ERP system to improve patient care and operational efficiency.</p>
          <a 
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Start Your Journey
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>
    </div>
  )
}
