'use client'

import { useState } from 'react'
import { Search, Plus, User, UserCheck, Calendar } from 'lucide-react'

interface StaffMember {
  id: string
  name: string
  role: 'Doctor' | 'Nurse' | 'Admin' | 'Lab Tech' | 'Support'
  department: string
  joinDate: string
  salary: number
  status: 'Active' | 'On Leave' | 'Inactive'
  contact: string
}

const staffData: StaffMember[] = [
  {
    id: 'STF001',
    name: 'Dr. Smith',
    role: 'Doctor',
    department: 'Cardiology',
    joinDate: '2018-05-15',
    salary: 8500,
    status: 'Active',
    contact: 'dr.smith@hospital.com',
  },
  {
    id: 'STF002',
    name: 'John Johnson',
    role: 'Nurse',
    department: 'Cardiology',
    joinDate: '2019-03-20',
    salary: 3500,
    status: 'Active',
    contact: 'john.johnson@hospital.com',
  },
  {
    id: 'STF003',
    name: 'Sarah Williams',
    role: 'Nurse',
    department: 'ICU',
    joinDate: '2017-07-10',
    salary: 3800,
    status: 'On Leave',
    contact: 'sarah.williams@hospital.com',
  },
  {
    id: 'STF004',
    name: 'Dr. Martinez',
    role: 'Doctor',
    department: 'Pediatrics',
    joinDate: '2019-01-12',
    salary: 7500,
    status: 'Active',
    contact: 'dr.martinez@hospital.com',
  },
  {
    id: 'STF005',
    name: 'Michael Brown',
    role: 'Lab Tech',
    department: 'Laboratory',
    joinDate: '2020-06-01',
    salary: 2800,
    status: 'Active',
    contact: 'michael.brown@hospital.com',
  },
]

const statusColors = {
  'Active': 'bg-green-50 text-green-700 border border-green-200',
  'On Leave': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  'Inactive': 'bg-gray-50 text-gray-700 border border-gray-200',
}

const roleColors = {
  'Doctor': 'text-blue-600 bg-blue-50',
  'Nurse': 'text-purple-600 bg-purple-50',
  'Admin': 'text-orange-600 bg-orange-50',
  'Lab Tech': 'text-green-600 bg-green-50',
  'Support': 'text-gray-600 bg-gray-50',
}

export function StaffManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [staff, setStaff] = useState(staffData)

  const filteredStaff = staff.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.department.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const activeCount = staff.filter(s => s.status === 'Active').length
  const onLeaveCount = staff.filter(s => s.status === 'On Leave').length
  const totalPayroll = staff.reduce((sum, s) => sum + s.salary, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">HR & Staff</h1>
          <p className="text-muted-foreground mt-2">Manage staff, attendance, and payroll.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Add Staff Member
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Total Staff</p>
          <p className="text-2xl font-bold text-foreground mt-2">{staff.length}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Active</p>
          <p className="text-2xl font-bold text-green-600 mt-2">{activeCount}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">On Leave</p>
          <p className="text-2xl font-bold text-yellow-600 mt-2">{onLeaveCount}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Monthly Payroll</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">${totalPayroll.toLocaleString()}</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, ID, or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Staff ID
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Name
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">
                  Role
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden lg:table-cell">
                  Department
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">
                  Salary
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Status
                </th>
                <th className="text-center py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStaff.map((member) => (
                <tr key={member.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{member.id}</td>
                  <td className="py-4 px-6 text-sm text-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.contact}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm hidden md:table-cell">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${roleColors[member.role]}`}>
                      {member.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden lg:table-cell">
                    {member.department}
                  </td>
                  <td className="py-4 px-6 text-sm font-semibold text-foreground hidden md:table-cell">
                    ${member.salary.toLocaleString()}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[member.status]}`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button className="px-3 py-1 text-xs border border-border rounded-lg hover:bg-muted transition-colors">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredStaff.length === 0 && (
        <div className="bg-white rounded-2xl p-8 border border-border text-center text-muted-foreground">
          <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No staff members found matching your search.</p>
        </div>
      )}
    </div>
  )
}
