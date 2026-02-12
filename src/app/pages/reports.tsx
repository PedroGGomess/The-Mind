import { FileText, Download, Calendar, TrendingUp } from 'lucide-react';

const reports = [
  {
    id: 1,
    name: 'Daily Performance Report',
    description: 'Footfall, conversion, revenue, and zone metrics',
    lastGenerated: 'Today, 9:00 AM',
    frequency: 'Daily',
    format: 'PDF'
  },
  {
    id: 2,
    name: 'Weekly Analytics Summary',
    description: 'Week-over-week trends, top products, and insights',
    lastGenerated: 'Monday, 8:00 AM',
    frequency: 'Weekly',
    format: 'PDF + Excel'
  },
  {
    id: 3,
    name: 'Wine Tasting Performance',
    description: 'Session data, package popularity, conversion metrics',
    lastGenerated: 'Today, 9:00 AM',
    frequency: 'Daily',
    format: 'Excel'
  },
  {
    id: 4,
    name: 'Inventory Status Report',
    description: 'Stock levels, velocity, reorder recommendations',
    lastGenerated: 'Today, 8:00 AM',
    frequency: 'Daily',
    format: 'Excel'
  },
  {
    id: 5,
    name: 'Visual Merchandising Insights',
    description: 'Zone heatmaps, layout performance, recommendations',
    lastGenerated: 'Yesterday, 6:00 PM',
    frequency: 'Weekly',
    format: 'PDF'
  },
  {
    id: 6,
    name: 'WhatsApp Concierge Analytics',
    description: 'Engagement funnel, template performance, conversions',
    lastGenerated: 'Today, 9:00 AM',
    frequency: 'Daily',
    format: 'Excel'
  }
];

const quickStats = [
  { label: 'Reports Generated', value: '342', trend: '+12%' },
  { label: 'Avg Download Time', value: '1.2s', trend: '-8%' },
  { label: 'Active Schedules', value: '6', trend: '—' },
  { label: 'Storage Used', value: '2.4 GB', trend: '+5%' }
];

export function ReportsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-light text-gray-900">Reports & Analytics</h2>
          <p className="text-sm text-gray-500 mt-1">Scheduled reports and data exports</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Schedule
          </button>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            Generate custom report
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4">
        {quickStats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-light text-gray-900">{stat.value}</p>
              <span className={`text-xs ${
                stat.trend.startsWith('+') ? 'text-green-600' :
                stat.trend.startsWith('-') ? 'text-red-600' :
                'text-gray-500'
              }`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Reports List */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Available Reports</h3>
        <div className="space-y-3">
          {reports.map((report) => (
            <div key={report.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-gray-600" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{report.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">{report.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{report.frequency}</span>
                    </div>
                    <div>
                      <span>Format: {report.format}</span>
                    </div>
                    <div>
                      <span>Last: {report.lastGenerated}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insight */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Report Automation Tip</h4>
            <p className="text-sm text-gray-700">
              All reports are automatically generated and can be scheduled for email delivery. 
              Custom reports can combine data from multiple sources and include AI-generated insights 
              and recommendations tailored to your store's performance patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
