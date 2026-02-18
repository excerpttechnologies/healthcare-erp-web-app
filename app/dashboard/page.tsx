import { KPICards } from '@/components/dashboard/kpi-cards'
import { AnalyticsSection } from '@/components/dashboard/analytics-section'
import { ActivityTimeline } from '@/components/dashboard/activity-timeline'
import { OperationsTable } from '@/components/dashboard/operations-table'

export const metadata = {
  title: 'Dashboard - Healthcare ERP',
  description: 'Hospital management system dashboard with KPIs and analytics',
}

export default function DashboardPage() {
  const currentHour = new Date().getHours()
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="space-y-6">
      {/* Enhanced Header with Healthcare Context */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{greeting}! 👋</h1>
            <p className="text-lg text-gray-600 mt-2">Here's your hospital's real-time overview for optimal patient care management.</p>
            <div className="flex gap-4 mt-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                All Systems Operational
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                🏥 Active Patients: 324
              </span>
            </div>
          </div>
          <img 
            src="/images/medical-team.jpg" 
            alt="Medical team"
            className="w-32 h-32 rounded-xl object-cover shadow-lg hidden lg:block"
          />
        </div>
      </div>

      {/* KPI Cards */}
      <section>
        <KPICards />
      </section>

      {/* Analytics Charts */}
      <section>
        <AnalyticsSection />
      </section>

      {/* Activity Timeline and Operations Table */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ActivityTimeline />
        </div>
        <div className="lg:col-span-2">
          <OperationsTable />
        </div>
      </section>
    </div>
  )
}
