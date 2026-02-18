'use client'

import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'

interface Operation {
  id: string
  patientName: string
  doctorTeam: string
  department: string
  admissionDate: string
  status: 'In Progress' | 'Completed' | 'Scheduled' | 'Critical'
}

const operationsData: Operation[] = [
  {
    id: '#OP001',
    patientName: 'John Doe',
    doctorTeam: 'Dr. Smith & Team',
    department: 'Cardiology',
    admissionDate: '2024-02-15',
    status: 'In Progress',
  },
  {
    id: '#OP002',
    patientName: 'Jane Wilson',
    doctorTeam: 'Dr. Johnson & Team',
    department: 'Orthopedics',
    admissionDate: '2024-02-14',
    status: 'Completed',
  },
  {
    id: '#OP003',
    patientName: 'Michael Brown',
    doctorTeam: 'Dr. Williams & Team',
    department: 'General Surgery',
    admissionDate: '2024-02-13',
    status: 'Critical',
  },
  {
    id: '#OP004',
    patientName: 'Sarah Davis',
    doctorTeam: 'Dr. Martinez & Team',
    department: 'Pediatrics',
    admissionDate: '2024-02-12',
    status: 'Scheduled',
  },
  {
    id: '#OP005',
    patientName: 'Robert Garcia',
    doctorTeam: 'Dr. Rodriguez & Team',
    department: 'Neurology',
    admissionDate: '2024-02-11',
    status: 'In Progress',
  },
]

const statusColors = {
  'In Progress': 'bg-blue-50 text-blue-700 border border-blue-200',
  'Completed': 'bg-green-50 text-green-700 border border-green-200',
  'Scheduled': 'bg-orange-50 text-orange-700 border border-orange-200',
  'Critical': 'bg-red-50 text-red-700 border border-red-200',
}

export function OperationsTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'status'>('date')

  const filteredData = operationsData.filter(
    (op) =>
      op.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      op.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-white rounded-2xl p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Active Operations</h3>
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Sort by
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">
                Operation ID
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">
                Patient Name
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground hidden md:table-cell">
                Doctor Team
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground hidden lg:table-cell">
                Department
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground hidden md:table-cell">
                Admission Date
              </th>
              <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((operation) => (
              <tr key={operation.id} className="border-b border-border hover:bg-muted transition-colors">
                <td className="py-3 px-4 text-sm font-medium text-foreground">{operation.id}</td>
                <td className="py-3 px-4 text-sm text-foreground">{operation.patientName}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground hidden md:table-cell">
                  {operation.doctorTeam}
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground hidden lg:table-cell">
                  {operation.department}
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground hidden md:table-cell">
                  {operation.admissionDate}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      statusColors[operation.status]
                    }`}
                  >
                    {operation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No operations found
        </div>
      )}
    </div>
  )
}
