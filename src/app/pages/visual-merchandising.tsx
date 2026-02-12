import { ZoneMap } from '../components/dashboard/zone-map';
import { Lightbulb, TrendingUp, BarChart3 } from 'lucide-react';

const zones = [
  { id: '1', name: 'Entrance', peopleCount: 12, status: 'normal' as const, x: 5, y: 10, width: 20, height: 35 },
  { id: '2', name: '20/30', peopleCount: 24, status: 'hot' as const, x: 28, y: 10, width: 20, height: 35 },
  { id: '3', name: '50', peopleCount: 8, status: 'cold' as const, x: 51, y: 10, width: 20, height: 35 },
  { id: '4', name: 'Tasting', peopleCount: 15, status: 'hot' as const, x: 74, y: 10, width: 21, height: 35 },
  { id: '5', name: 'Checkout', peopleCount: 6, status: 'normal' as const, x: 28, y: 55, width: 43, height: 35 },
];

const zoneMetrics = [
  { zone: 'Entrance', dwellTime: '2m 12s', conversion: '8%', traffic: 156 },
  { zone: '20/30', dwellTime: '4m 38s', conversion: '34%', traffic: 142 },
  { zone: '50', dwellTime: '1m 45s', conversion: '12%', traffic: 68 },
  { zone: 'Tasting', dwellTime: '18m 24s', conversion: '62%', traffic: 89 },
  { zone: 'Checkout', dwellTime: '3m 10s', conversion: '95%', traffic: 124 },
];

const recommendations = [
  {
    id: 1,
    title: 'Move 50 Years highlight to center shelf',
    reason: 'Current placement receives only 24% visibility. Center shelf shows 3x better engagement.',
    impact: '+42% visibility, +15% estimated conversion',
    zone: '50 Years'
  },
  {
    id: 2,
    title: 'Rotate window display to 30Y Tawny',
    reason: 'Current 10Y display engagement down 23% vs last week. 30Y showing strong in-store interest.',
    impact: '+18% window engagement, +12% zone conversion',
    zone: 'Entrance'
  },
  {
    id: 3,
    title: 'Update screen content near 20/30 zone',
    reason: 'High dwell time (4m 38s) but screen interaction low. Content may be outdated.',
    impact: '+25% screen engagement, +8% zone dwell',
    zone: '20/30'
  },
  {
    id: 4,
    title: 'Add secondary product highlight at Tasting',
    reason: 'Visitors completing tastings show interest but limited product visibility nearby.',
    impact: '+22% post-tasting conversions',
    zone: 'Tasting'
  }
];

export function VisualMerchandisingPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-light text-gray-900">Visual Merchandising</h2>
          <p className="text-sm text-gray-500 mt-1">Layout optimization and zone performance</p>
        </div>
      </div>

      {/* Zone Heatmap & Metrics */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <ZoneMap zones={zones} />
        </div>

        {/* Quick Stats */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Zone Performance</h3>
          {zoneMetrics.map((metric) => (
            <div key={metric.zone} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-900">{metric.zone}</span>
                <BarChart3 className="w-4 h-4 text-gray-400" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-gray-500">Dwell</p>
                  <p className="font-medium text-gray-900">{metric.dwellTime}</p>
                </div>
                <div>
                  <p className="text-gray-500">Conv.</p>
                  <p className="font-medium text-gray-900">{metric.conversion}</p>
                </div>
                <div>
                  <p className="text-gray-500">Traffic</p>
                  <p className="font-medium text-gray-900">{metric.traffic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layout Recommendations */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-900">Layout Recommendations</h3>
          <span className="text-xs text-gray-500">{recommendations.length} active</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">{rec.title}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {rec.zone}
                  </span>
                </div>
              </div>

              <div className="mb-4 space-y-2">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Explainability</p>
                  <p className="text-xs text-gray-700">{rec.reason}</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                    <p className="text-xs font-medium text-green-700">{rec.impact}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-100 transition-colors">
                  Simulate impact
                </button>
                <button className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors">
                  Create task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights Panel */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900 mb-2">AI Insight</h4>
            <p className="text-sm text-gray-700 mb-3">
              The 50 Years zone is underperforming with only 68 visitors today (52% below average). 
              Heat map analysis suggests current placement and lighting are contributing factors. 
              Implementing the recommended changes could increase zone traffic by an estimated 45% and 
              improve overall store conversion by 3-5%.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors">
              View detailed analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
