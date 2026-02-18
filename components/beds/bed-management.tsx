'use client'

import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface Bed {
  id: string
  wardName: string
  bedNumber: string
  bedType: 'General' | 'ICU' | 'Private' | 'Semi-Private'
  status: 'Available' | 'Occupied' | 'Maintenance'
  patient?: string
  checkInDate?: string
}

const bedsData: Bed[] = [
  { id: 'BED001', wardName: 'General Ward A', bedNumber: 'A-101', bedType: 'General', status: 'Occupied', patient: 'John Doe', checkInDate: '2024-02-10' },
  { id: 'BED002', wardName: 'General Ward A', bedNumber: 'A-102', bedType: 'General', status: 'Available' },
  { id: 'BED003', wardName: 'General Ward A', bedNumber: 'A-103', bedType: 'General', status: 'Occupied', patient: 'Jane Wilson', checkInDate: '2024-02-12' },
  { id: 'BED004', wardName: 'General Ward A', bedNumber: 'A-104', bedType: 'General', status: 'Available' },
  { id: 'BED005', wardName: 'ICU Ward', bedNumber: 'ICU-01', bedType: 'ICU', status: 'Occupied', patient: 'Michael Brown', checkInDate: '2024-02-08' },
  { id: 'BED006', wardName: 'ICU Ward', bedNumber: 'ICU-02', bedType: 'ICU', status: 'Occupied', patient: 'Sarah Davis', checkInDate: '2024-02-14' },
  { id: 'BED007', wardName: 'ICU Ward', bedNumber: 'ICU-03', bedType: 'ICU', status: 'Maintenance' },
  { id: 'BED008', wardName: 'Private Wing', bedNumber: 'PVT-01', bedType: 'Private', status: 'Occupied', patient: 'Robert Garcia', checkInDate: '2024-02-11' },
  { id: 'BED009', wardName: 'Private Wing', bedNumber: 'PVT-02', bedType: 'Private', status: 'Available' },
  { id: 'BED010', wardName: 'Semi-Private', bedNumber: 'SP-01', bedType: 'Semi-Private', status: 'Available' },
]

const occupancyData = [
  { ward: 'General A', available: 2, occupied: 2, maintenance: 0 },
  { ward: 'ICU', available: 0, occupied: 2, maintenance: 1 },
  { ward: 'Private', available: 1, occupied: 1, maintenance: 0 },
  { ward: 'Semi-Private', available: 3, occupied: 2, maintenance: 0 },
]

const statusColors = {
  'Available': 'bg-green-50 text-green-700 border border-green-200',
  'Occupied': 'bg-blue-50 text-blue-700 border border-blue-200',
  'Maintenance': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
}

const typeColors = {
  'General': 'text-gray-600 bg-gray-50',
  'ICU': 'text-red-600 bg-red-50',
  'Private': 'text-purple-600 bg-purple-50',
  'Semi-Private': 'text-orange-600 bg-orange-50',
}

export function BedManagement() {
  const [beds, setBeds] = useState(bedsData)

  const availableCount = beds.filter(b => b.status === 'Available').length
  const occupiedCount = beds.filter(b => b.status === 'Occupied').length
  const maintenanceCount = beds.filter(b => b.status === 'Maintenance').length
  const occupancyRate = ((occupiedCount / (beds.length - maintenanceCount)) * 100).toFixed(1)

  const bedsByType = {
    General: beds.filter(b => b.bedType === 'General').length,
    ICU: beds.filter(b => b.bedType === 'ICU').length,
    Private: beds.filter(b => b.bedType === 'Private').length,
    'Semi-Private': beds.filter(b => b.bedType === 'Semi-Private').length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Beds & Wards</h1>
        <p className="text-muted-foreground mt-2">Manage bed occupancy and ward allocation.</p>
      </div>

      {/* Occupancy Alert */}
      {occupancyRate > 85 && (
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-orange-700">High Occupancy Rate: {occupancyRate}%</p>
            <p className="text-sm text-orange-600">Consider preparing overflow capacity</p>
          </div>
        </div>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Total Beds</p>
          <p className="text-2xl font-bold text-foreground mt-2">{beds.length}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Available</p>
          <p className="text-2xl font-bold text-green-600 mt-2">{availableCount}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Occupied</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">{occupiedCount}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Maintenance</p>
          <p className="text-2xl font-bold text-yellow-600 mt-2">{maintenanceCount}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Occupancy Rate</p>
          <p className="text-2xl font-bold text-purple-600 mt-2">{occupancyRate}%</p>
        </div>
      </div>

      {/* Occupancy Chart */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-6">Occupancy by Ward</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={occupancyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="ward" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
            <Legend />
            <Bar dataKey="available" fill="#10b981" name="Available" radius={[8, 8, 0, 0]} />
            <Bar dataKey="occupied" fill="#3b82f6" name="Occupied" radius={[8, 8, 0, 0]} />
            <Bar dataKey="maintenance" fill="#f59e0b" name="Maintenance" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bed Listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['General Ward A', 'ICU Ward', 'Private Wing', 'Semi-Private'].map((ward) => {
          const wardBeds = beds.filter(b => b.wardName === ward)
          return (
            <div key={ward} className="bg-white rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">{ward}</h3>
              <div className="grid grid-cols-2 gap-3">
                {wardBeds.map((bed) => (
                  <div
                    key={bed.id}
                    className={`p-3 rounded-lg border text-sm ${
                      bed.status === 'Available'
                        ? 'bg-green-50 border-green-200'
                        : bed.status === 'Occupied'
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-yellow-50 border-yellow-200'
                    }`}
                  >
                    <p className="font-medium text-foreground">{bed.bedNumber}</p>
                    <p className={`text-xs mt-1 font-semibold ${
                      bed.status === 'Available' ? 'text-green-700' : bed.status === 'Occupied' ? 'text-blue-700' : 'text-yellow-700'
                    }`}>
                      {bed.status}
                    </p>
                    {bed.patient && (
                      <p className="text-xs text-muted-foreground mt-1 truncate">{bed.patient}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Bed Type Summary */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Beds by Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(bedsByType).map(([type, count]) => (
            <div key={type} className="text-center p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">{type}</p>
              <p className="text-2xl font-bold text-foreground">{count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
