export function StatsSection() {
  const stats = [
    {
      value: '500+',
      label: 'Healthcare Facilities',
      description: 'Trusted by hospitals and clinics worldwide'
    },
    {
      value: '2M+',
      label: 'Patient Records',
      description: 'Securely managed daily'
    },
    {
      value: '99.9%',
      label: 'Uptime',
      description: 'Enterprise-grade reliability'
    },
    {
      value: '50K+',
      label: 'Staff Members',
      description: 'Using our platform daily'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <p className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</p>
              <p className="text-lg font-semibold mb-1">{stat.label}</p>
              <p className="text-blue-100 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
