'use client'

import { useState } from 'react'
import { AlertTriangle, Plus, Clock, Users } from 'lucide-react'

const emergencyCases = [
  { id: 'EMG001', patient: 'Accident Victim 1', severity: 'Critical', time: '5 min ago', room: 'ER-01' },
  { id: 'EMG002', patient: 'Chest Pain', severity: 'High', time: '12 min ago', room: 'ER-02' },
  { id: 'EMG003', patient: 'Trauma Case', severity: 'Critical', time: '18 min ago', room: 'ER-03' },
  { id: 'EMG004', patient: 'Allergic Reaction', severity: 'Medium', time: '25 min ago', room: 'ER-04' },
]

export default function EmergencyPage() {
  const [cases] = useState(emergencyCases)
  const criticalCount = cases.filter(c => c.severity === 'Critical').length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Emergency</h1>
          <p className="text-muted-foreground mt-2">Manage emergency cases and triage.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
          <Plus className="w-4 h-4" />
          New Case
        </button>
      </div>

      {criticalCount > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-700">{criticalCount} Critical Cases Active</p>
            <p className="text-sm text-red-600">Immediate medical attention required</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Total Cases</p>
          <p className="text-2xl font-bold text-foreground mt-2">{cases.length}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Critical</p>
          <p className="text-2xl font-bold text-red-600 mt-2">{criticalCount}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-border">
          <p className="text-sm text-muted-foreground">Avg Wait Time</p>
          <p className="text-2xl font-bold text-orange-600 mt-2">12 min</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Active Cases</h2>
        </div>
        <div className="divide-y divide-border">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="p-4 hover:bg-muted transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{caseItem.patient}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {caseItem.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {caseItem.room}
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  caseItem.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                  caseItem.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {caseItem.severity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
