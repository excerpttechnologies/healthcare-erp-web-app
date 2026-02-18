import { Mail, Phone, MapPin, Calendar, Heart, User, FileText } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const vitalSignsData = [
  { date: 'Day 1', temp: 98.6, bp: 120, hr: 72, rr: 16 },
  { date: 'Day 2', temp: 98.5, bp: 118, hr: 70, rr: 16 },
  { date: 'Day 3', temp: 98.7, bp: 122, hr: 74, rr: 17 },
  { date: 'Day 4', temp: 98.4, bp: 119, hr: 71, rr: 16 },
  { date: 'Day 5', temp: 98.6, bp: 121, hr: 73, rr: 16 },
]

const appointmentHistory = [
  { date: '2024-02-14', time: '10:00 AM', doctor: 'Dr. Smith', reason: 'Routine Checkup', status: 'Completed' },
  { date: '2024-01-28', time: '02:30 PM', doctor: 'Dr. Johnson', reason: 'Follow-up', status: 'Completed' },
  { date: '2024-01-10', time: '11:15 AM', doctor: 'Dr. Williams', reason: 'Consultation', status: 'Completed' },
]

interface PatientProfileProps {
  patientId: string
}

export function PatientProfile({ patientId }: PatientProfileProps) {
  return (
    <div className="space-y-6">
      {/* Patient Header Card */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">John Doe</h1>
              <p className="text-muted-foreground">Patient ID: P001</p>
              <span className="inline-block mt-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200">
                Active
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-sm">
              <p className="text-muted-foreground">Age</p>
              <p className="font-semibold text-foreground">45 years</p>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">Gender</p>
              <p className="font-semibold text-foreground">Male</p>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">Blood Group</p>
              <p className="font-semibold text-foreground">O+</p>
            </div>
            <div className="text-sm">
              <p className="text-muted-foreground">DOB</p>
              <p className="font-semibold text-foreground">1978-07-20</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-foreground font-medium">john@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-foreground font-medium">+1-555-0101</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-orange-600" />
            <div>
              <p className="text-xs text-muted-foreground">Address</p>
              <p className="text-foreground font-medium">123 Medical Lane, Health City, HC 12345</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-purple-600" />
            <div>
              <p className="text-xs text-muted-foreground">Registered Since</p>
              <p className="text-foreground font-medium">2020-03-15</p>
            </div>
          </div>
        </div>
      </div>

      {/* Medical History */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-6 border border-border">
            <h2 className="text-lg font-semibold text-foreground mb-4">Current Medical Conditions</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <Heart className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Hypertension</p>
                  <p className="text-xs text-muted-foreground">Diagnosed: 2015-06-10</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <Heart className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Type 2 Diabetes</p>
                  <p className="text-xs text-muted-foreground">Diagnosed: 2018-02-14</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <Heart className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Seasonal Allergies</p>
                  <p className="text-xs text-muted-foreground">Diagnosed: 2010-05-20</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Medications */}
        <div className="bg-white rounded-2xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">Current Medications</h2>
          <div className="space-y-2">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium text-foreground">Metformin</p>
              <p className="text-xs text-muted-foreground">500mg, 2x daily</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium text-foreground">Lisinopril</p>
              <p className="text-xs text-muted-foreground">10mg, 1x daily</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium text-foreground">Aspirin</p>
              <p className="text-xs text-muted-foreground">100mg, 1x daily</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vital Signs Chart */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Vital Signs Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={vitalSignsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
            <Line type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444' }} name="Temperature (°F)" />
            <Line type="monotone" dataKey="hr" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} name="Heart Rate (bpm)" />
            <Line type="monotone" dataKey="rr" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} name="Resp. Rate" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Appointment History */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Appointment History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Time</th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground hidden md:table-cell">Doctor</th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground hidden md:table-cell">Reason</th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointmentHistory.map((appt, idx) => (
                <tr key={idx} className="border-b border-border">
                  <td className="py-3 px-4 text-sm text-foreground">{new Date(appt.date).toLocaleDateString()}</td>
                  <td className="py-3 px-4 text-sm text-foreground">{appt.time}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground hidden md:table-cell">{appt.doctor}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground hidden md:table-cell">{appt.reason}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200">
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
