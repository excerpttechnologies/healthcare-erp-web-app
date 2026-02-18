'use client'

import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'

// Data for charts
const patientByDepartmentData = [
  { department: 'Cardiology', patients: 120, staff: 45 },
  { department: 'Orthopedics', patients: 98, staff: 38 },
  { department: 'Neurology', patients: 87, staff: 32 },
  { department: 'Pediatrics', patients: 110, staff: 40 },
  { department: 'General Surgery', patients: 95, staff: 42 },
]

const deathReportsData = [
  { month: 'Jan', deaths: 12, total: 1200 },
  { month: 'Feb', deaths: 15, total: 1180 },
  { month: 'Mar', deaths: 10, total: 1250 },
  { month: 'Apr', deaths: 18, total: 1210 },
  { month: 'May', deaths: 14, total: 1190 },
  { month: 'Jun', deaths: 11, total: 1270 },
]

const accidentReportsData = [
  { month: 'Jan', accidents: 5, incidents: 3 },
  { month: 'Feb', accidents: 8, incidents: 4 },
  { month: 'Mar', accidents: 6, incidents: 2 },
  { month: 'Apr', accidents: 9, incidents: 5 },
  { month: 'May', accidents: 4, incidents: 1 },
  { month: 'Jun', accidents: 7, incidents: 3 },
]

const earningsByDepartmentData = [
  { name: 'Cardiology', value: 35, fill: '#3b82f6' },
  { name: 'Orthopedics', value: 25, fill: '#10b981' },
  { name: 'Neurology', value: 20, fill: '#8b5cf6' },
  { name: 'Pediatrics', value: 15, fill: '#f59e0b' },
  { name: 'General Surgery', value: 5, fill: '#ef4444' },
]

const hospitalProgressData = [
  { name: 'Beds Occupied', value: 78, fill: '#3b82f6' },
  { name: 'Staff Utilization', value: 85, fill: '#10b981' },
  { name: 'Equipment Ready', value: 92, fill: '#8b5cf6' },
  { name: 'Patient Satisfaction', value: 88, fill: '#f59e0b' },
]

const COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444']

export function AnalyticsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Patients by Department - Stacked Bar */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Patients by Department</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={patientByDepartmentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="department" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
            <Legend />
            <Bar dataKey="patients" fill="#3b82f6" name="Patients" radius={[8, 8, 0, 0]} />
            <Bar dataKey="staff" fill="#10b981" name="Staff" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Hospital Progress - Radial Bar */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Hospital Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadialBarChart data={hospitalProgressData}>
            <RadialBar background dataKey="value" fill="#3b82f6" />
            <Tooltip />
            <Legend />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Total Death Reports - Area Chart */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Total Death Reports</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={deathReportsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
            <Legend />
            <Line type="monotone" dataKey="deaths" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444' }} name="Deaths" />
            <Line type="monotone" dataKey="total" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} name="Total Admissions" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Total Accident Reports - Area Chart */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Accident & Incident Reports</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={accidentReportsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
            <Legend />
            <Line type="monotone" dataKey="accidents" stroke="#f59e0b" strokeWidth={2} dot={{ fill: '#f59e0b' }} name="Accidents" />
            <Line type="monotone" dataKey="incidents" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} name="Incidents" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Earnings by Department - Pie Chart */}
      <div className="bg-white rounded-2xl p-6 border border-border lg:col-span-2">
        <h3 className="text-lg font-semibold text-foreground mb-6">Earnings by Department</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={earningsByDepartmentData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={(entry) => `${entry.name}: ${entry.value}%`}
              outerRadius={80}
              fill="#3b82f6"
              dataKey="value"
            >
              {earningsByDepartmentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
