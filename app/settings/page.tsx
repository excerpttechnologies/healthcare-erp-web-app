'use client'

import { useState } from 'react'
import { Save, Bell, Lock, Users, Globe } from 'lucide-react'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    hospitalName: 'Healthcare Hospital',
    email: 'admin@healthcare.com',
    phone: '+1-555-0000',
    address: '123 Medical Lane, Health City',
    notifications: true,
    darkMode: false,
    twoFactor: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, checked, value } = e.target as any
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage system settings and preferences.</p>
      </div>

      {/* Hospital Information */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-foreground">Hospital Information</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Hospital Name</label>
            <input
              type="text"
              name="hospitalName"
              value={settings.hospitalName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
            />
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-5 h-5 text-orange-600" />
          <h2 className="text-lg font-semibold text-foreground">Notification Settings</h2>
        </div>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className="w-4 h-4 rounded border-border accent-primary"
            />
            <span className="text-sm text-foreground">Enable email notifications for important events</span>
          </label>
          <p className="text-xs text-muted-foreground ml-7">You will receive alerts for critical cases, lab results, and appointments.</p>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-5 h-5 text-red-600" />
          <h2 className="text-lg font-semibold text-foreground">Security Settings</h2>
        </div>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="twoFactor"
              checked={settings.twoFactor}
              onChange={handleChange}
              className="w-4 h-4 rounded border-border accent-primary"
            />
            <span className="text-sm text-foreground">Enable two-factor authentication</span>
          </label>
          <p className="text-xs text-muted-foreground ml-7">Add an extra layer of security to your admin account.</p>
          <button className="mt-4 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
            Change Password
          </button>
        </div>
      </div>

      {/* Display Settings */}
      <div className="bg-white rounded-2xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-5 h-5 text-purple-600" />
          <h2 className="text-lg font-semibold text-foreground">Display Settings</h2>
        </div>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
              className="w-4 h-4 rounded border-border accent-primary"
            />
            <span className="text-sm text-foreground">Dark mode (Coming soon)</span>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-blue-700 transition-colors">
          <Save className="w-4 h-4" />
          Save Settings
        </button>
      </div>
    </div>
  )
}
