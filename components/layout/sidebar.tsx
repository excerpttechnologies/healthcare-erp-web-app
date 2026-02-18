'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, BarChart3, Users, Calendar, FileText, Pill, DollarSign, Package, Stethoscope, Building2, AlertCircle, Settings, LogOut } from 'lucide-react'

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
  badge?: number
}

const mainNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: <BarChart3 className="w-5 h-5" /> },
  { label: 'Patients', href: '/patients', icon: <Users className="w-5 h-5" /> },
  { label: 'Appointments', href: '/appointments', icon: <Calendar className="w-5 h-5" /> },
  { label: 'EHR', href: '/ehr', icon: <FileText className="w-5 h-5" /> },
  { label: 'Pharmacy', href: '/pharmacy', icon: <Pill className="w-5 h-5" /> },
  { label: 'Billing', href: '/billing', icon: <DollarSign className="w-5 h-5" /> },
]

const adminNavItems: NavItem[] = [
  { label: 'Inventory', href: '/inventory', icon: <Package className="w-5 h-5" /> },
  { label: 'Laboratory', href: '/laboratory', icon: <Stethoscope className="w-5 h-5" /> },
  { label: 'Beds & Wards', href: '/beds', icon: <Building2 className="w-5 h-5" /> },
  { label: 'Emergency', href: '/emergency', icon: <AlertCircle className="w-5 h-5" /> },
  { label: 'HR & Staff', href: '/hr', icon: <Users className="w-5 h-5" /> },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-border rounded-lg shadow-sm"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-white border-r border-border transition-all duration-300 z-40 ${
          isOpen ? 'w-64' : 'w-0 md:w-64'
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">HC</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-foreground">HealthCare</h1>
                <p className="text-xs text-muted-foreground">ERP System</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            {/* Main Navigation */}
            <nav className="p-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Main
              </p>
              <div className="space-y-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Admin Section */}
            <nav className="p-4 border-t border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Administration
              </p>
              <div className="space-y-2">
                {adminNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Footer Navigation */}
          <div className="p-4 border-t border-border space-y-2">
            <Link
              href="/settings"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive('/settings')
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span className="text-sm font-medium">Settings</span>
            </Link>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
