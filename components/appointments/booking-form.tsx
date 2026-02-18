'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Stethoscope, Save } from 'lucide-react'

interface BookingFormData {
  patientName: string
  patientEmail: string
  patientPhone: string
  appointmentDate: string
  appointmentTime: string
  doctor: string
  reason: string
  notes: string
}

const doctorList = [
  { id: '1', name: 'Dr. Smith', specialty: 'Cardiology', available: true },
  { id: '2', name: 'Dr. Johnson', specialty: 'Orthopedics', available: true },
  { id: '3', name: 'Dr. Williams', specialty: 'General Surgery', available: true },
  { id: '4', name: 'Dr. Martinez', specialty: 'Pediatrics', available: false },
  { id: '5', name: 'Dr. Rodriguez', specialty: 'Neurology', available: true },
]

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00'
]

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    appointmentDate: '',
    appointmentTime: '',
    doctor: '',
    reason: '',
    notes: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        patientName: '',
        patientEmail: '',
        patientPhone: '',
        appointmentDate: '',
        appointmentTime: '',
        doctor: '',
        reason: '',
        notes: '',
      })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Book an Appointment</h1>
        <p className="text-muted-foreground mt-2">Schedule a new patient appointment with our doctors.</p>
      </div>

      {submitted && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-green-700">Appointment booked successfully!</p>
            <p className="text-sm text-green-600">Confirmation has been sent to the patient email.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Patient Information */}
        <div className="bg-white rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-foreground">Patient Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Patient Name *</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                placeholder="Enter patient name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
              <input
                type="email"
                name="patientEmail"
                value={formData.patientEmail}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                placeholder="patient@example.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
              <input
                type="tel"
                name="patientPhone"
                value={formData.patientPhone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                placeholder="+1-555-0000"
              />
            </div>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="bg-white rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-orange-600" />
            <h2 className="text-lg font-semibold text-foreground">Appointment Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Preferred Date *</label>
              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Preferred Time *</label>
              <select
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">Select Doctor *</label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
              >
                <option value="">Choose a doctor</option>
                {doctorList.map((doctor) => (
                  <option key={doctor.id} value={doctor.id} disabled={!doctor.available}>
                    {doctor.name} - {doctor.specialty} {!doctor.available && '(Not Available)'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Visit Reason */}
        <div className="bg-white rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Stethoscope className="w-5 h-5 text-green-600" />
            <h2 className="text-lg font-semibold text-foreground">Visit Reason</h2>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Reason for Visit *</label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
              placeholder="e.g., Regular Checkup, Follow-up, Consultation"
            />
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground h-24"
              placeholder="Any additional information for the doctor..."
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Save className="w-4 h-4" />
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  )
}
