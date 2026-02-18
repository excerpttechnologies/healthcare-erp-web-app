import { Stethoscope, Users, Pill, TestTubes, Heart, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Stethoscope,
    title: 'Patient Management',
    description: 'Comprehensive patient records with medical history, appointments, and health metrics all in one secure location for better care coordination.'
  },
  {
    icon: Users,
    title: 'Staff Management',
    description: 'Manage your medical team efficiently with scheduling, payroll, and performance tracking to optimize hospital operations.'
  },
  {
    icon: Pill,
    title: 'Pharmacy Control',
    description: 'Real-time medicine inventory tracking, prescription management, and automated stock alerts to ensure medication availability.'
  },
  {
    icon: TestTubes,
    title: 'Lab Testing',
    description: 'Order, track, and manage laboratory tests with integrated reporting for faster diagnosis and treatment decisions.'
  },
  {
    icon: Heart,
    title: 'Emergency Response',
    description: 'Rapid triage system and emergency case management to handle critical situations with immediate resource allocation.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Detailed insights into hospital performance, patient outcomes, and financial metrics for data-driven decision making.'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance mb-4">
            Complete Healthcare Management Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Our integrated modules cover every aspect of hospital operations, from patient care to administrative management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all bg-gradient-to-br from-white to-gray-50">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-balance">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
