import { User, FileText, Heart, AlertCircle, CheckCircle } from 'lucide-react'

interface TimelineEvent {
  id: number
  type: 'patient' | 'document' | 'health' | 'alert' | 'completed'
  title: string
  description: string
  timestamp: string
  icon: React.ReactNode
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    type: 'completed',
    title: 'Patient Registration',
    description: 'John Doe registered for cardiology consultation',
    timestamp: '2 hours ago',
    icon: <CheckCircle className="w-5 h-5 text-green-600" />,
  },
  {
    id: 2,
    type: 'alert',
    title: 'Critical Alert',
    description: 'Patient #234 vitals abnormal - ICU transfer recommended',
    timestamp: '4 hours ago',
    icon: <AlertCircle className="w-5 h-5 text-red-600" />,
  },
  {
    id: 3,
    type: 'document',
    title: 'Lab Results Available',
    description: 'Blood test results ready for patient #567',
    timestamp: '6 hours ago',
    icon: <FileText className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 4,
    type: 'health',
    title: 'Surgery Completed',
    description: 'Orthopedic surgery completed successfully for patient #789',
    timestamp: '8 hours ago',
    icon: <Heart className="w-5 h-5 text-purple-600" />,
  },
  {
    id: 5,
    type: 'patient',
    title: 'New Patient Admitted',
    description: 'Emergency admission - Accident case in ICU ward',
    timestamp: '10 hours ago',
    icon: <User className="w-5 h-5 text-orange-600" />,
  },
]

export function ActivityTimeline() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {timelineEvents.map((event, index) => (
          <div key={event.id} className="flex gap-4">
            {/* Timeline Line and Icon */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                {event.icon}
              </div>
              {index < timelineEvents.length - 1 && (
                <div className="w-0.5 h-12 bg-border mt-2" />
              )}
            </div>

            {/* Event Content */}
            <div className="flex-1 pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">{event.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{event.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
