'use client'

import { useState } from 'react'
import { Search, Plus, Download, Eye, AlertCircle } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface Invoice {
  id: string
  patientName: string
  date: string
  amount: number
  dueDate: string
  status: 'Paid' | 'Pending' | 'Overdue' | 'Partial'
  items: number
  insurance: string
}

const invoicesData: Invoice[] = [
  {
    id: 'INV-2024-001',
    patientName: 'John Doe',
    date: '2024-02-15',
    amount: 1250.00,
    dueDate: '2024-02-28',
    status: 'Paid',
    items: 5,
    insurance: 'Blue Cross',
  },
  {
    id: 'INV-2024-002',
    patientName: 'Jane Wilson',
    date: '2024-02-14',
    amount: 850.50,
    dueDate: '2024-02-28',
    status: 'Pending',
    items: 3,
    insurance: 'Aetna',
  },
  {
    id: 'INV-2024-003',
    patientName: 'Michael Brown',
    date: '2024-02-10',
    amount: 2500.00,
    dueDate: '2024-02-24',
    status: 'Overdue',
    items: 8,
    insurance: 'United Health',
  },
  {
    id: 'INV-2024-004',
    patientName: 'Sarah Davis',
    date: '2024-02-12',
    amount: 650.75,
    dueDate: '2024-02-26',
    status: 'Partial',
    items: 4,
    insurance: 'Cigna',
  },
  {
    id: 'INV-2024-005',
    patientName: 'Robert Garcia',
    date: '2024-02-11',
    amount: 3200.00,
    dueDate: '2024-02-25',
    status: 'Overdue',
    items: 10,
    insurance: 'Humana',
  },
]

const revenueData = [
  { month: 'Jan', revenue: 45000, insurance: 25000, cash: 20000 },
  { month: 'Feb', revenue: 52000, insurance: 28000, cash: 24000 },
  { month: 'Mar', revenue: 48000, insurance: 26000, cash: 22000 },
  { month: 'Apr', revenue: 61000, insurance: 33000, cash: 28000 },
  { month: 'May', revenue: 55000, insurance: 30000, cash: 25000 },
  { month: 'Jun', revenue: 67000, insurance: 36000, cash: 31000 },
]

const statusColors = {
  'Paid': 'bg-green-50 text-green-700 border border-green-200',
  'Pending': 'bg-yellow-50 text-yellow-700 border border-yellow-200',
  'Overdue': 'bg-red-50 text-red-700 border border-red-200',
  'Partial': 'bg-blue-50 text-blue-700 border border-blue-200',
}

export function BillingInvoices() {
  const [searchTerm, setSearchTerm] = useState('')
  const [invoices, setInvoices] = useState(invoicesData)

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.amount, 0)
  const paidAmount = invoices.filter(i => i.status === 'Paid').reduce((sum, inv) => sum + inv.amount, 0)
  const pendingAmount = invoices.filter(i => i.status === 'Pending' || i.status === 'Partial' || i.status === 'Overdue').reduce((sum, inv) => sum + inv.amount, 0)
  const overdueCount = invoices.filter(i => i.status === 'Overdue').length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Billing & Revenue</h1>
          <p className="text-muted-foreground mt-2">Manage invoices, payments, and insurance claims.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          New Invoice
        </button>
      </div>

      {/* Alerts */}
      {overdueCount > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-700">{overdueCount} invoices are overdue</p>
            <p className="text-sm text-red-600">Overdue amount: ${pendingAmount.toFixed(2)}</p>
          </div>
        </div>
      )}

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Total Revenue</p>
          <p className="text-2xl font-bold text-foreground mt-2">${totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Amount Paid</p>
          <p className="text-2xl font-bold text-green-600 mt-2">${paidAmount.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Pending Amount</p>
          <p className="text-2xl font-bold text-orange-600 mt-2">${pendingAmount.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Collection Rate</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">{((paidAmount / totalRevenue) * 100).toFixed(1)}%</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-6">Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
            <Legend />
            <Bar dataKey="insurance" fill="#3b82f6" name="Insurance" radius={[8, 8, 0, 0]} />
            <Bar dataKey="cash" fill="#10b981" name="Cash Payment" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by patient name or invoice ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Invoice ID
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Patient
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">
                  Date
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground">
                  Amount
                </th>
                <th className="text-left py-3 px-6 font-semibold text-sm text-muted-foreground hidden lg:table-cell">
                  Insurance
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
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{invoice.id}</td>
                  <td className="py-4 px-6 text-sm text-foreground">{invoice.patientName}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden md:table-cell">
                    {new Date(invoice.date).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6 text-sm font-semibold text-foreground">
                    ${invoice.amount.toFixed(2)}
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground hidden lg:table-cell">
                    {invoice.insurance}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[invoice.status]}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredInvoices.length === 0 && (
        <div className="bg-white rounded-2xl p-8 border border-border text-center text-muted-foreground">
          <p>No invoices found matching your search.</p>
        </div>
      )}
    </div>
  )
}
