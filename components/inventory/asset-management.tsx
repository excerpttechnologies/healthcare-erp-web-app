'use client'

import { useState } from 'react'
import { Search, Plus, Package, AlertCircle } from 'lucide-react'

interface Asset {
  id: string
  name: string
  category: 'Equipment' | 'Furniture' | 'Technology' | 'Machinery'
  location: string
  purchaseDate: string
  purchasePrice: number
  currentValue: number
  status: 'In Use' | 'Maintenance' | 'Retired' | 'Storage'
  warranty: string
}

const assetsData: Asset[] = [
  {
    id: 'AST001',
    name: 'CT Scan Machine',
    category: 'Equipment',
    location: 'Radiology Department',
    purchaseDate: '2019-03-15',
    purchasePrice: 450000,
    currentValue: 315000,
    status: 'In Use',
    warranty: 'Valid until 2025',
  },
  {
    id: 'AST002',
    name: 'ECG Monitor',
    category: 'Equipment',
    location: 'Cardiology Department',
    purchaseDate: '2021-06-20',
    purchasePrice: 25000,
    currentValue: 18750,
    status: 'In Use',
    warranty: 'Valid until 2026',
  },
  {
    id: 'AST003',
    name: 'Surgical Lights',
    category: 'Equipment',
    location: 'Operation Theatre',
    purchaseDate: '2018-09-10',
    purchasePrice: 35000,
    currentValue: 17500,
    status: 'Maintenance',
    warranty: 'Expired',
  },
  {
    id: 'AST004',
    name: 'Hospital Beds (Set of 10)',
    category: 'Furniture',
    location: 'General Ward',
    purchaseDate: '2017-12-01',
    purchasePrice: 12000,
    currentValue: 3600,
    status: 'In Use',
    warranty: 'Expired',
  },
  {
    id: 'AST005',
    name: 'EMR Server System',
    category: 'Technology',
    location: 'IT Department',
    purchaseDate: '2020-01-15',
    purchasePrice: 75000,
    currentValue: 45000,
    status: 'In Use',
    warranty: 'Valid until 2027',
  },
]

const statusColors = {
  'In Use': 'bg-green-50 text-green-700 border border-green-200',
  'Maintenance': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  'Retired': 'bg-red-50 text-red-700 border border-red-200',
  'Storage': 'bg-gray-50 text-gray-700 border border-gray-200',
}

export function AssetManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [assets, setAssets] = useState(assetsData)

  const filteredAssets = assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalValue = assets.reduce((sum, a) => sum + a.currentValue, 0)
  const inUseCount = assets.filter(a => a.status === 'In Use').length
  const maintenanceCount = assets.filter(a => a.status === 'Maintenance').length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inventory</h1>
          <p className="text-muted-foreground mt-2">Manage medical equipment and assets.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Add Asset
        </button>
      </div>

      {/* Alerts */}
      {maintenanceCount > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-yellow-700">{maintenanceCount} assets require maintenance</p>
            <p className="text-sm text-yellow-600">Please schedule maintenance to avoid service disruption</p>
          </div>
        </div>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Total Assets</p>
          <p className="text-2xl font-bold text-foreground mt-2">{assets.length}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">In Use</p>
          <p className="text-2xl font-bold text-green-600 mt-2">{inUseCount}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Maintenance</p>
          <p className="text-2xl font-bold text-yellow-600 mt-2">{maintenanceCount}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Total Asset Value</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">${totalValue.toLocaleString()}</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by asset name, ID, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Assets Table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Asset ID
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Name
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">
                  Category
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden lg:table-cell">
                  Location
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">
                  Current Value
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
              {filteredAssets.map((asset) => (
                <tr key={asset.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{asset.id}</td>
                  <td className="py-4 px-6 text-sm text-foreground">{asset.name}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden md:table-cell">
                    {asset.category}
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden lg:table-cell">
                    {asset.location}
                  </td>
                  <td className="py-4 px-6 text-sm font-semibold text-foreground hidden md:table-cell">
                    ${asset.currentValue.toLocaleString()}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[asset.status]}`}>
                      {asset.status}
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

      {filteredAssets.length === 0 && (
        <div className="bg-white rounded-2xl p-8 border border-border text-center text-muted-foreground">
          <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No assets found matching your search.</p>
        </div>
      )}
    </div>
  )
}
