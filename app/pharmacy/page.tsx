import { PharmacyInventory } from '@/components/pharmacy/pharmacy-inventory'
import { AlertTriangle, Pill } from 'lucide-react'

export default function PharmacyPage() {
  return (
    <div className="space-y-6">
      {/* Healthcare Context Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Pharmacy Management</h1>
            <p className="text-lg text-gray-600 mt-2">Monitor medication inventory, manage prescriptions, and ensure optimal stock levels. Real-time tracking prevents medicine shortages and ensures patient safety.</p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                <Pill className="w-4 h-4" />
                Total Medications: 1,245
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                <AlertTriangle className="w-4 h-4" />
                Low Stock: 8 Items
              </span>
            </div>
          </div>
          <img 
            src="/images/pharmacy.jpg" 
            alt="Pharmacy"
            className="w-32 h-32 rounded-xl object-cover shadow-lg hidden lg:block"
          />
        </div>
      </div>

      {/* Pharmacy Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Inventory Value</p>
          <p className="text-2xl font-bold mt-2">$425K</p>
          <p className="text-xs text-gray-500 mt-2">Total medication stock</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Prescriptions Today</p>
          <p className="text-2xl font-bold mt-2">342</p>
          <p className="text-xs text-gray-500 mt-2">Filled prescriptions</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Expiring Soon</p>
          <p className="text-2xl font-bold text-orange-600 mt-2">5</p>
          <p className="text-xs text-gray-500 mt-2">Within 30 days</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Supplier Orders</p>
          <p className="text-2xl font-bold mt-2">12</p>
          <p className="text-xs text-gray-500 mt-2">Pending delivery</p>
        </div>
      </div>

      <PharmacyInventory />
    </div>
  )
}
