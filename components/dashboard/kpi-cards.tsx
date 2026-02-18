import { TrendingUp, TrendingDown, Calendar, Users, Stethoscope, Bed, DollarSign, AlertCircle } from 'lucide-react'

interface KPICard {
  title: string
  value: string | number
  change: number
  unit?: string
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'cyan'
  icon: React.ReactNode
  description: string
}

const colorClasses = {
  blue: 'bg-blue-50 border-blue-200',
  green: 'bg-green-50 border-green-200',
  purple: 'bg-purple-50 border-purple-200',
  orange: 'bg-orange-50 border-orange-200',
  red: 'bg-red-50 border-red-200',
  cyan: 'bg-cyan-50 border-cyan-200',
}

const textColorClasses = {
  blue: 'text-blue-700',
  green: 'text-green-700',
  purple: 'text-purple-700',
  orange: 'text-orange-700',
  red: 'text-red-700',
  cyan: 'text-cyan-700',
}

const kpiData: KPICard[] = [
  { 
    title: 'Total Appointments', 
    value: '1,234', 
    change: 12, 
    color: 'blue',
    icon: <Calendar className="w-5 h-5" />,
    description: 'Scheduled consultations and procedures'
  },
  { 
    title: 'Active Patients', 
    value: '5,678', 
    change: 8, 
    color: 'green',
    icon: <Users className="w-5 h-5" />,
    description: 'Currently admitted and under care'
  },
  { 
    title: 'Medical Staff', 
    value: '234', 
    change: -2, 
    color: 'purple',
    icon: <Stethoscope className="w-5 h-5" />,
    description: 'Doctors, nurses, and specialists'
  },
  { 
    title: 'Available Beds', 
    value: '42', 
    change: 5, 
    color: 'orange',
    icon: <Bed className="w-5 h-5" />,
    description: 'Ready for patient admission'
  },
  { 
    title: 'Monthly Revenue', 
    value: '$125K', 
    change: 18, 
    color: 'cyan',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Billing and insurance collections'
  },
  { 
    title: 'Critical Cases', 
    value: '12', 
    change: -15, 
    color: 'red',
    icon: <AlertCircle className="w-5 h-5" />,
    description: 'Emergency and ICU admissions'
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {kpiData.map((kpi) => (
        <div
          key={kpi.title}
          className={`rounded-2xl p-6 border ${colorClasses[kpi.color]} hover:shadow-lg transition-all cursor-pointer group`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg ${colorClasses[kpi.color]} flex items-center justify-center ${textColorClasses[kpi.color]} group-hover:scale-110 transition-transform`}>
              {kpi.icon}
            </div>
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                kpi.change >= 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}
            >
              {kpi.change >= 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span className="text-xs font-semibold">{Math.abs(kpi.change)}%</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">{kpi.title}</p>
            <p className="text-3xl font-bold text-foreground mb-3">{kpi.value}</p>
            <p className="text-xs text-muted-foreground">{kpi.description}</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-current border-opacity-10">
            <p className="text-xs text-muted-foreground">
              {kpi.change >= 0 ? '↑' : '↓'} {Math.abs(kpi.change)}% from last month
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
