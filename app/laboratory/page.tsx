import { LabTests } from '@/components/laboratory/lab-tests'
import { Beaker, Clock } from 'lucide-react'

export default function LaboratoryPage() {
  return (
    <div className="space-y-6">
      {/* Healthcare Context Header */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Laboratory Testing</h1>
            <p className="text-lg text-gray-600 mt-2">Manage lab test orders, track sample processing, and review results. Fast turnaround times and accurate results enable quick diagnosis and treatment planning.</p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                <Beaker className="w-4 h-4" />
                Tests Today: 156
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
                Avg Processing: 2.5 hrs
              </span>
            </div>
          </div>
          <img 
            src="/images/lab-testing.jpg" 
            alt="Laboratory testing"
            className="w-32 h-32 rounded-xl object-cover shadow-lg hidden lg:block"
          />
        </div>
      </div>

      {/* Lab Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Samples Received</p>
          <p className="text-2xl font-bold mt-2">342</p>
          <p className="text-xs text-gray-500 mt-2">This week</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Results Pending</p>
          <p className="text-2xl font-bold text-orange-600 mt-2">48</p>
          <p className="text-xs text-gray-500 mt-2">In analysis</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Completed Tests</p>
          <p className="text-2xl font-bold text-green-600 mt-2">294</p>
          <p className="text-xs text-gray-500 mt-2">Results available</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600">Accuracy Rate</p>
          <p className="text-2xl font-bold mt-2">99.8%</p>
          <p className="text-xs text-gray-500 mt-2">Quality assured</p>
        </div>
      </div>

      <LabTests />
    </div>
  )
}
