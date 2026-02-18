import { PatientList } from '@/components/patients/patient-list'

export default function PatientsPage() {
  return (
    <div className="space-y-6">
      {/* Healthcare Context Header */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Patient Management</h1>
            <p className="text-lg text-gray-600 mt-2">Comprehensive patient care coordination and medical record management. Access complete patient profiles, treatment history, and vital information to provide optimal care.</p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Total Patients: 5,678
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Admitted Today: 24
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Follow-ups: 18
              </span>
            </div>
          </div>
          <img 
            src="/images/patient-care.jpg" 
            alt="Patient care"
            className="w-32 h-32 rounded-xl object-cover shadow-lg hidden lg:block"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Average Appointment Duration</p>
          <p className="text-2xl font-bold mt-2">28 min</p>
          <p className="text-xs text-gray-500 mt-2">Per patient consultation</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Treatment Success Rate</p>
          <p className="text-2xl font-bold mt-2">94.2%</p>
          <p className="text-xs text-gray-500 mt-2">Patient recovery rate</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Patient Satisfaction</p>
          <p className="text-2xl font-bold mt-2">4.8/5.0</p>
          <p className="text-xs text-gray-500 mt-2">Based on feedback</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Emergency Cases</p>
          <p className="text-2xl font-bold mt-2">12</p>
          <p className="text-xs text-gray-500 mt-2">This month</p>
        </div>
      </div>

      <PatientList />
    </div>
  )
}
