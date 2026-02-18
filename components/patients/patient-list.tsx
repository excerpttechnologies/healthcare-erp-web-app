'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Edit, Eye, Trash2 } from 'lucide-react'

interface Patient {
  id: string
  name: string
  age: number
  gender: string
  phone: string
  email: string
  bloodGroup: string
  lastVisit: string
  status: 'Active' | 'Inactive' | 'Critical'
}

const patientData: Patient[] = [
  {
    id: 'P001',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    phone: '+1-555-0101',
    email: 'john@example.com',
    bloodGroup: 'O+',
    lastVisit: '2024-02-14',
    status: 'Active',
  },
  {
    id: 'P002',
    name: 'Jane Wilson',
    age: 38,
    gender: 'Female',
    phone: '+1-555-0102',
    email: 'jane@example.com',
    bloodGroup: 'A+',
    lastVisit: '2024-02-12',
    status: 'Active',
  },
  {
    id: 'P003',
    name: 'Michael Brown',
    age: 67,
    gender: 'Male',
    phone: '+1-555-0103',
    email: 'michael@example.com',
    bloodGroup: 'B+',
    lastVisit: '2024-02-10',
    status: 'Critical',
  },
  {
    id: 'P004',
    name: 'Sarah Davis',
    age: 29,
    gender: 'Female',
    phone: '+1-555-0104',
    email: 'sarah@example.com',
    bloodGroup: 'AB+',
    lastVisit: '2024-02-08',
    status: 'Active',
  },
  {
    id: 'P005',
    name: 'Robert Garcia',
    age: 52,
    gender: 'Male',
    phone: '+1-555-0105',
    email: 'robert@example.com',
    bloodGroup: 'O-',
    lastVisit: '2024-01-28',
    status: 'Inactive',
  },
]

const statusColors = {
  'Active': 'bg-green-50 text-green-700 border border-green-200',
  'Inactive': 'bg-gray-50 text-gray-700 border border-gray-200',
  'Critical': 'bg-red-50 text-red-700 border border-red-200',
}

export function PatientList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [patients, setPatients] = useState(patientData)

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Patients</h1>
          <p className="text-muted-foreground mt-2">Manage and view all patient records.</p>
        </div>
        <Link
          href="/patients/new"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          + New Patient
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, ID, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Patient Table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Patient ID
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Name
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">
                  Age / Gender
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden lg:table-cell">
                  Blood Group
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">
                  Last Visit
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Status
                </th>
                <th className="text-center py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{patient.id}</td>
                  <td className="py-4 px-6 text-sm text-foreground">
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-xs text-muted-foreground">{patient.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden md:table-cell">
                    {patient.age} / {patient.gender}
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden lg:table-cell">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                      {patient.bloodGroup}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden md:table-cell">
                    {new Date(patient.lastVisit).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        statusColors[patient.status]
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        href={`/patients/${patient.id}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button
                        className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredPatients.length === 0 && (
        <div className="bg-white rounded-2xl p-8 border border-border text-center text-muted-foreground">
          <p>No patients found matching your search.</p>
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredPatients.length} of {patients.length} patients
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-border rounded-lg text-sm hover:bg-muted transition-colors">
            Previous
          </button>
          <button className="px-3 py-2 border border-border rounded-lg text-sm hover:bg-muted transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
