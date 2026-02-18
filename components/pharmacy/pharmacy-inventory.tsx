'use client'

import { useState } from 'react'
import { Search, Plus, AlertTriangle, Package } from 'lucide-react'

interface Medicine {
  id: string
  name: string
  manufacturer: string
  stock: number
  unit: string
  price: number
  expiryDate: string
  batchNumber: string
  status: 'Available' | 'Low Stock' | 'Out of Stock' | 'Expiring Soon'
}

const medicineData: Medicine[] = [
  {
    id: 'M001',
    name: 'Lisinopril 10mg',
    manufacturer: 'Generic Pharma',
    stock: 250,
    unit: 'Tablets',
    price: 0.45,
    expiryDate: '2025-12-15',
    batchNumber: 'LIS-2024-001',
    status: 'Available',
  },
  {
    id: 'M002',
    name: 'Metformin 500mg',
    manufacturer: 'Generic Pharma',
    stock: 15,
    unit: 'Tablets',
    price: 0.25,
    expiryDate: '2024-08-20',
    batchNumber: 'MET-2024-002',
    status: 'Low Stock',
  },
  {
    id: 'M003',
    name: 'Aspirin 100mg',
    manufacturer: 'Basic Meds',
    stock: 0,
    unit: 'Tablets',
    price: 0.10,
    expiryDate: '2025-06-10',
    batchNumber: 'ASP-2024-001',
    status: 'Out of Stock',
  },
  {
    id: 'M004',
    name: 'Amoxicillin 500mg',
    manufacturer: 'Antibiotic Co',
    stock: 80,
    unit: 'Capsules',
    price: 1.50,
    expiryDate: '2024-05-15',
    batchNumber: 'AMX-2024-003',
    status: 'Expiring Soon',
  },
  {
    id: 'M005',
    name: 'Atorvastatin 20mg',
    manufacturer: 'Cardio Meds',
    stock: 150,
    unit: 'Tablets',
    price: 2.00,
    expiryDate: '2026-03-20',
    batchNumber: 'ATO-2024-001',
    status: 'Available',
  },
]

const statusColors = {
  'Available': 'bg-green-50 text-green-700 border border-green-200',
  'Low Stock': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  'Out of Stock': 'bg-red-50 text-red-700 border border-red-200',
  'Expiring Soon': 'bg-orange-50 text-orange-700 border border-orange-200',
}

export function PharmacyInventory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [medicines, setMedicines] = useState(medicineData)

  const filteredMedicines = medicines.filter(
    (med) =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const lowStockCount = medicines.filter((m) => m.status === 'Low Stock' || m.status === 'Out of Stock').length
  const expiringCount = medicines.filter((m) => m.status === 'Expiring Soon').length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pharmacy</h1>
          <p className="text-muted-foreground mt-2">Manage medicines, stock levels, and prescriptions.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Add Medicine
        </button>
      </div>

      {/* Alerts */}
      {(lowStockCount > 0 || expiringCount > 0) && (
        <div className="space-y-4">
          {lowStockCount > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-700">{lowStockCount} medicines have low or no stock</p>
                <p className="text-sm text-red-600">Please reorder immediately to avoid stockouts</p>
              </div>
            </div>
          )}
          {expiringCount > 0 && (
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-orange-700">{expiringCount} medicines expiring soon</p>
                <p className="text-sm text-orange-600">Review expiry dates and plan disposal</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-border">
          <p className="text-sm text-muted-foreground">Total Medicines</p>
          <p className="text-2xl font-bold text-foreground mt-2">{medicines.length}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-border">
          <p className="text-sm text-muted-foreground">Available</p>
          <p className="text-2xl font-bold text-green-600 mt-2">{medicines.filter(m => m.status === 'Available').length}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-border">
          <p className="text-sm text-muted-foreground">Low/No Stock</p>
          <p className="text-2xl font-bold text-red-600 mt-2">{lowStockCount}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-border">
          <p className="text-sm text-muted-foreground">Expiring Soon</p>
          <p className="text-2xl font-bold text-orange-600 mt-2">{expiringCount}</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by medicine name, batch number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Medicine ID
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Name
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">
                  Manufacturer
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Stock
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden lg:table-cell">
                  Expiry Date
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
              {filteredMedicines.map((medicine) => (
                <tr key={medicine.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{medicine.id}</td>
                  <td className="py-4 px-6 text-sm text-foreground">{medicine.name}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden md:table-cell">
                    {medicine.manufacturer}
                  </td>
                  <td className="py-4 px-6 text-sm text-foreground font-medium">
                    {medicine.stock} {medicine.unit.charAt(0).toUpperCase() + medicine.unit.slice(1).toLowerCase()}
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden lg:table-cell">
                    {new Date(medicine.expiryDate).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[medicine.status]}`}>
                      {medicine.status}
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

      {filteredMedicines.length === 0 && (
        <div className="bg-white rounded-2xl p-8 border border-border text-center text-muted-foreground">
          <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No medicines found matching your search.</p>
        </div>
      )}
    </div>
  )
}
