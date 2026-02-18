'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Appointment {
  date: string
  time: string
  doctor: string
  patient: string
  status: 'Scheduled' | 'Completed' | 'Cancelled'
}

const appointments: Appointment[] = [
  { date: '2024-02-17', time: '09:00', doctor: 'Dr. Smith', patient: 'John Doe', status: 'Scheduled' },
  { date: '2024-02-17', time: '10:30', doctor: 'Dr. Johnson', patient: 'Jane Wilson', status: 'Scheduled' },
  { date: '2024-02-18', time: '14:00', doctor: 'Dr. Williams', patient: 'Michael Brown', status: 'Scheduled' },
  { date: '2024-02-20', time: '11:00', doctor: 'Dr. Martinez', patient: 'Sarah Davis', status: 'Scheduled' },
  { date: '2024-02-21', time: '15:30', doctor: 'Dr. Rodriguez', patient: 'Robert Garcia', status: 'Scheduled' },
]

export function AppointmentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 1, 17))
  const [selectedDate, setSelectedDate] = useState<string | null>('2024-02-17')

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const getDateString = (day: number) => {
    return `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  }

  const getAppointmentsForDate = (dateStr: string) => {
    return appointments.filter((apt) => apt.date === dateStr)
  }

  const selectedAppointments = selectedDate ? getAppointmentsForDate(selectedDate) : []

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Calendar */}
      <div className="lg:col-span-1 bg-white rounded-2xl p-6 border border-border h-fit">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-foreground">{monthName}</h3>
          <div className="flex gap-2">
            <button
              onClick={handlePrevMonth}
              className="p-1 hover:bg-muted rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-1 hover:bg-muted rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-xs font-semibold text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, idx) => {
            const dateStr = day ? getDateString(day) : null
            const hasAppointments = dateStr && getAppointmentsForDate(dateStr).length > 0
            const isSelected = dateStr === selectedDate

            return (
              <button
                key={idx}
                onClick={() => dateStr && setSelectedDate(dateStr)}
                className={`py-2 text-sm rounded-lg transition-colors ${
                  day === null
                    ? 'invisible'
                    : isSelected
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : hasAppointments
                    ? 'bg-blue-100 text-blue-700 font-medium hover:bg-blue-200'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {day}
              </button>
            )
          })}
        </div>
      </div>

      {/* Appointments List */}
      <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          {selectedDate ? `Appointments - ${new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}` : 'Select a date'}
        </h3>

        {selectedAppointments.length > 0 ? (
          <div className="space-y-4">
            {selectedAppointments.map((apt, idx) => (
              <div key={idx} className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-lg font-semibold text-foreground">{apt.time}</p>
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium border border-green-200">
                        {apt.status}
                      </span>
                    </div>
                    <p className="text-sm text-foreground mb-1">
                      <span className="font-medium">Doctor:</span> {apt.doctor}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Patient:</span> {apt.patient}
                    </p>
                  </div>
                  <button className="px-3 py-2 border border-border rounded-lg text-sm hover:bg-muted transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p>No appointments scheduled for this date.</p>
          </div>
        )}
      </div>
    </div>
  )
}
