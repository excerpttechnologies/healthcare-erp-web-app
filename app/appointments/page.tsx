'use client'

import { useState } from 'react'
import { AppointmentCalendar } from '@/components/appointments/calendar'
import { BookingForm } from '@/components/appointments/booking-form'
import { Calendar, Plus } from 'lucide-react'

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState<'calendar' | 'booking'>('calendar')

  return (
    <div className="space-y-6">
      {/* Header with Tab Navigation */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
          <p className="text-muted-foreground mt-2">Schedule and manage patient appointments.</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab('calendar')}
          className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
            activeTab === 'calendar'
              ? 'border-primary text-primary font-medium'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          <Calendar className="w-4 h-4" />
          Calendar View
        </button>
        <button
          onClick={() => setActiveTab('booking')}
          className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
            activeTab === 'booking'
              ? 'border-primary text-primary font-medium'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          <Plus className="w-4 h-4" />
          New Appointment
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'calendar' && <AppointmentCalendar />}
      {activeTab === 'booking' && <BookingForm />}
    </div>
  )
}
