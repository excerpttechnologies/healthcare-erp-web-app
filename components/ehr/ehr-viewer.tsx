'use client'

import { useState } from 'react'
import { FileText, Download, Plus, Calendar, User, AlertCircle, CheckCircle } from 'lucide-react'

interface EHRDocument {
  id: string
  type: 'Diagnosis' | 'Prescription' | 'Lab Result' | 'Radiology' | 'Note'
  title: string
  date: string
  doctor: string
  content: string
}

const ehrDocuments: EHRDocument[] = [
  {
    id: '1',
    type: 'Diagnosis',
    title: 'Hypertension Diagnosis',
    date: '2024-02-14',
    doctor: 'Dr. Smith',
    content: 'Patient presents with elevated blood pressure readings over the past week. BP readings consistently between 140-150 mmHg systolic. No acute symptoms. Prescribed Lisinopril 10mg daily and recommended lifestyle modifications.'
  },
  {
    id: '2',
    type: 'Prescription',
    title: 'Medication Prescription',
    date: '2024-02-14',
    doctor: 'Dr. Smith',
    content: 'Rx: Lisinopril 10mg tablet\nQuantity: 30 tablets\nFrequency: Once daily\nDuration: 30 days\nRefills: 3\n\nRx: Metformin 500mg tablet\nQuantity: 60 tablets\nFrequency: Twice daily with meals\nDuration: 30 days\nRefills: 3'
  },
  {
    id: '3',
    type: 'Lab Result',
    title: 'Blood Test Results',
    date: '2024-02-10',
    doctor: 'Lab Department',
    content: 'Complete Blood Count (CBC):\n- WBC: 7.2 K/uL (Normal)\n- RBC: 4.8 M/uL (Normal)\n- Hemoglobin: 14.2 g/dL (Normal)\n- Hematocrit: 42% (Normal)\n- Platelets: 250 K/uL (Normal)\n\nMetabolic Panel:\n- Glucose: 126 mg/dL (Elevated - Fasting)\n- Creatinine: 0.9 mg/dL (Normal)\n- BUN: 18 mg/dL (Normal)\n- Sodium: 138 mEq/L (Normal)\n- Potassium: 4.1 mEq/L (Normal)'
  },
  {
    id: '4',
    type: 'Radiology',
    title: 'Chest X-Ray Report',
    date: '2024-02-08',
    doctor: 'Dr. Johnson (Radiologist)',
    content: 'FINDINGS:\nThe chest demonstrates normal heart size with no evidence of cardiomegaly. The lungs are clear bilaterally without focal consolidation, pleural effusion, or pneumothorax. The mediastinum is normal. No acute cardiopulmonary abnormality is identified.\n\nIMPRESSION:\nNo acute cardiopulmonary process.'
  },
  {
    id: '5',
    type: 'Note',
    title: 'SOAP Note - Follow-up Visit',
    date: '2024-02-12',
    doctor: 'Dr. Williams',
    content: 'SUBJECTIVE:\nPatient reports feeling better on current medication regimen. Blood pressure at home has been around 130-135 mmHg. No chest pain or shortness of breath. Compliance with medications good.\n\nOBJECTIVE:\nVitals: BP 132/85 mmHg, HR 72 bpm, RR 16, Temp 98.6F\nPhysical Exam: Patient in no acute distress. Lungs clear to auscultation. Regular rate and rhythm.\n\nASSESSMENT:\nHypertension - controlled on current therapy\nType 2 Diabetes - stable\n\nPLAN:\nContinue current medications\nRecheck BP in 2 weeks\nFollow-up in 4 weeks'
  }
]

const typeColors = {
  'Diagnosis': 'bg-red-50 text-red-700 border-red-200',
  'Prescription': 'bg-blue-50 text-blue-700 border-blue-200',
  'Lab Result': 'bg-green-50 text-green-700 border-green-200',
  'Radiology': 'bg-purple-50 text-purple-700 border-purple-200',
  'Note': 'bg-orange-50 text-orange-700 border-orange-200',
}

export function EHRViewer() {
  const [selectedDoc, setSelectedDoc] = useState<EHRDocument | null>(ehrDocuments[0])
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDocuments = ehrDocuments.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Electronic Health Records</h1>
        <p className="text-muted-foreground mt-2">View and manage patient medical records and documents.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Document List */}
        <div className="lg:col-span-1 bg-white rounded-2xl border border-border overflow-hidden flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Medical Records</h2>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Plus className="w-5 h-5 text-primary" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Search records..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
            />
          </div>

          {/* Document List */}
          <div className="flex-1 overflow-y-auto">
            {filteredDocuments.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setSelectedDoc(doc)}
                className={`w-full text-left p-4 border-b border-border hover:bg-muted transition-colors ${
                  selectedDoc?.id === doc.id ? 'bg-muted' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{doc.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{new Date(doc.date).toLocaleDateString()}</p>
                    <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium border ${typeColors[doc.type]}`}>
                      {doc.type}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="p-4 text-center text-muted-foreground">
              <p className="text-sm">No records found</p>
            </div>
          )}
        </div>

        {/* Document Viewer */}
        <div className="lg:col-span-2">
          {selectedDoc ? (
            <div className="bg-white rounded-2xl border border-border p-6 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-foreground">{selectedDoc.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${typeColors[selectedDoc.type]}`}>
                      {selectedDoc.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(selectedDoc.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {selectedDoc.doctor}
                    </div>
                  </div>
                </div>
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="bg-muted rounded-lg p-6">
                <div className="prose prose-sm max-w-none">
                  {selectedDoc.content.split('\n').map((line, idx) => (
                    <p key={idx} className="text-foreground mb-2 whitespace-pre-wrap font-mono text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Print
                </button>
                <button className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors">
                  Share with Patient
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-border p-12 text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">Select a document to view</p>
            </div>
          )}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-blue-900">Active Conditions</p>
              <p className="text-sm text-blue-800 mt-1">Hypertension, Type 2 Diabetes</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-green-900">Last Update</p>
              <p className="text-sm text-green-800 mt-1">{new Date().toLocaleDateString()} - All records current</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
