'use client'

import { useState } from 'react'
import { Search, Plus, TestTubes, AlertCircle } from 'lucide-react'

interface LabTest {
  id: string
  testName: string
  patientName: string
  status: 'Pending' | 'In Progress' | 'Completed' | 'Review'
  requestedDate: string
  dueDate: string
  doctor: string
  priority: 'Normal' | 'High' | 'Urgent'
}

const labTestsData: LabTest[] = [
  {
    id: 'LT001',
    testName: 'Complete Blood Count (CBC)',
    patientName: 'John Doe',
    status: 'Completed',
    requestedDate: '2024-02-15',
    dueDate: '2024-02-16',
    doctor: 'Dr. Smith',
    priority: 'Normal',
  },
  {
    id: 'LT002',
    testName: 'Blood Glucose Test',
    patientName: 'Jane Wilson',
    status: 'In Progress',
    requestedDate: '2024-02-16',
    dueDate: '2024-02-17',
    doctor: 'Dr. Johnson',
    priority: 'High',
  },
  {
    id: 'LT003',
    testName: 'Thyroid Function Test (TSH)',
    patientName: 'Michael Brown',
    status: 'Pending',
    requestedDate: '2024-02-16',
    dueDate: '2024-02-18',
    doctor: 'Dr. Williams',
    priority: 'Urgent',
  },
  {
    id: 'LT004',
    testName: 'Lipid Panel',
    patientName: 'Sarah Davis',
    status: 'Completed',
    requestedDate: '2024-02-14',
    dueDate: '2024-02-15',
    doctor: 'Dr. Martinez',
    priority: 'Normal',
  },
  {
    id: 'LT005',
    testName: 'Liver Function Test (LFT)',
    patientName: 'Robert Garcia',
    status: 'Review',
    requestedDate: '2024-02-13',
    dueDate: '2024-02-14',
    doctor: 'Dr. Rodriguez',
    priority: 'High',
  },
]

const statusColors = {
  'Pending': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  'In Progress': 'bg-blue-50 text-blue-700 border border-blue-200',
  'Completed': 'bg-green-50 text-green-700 border border-green-200',
  'Review': 'bg-orange-50 text-orange-700 border border-orange-200',
}

const priorityColors = {
  'Normal': 'text-gray-600',
  'High': 'text-orange-600',
  'Urgent': 'text-red-600',
}

export function LabTests() {
  const [searchTerm, setSearchTerm] = useState('')
  const [tests, setTests] = useState(labTestsData)

  const filteredTests = tests.filter(
    (test) =>
      test.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Laboratory</h1>
          <p className="text-muted-foreground mt-2">Manage lab tests, samples, and results.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          New Test Request
        </button>
      </div>

      {/* Test Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-border">
          <p className="text-sm text-muted-foreground">Pending Tests</p>
          <p className="text-2xl font-bold text-foreground mt-2">12</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-border">
          <p className="text-sm text-muted-foreground">In Progress</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">5</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-border">
          <p className="text-sm text-muted-foreground">Completed Today</p>
          <p className="text-2xl font-bold text-green-600 mt-2">8</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-border">
          <p className="text-sm text-muted-foreground">Awaiting Review</p>
          <p className="text-2xl font-bold text-orange-600 mt-2">3</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by test name, patient, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Tests Table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Test ID
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Test Name
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">
                  Patient
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden lg:table-cell">
                  Doctor
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">
                  Due Date
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Status
                </th>
                <th className="text-center py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Priority
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTests.map((test) => (
                <tr key={test.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{test.id}</td>
                  <td className="py-4 px-6 text-sm text-foreground">{test.testName}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden md:table-cell">
                    {test.patientName}
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden lg:table-cell">
                    {test.doctor}
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden md:table-cell">
                    {new Date(test.dueDate).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[test.status]}`}>
                      {test.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`text-xs font-semibold ${priorityColors[test.priority]}`}>
                      {test.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Urgent Alert */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-red-700">Urgent: 1 Test Request Requires Immediate Attention</p>
          <p className="text-sm text-red-600">Thyroid Function Test (TSH) for Michael Brown - Requested 2 days ago</p>
        </div>
      </div>
    </div>
  )
}
