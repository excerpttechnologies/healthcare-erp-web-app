'use client'

import { Bell, Search, User, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function TopNavbar() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 bg-white border-b border-border h-16 flex items-center px-6 z-40 transition-all duration-300">
      <div className="flex-1 flex items-center gap-4">
        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md items-center gap-2 px-4 py-2 bg-muted rounded-lg">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search patients, appointments..."
            className="bg-transparent outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {showNotifications && (
            <div className="absolute top-12 right-0 w-80 bg-white rounded-lg shadow-lg border border-border z-50">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold text-foreground">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {[
                  { id: 1, message: 'New appointment request from John Doe', time: '5 min ago' },
                  { id: 2, message: 'Lab results ready for patient #234', time: '15 min ago' },
                  { id: 3, message: 'Bed #5 (ICU) is now available', time: '1 hour ago' },
                ].map((notif) => (
                  <div key={notif.id} className="p-4 border-b border-border hover:bg-muted cursor-pointer transition-colors">
                    <p className="text-sm text-foreground">{notif.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative border-l border-border pl-4">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-3 px-3 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-foreground">Dr. Admin</p>
              <p className="text-xs text-muted-foreground">Administrator</p>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </button>

          {showUserMenu && (
            <div className="absolute top-12 right-0 w-48 bg-white rounded-lg shadow-lg border border-border z-50">
              <div className="p-4 border-b border-border">
                <p className="text-sm font-medium text-foreground">Dr. Admin</p>
                <p className="text-xs text-muted-foreground">admin@healthcare.com</p>
              </div>
              <div className="p-2 space-y-1">
                <button className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-muted rounded transition-colors">
                  Profile Settings
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-muted rounded transition-colors">
                  Change Password
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-muted rounded transition-colors border-t border-border">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
