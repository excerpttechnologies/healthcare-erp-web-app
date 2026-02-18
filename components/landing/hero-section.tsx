'use client'

import Link from 'next/link'
import { ArrowRight, Stethoscope, Activity, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/images/hospital-hero.jpg" 
          alt="Hospital background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-blue-200">
              <Activity className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Trusted by 500+ Healthcare Facilities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-balance">
                Healthcare Excellence, Simplified
              </h1>
              <p className="text-xl text-gray-600 text-balance">
                Streamline hospital operations, enhance patient care, and empower your medical team with our comprehensive ERP solution designed specifically for modern healthcare facilities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Access Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { icon: Stethoscope, label: 'Patient Care', value: '99.9% Uptime' },
                { icon: Users, label: 'Team Collab', value: '500+ Users' },
                { icon: Activity, label: 'Real-time', value: 'Live Monitoring' }
              ].map((feature) => (
                <div key={feature.label} className="text-center">
                  <feature.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">{feature.label}</p>
                  <p className="text-sm font-semibold text-gray-900">{feature.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-full min-h-96">
            <img 
              src="/images/patient-care.jpg" 
              alt="Patient care"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}
