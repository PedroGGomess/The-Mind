import { KPICard } from '../components/dashboard/kpi-card';
import { AIRecommendationCard } from '../components/dashboard/ai-recommendation-card';
import { ZoneMap } from '../components/dashboard/zone-map';
import { Users, TrendingUp, Clock, MapPin, Wine, DollarSign, Package, Monitor, Brain, Zap, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const chartData = [
  { time: '10:00', footfall: 45, conversion: 12 },
  { time: '11:00', footfall: 68, conversion: 18 },
  { time: '12:00', footfall: 92, conversion: 24 },
  { time: '13:00', footfall: 115, conversion: 31 },
  { time: '14:00', footfall: 98, conversion: 26 },
  { time: '15:00', footfall: 124, conversion: 35 },
  { time: '16:00', footfall: 142, conversion: 41 },
  { time: '17:00', footfall: 156, conversion: 47 },
];

const zones = [
  { id: '1', name: 'Entrance', peopleCount: 12, status: 'normal' as const, x: 5, y: 10, width: 20, height: 35 },
  { id: '2', name: '20/30', peopleCount: 24, status: 'hot' as const, x: 28, y: 10, width: 20, height: 35 },
  { id: '3', name: '50', peopleCount: 8, status: 'normal' as const, x: 51, y: 10, width: 20, height: 35 },
  { id: '4', name: 'Tasting', peopleCount: 15, status: 'hot' as const, x: 74, y: 10, width: 21, height: 35 },
  { id: '5', name: 'Checkout', peopleCount: 6, status: 'normal' as const, x: 28, y: 55, width: 43, height: 35 },
];

const recommendations = [
  {
    title: 'Rotate window display to 30Y Tawny',
    reason: '20/30 zone showing high dwell but low conversion. Window currently highlights 10Y.',
    confidence: 87,
    impact: '+12% conversion',
    explanation: 'Historical data shows 30Y products have 34% higher conversion in this demographic. Current window display misalignment detected by visual recognition AI.',
    actions: [
      { label: 'Create task', variant: 'primary' as const },
      { label: 'View analytics', variant: 'secondary' as const }
    ]
  },
  {
    title: 'Activate guided tasting promotion',
    reason: 'Tasting zone at peak capacity. Average spend per tasting session up 18% this week.',
    confidence: 92,
    impact: '+€240 revenue',
    explanation: 'Pattern recognition indicates optimal time for tasting promotions. Current foot traffic and conversion rates suggest high receptiveness.',
    actions: [
      { label: 'Push to screens', variant: 'primary' as const },
      { label: 'Notify staff', variant: 'secondary' as const }
    ]
  },
  {
    title: 'Restock 30Y Tawny – low inventory',
    reason: 'Only 4 units remaining. Sales velocity: 2.3 units/day.',
    confidence: 95,
    impact: 'Prevent stockout',
    explanation: 'Predictive inventory model forecasts stockout in 1.7 days based on current sales velocity and upcoming weekend traffic projection.',
    actions: [
      { label: 'Create task', variant: 'primary' as const }
    ]
  },
];

export function OverviewPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Mind Status Bar */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-6 text-white">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur">
              <Brain className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">THE 100's Mind</h2>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Status:</span>
                  <span className="font-semibold text-white">Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold">3 Optimizations Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  <span className="font-semibold">2 High Priority Signals</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400 mb-1">Confidence Score</div>
            <div className="text-4xl font-bold">86%</div>
            <div className="text-xs text-emerald-400 mt-1">+3% vs yesterday</div>
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-4 gap-4">
        <KPICard 
          title="Footfall"
          value="847"
          change="+12%"
          trend="up"
          icon={<Users className="w-5 h-5 text-gray-500" />}
        />
        <KPICard 
          title="Conversion"
          value="23%"
          change="+5%"
          trend="up"
          icon={<TrendingUp className="w-5 h-5 text-gray-500" />}
        />
        <KPICard 
          title="Avg Dwell"
          value="15.2m"
          change="+8%"
          trend="up"
          icon={<Clock className="w-5 h-5 text-gray-500" />}
        />
        <KPICard 
          title="Top Zone"
          value="Tasting"
          change="62% conv"
          trend="neutral"
          icon={<MapPin className="w-5 h-5 text-gray-500" />}
        />
        <KPICard 
          title="Revenue"
          value="€42,350"
          change="+15%"
          trend="up"
          icon={<DollarSign className="w-5 h-5 text-gray-500" />}
        />
        <KPICard 
          title="Wine Sessions"
          value="47"
          change="+22%"
          trend="up"
          icon={<Wine className="w-5 h-5 text-gray-500" />}
        />
        <KPICard 
          title="Stock Risk"
          value="3 items"
          change="2 critical"
          trend="down"
          icon={<Package className="w-5 h-5 text-rose-500" />}
        />
        <KPICard 
          title="Content Perf."
          value="92%"
          change="+3%"
          trend="up"
          icon={<Monitor className="w-5 h-5 text-gray-500" />}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left column - Charts */}
        <div className="col-span-2 space-y-6">
          {/* Zone Map */}
          <ZoneMap zones={zones} />

          {/* Trend Chart */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Footfall vs Conversion</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <YAxis 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Legend 
                  wrapperStyle={{ fontSize: '12px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="footfall" 
                  stroke="#1f2937" 
                  strokeWidth={2}
                  dot={{ fill: '#1f2937', r: 3 }}
                  name="Footfall"
                />
                <Line 
                  type="monotone" 
                  dataKey="conversion" 
                  stroke="#d4af37" 
                  strokeWidth={2}
                  dot={{ fill: '#d4af37', r: 3 }}
                  name="Conversions"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right column - AI Recommendations */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-900">AI Recommendations</h3>
            <span className="text-xs text-gray-500">5 active</span>
          </div>
          <div className="space-y-3">
            {recommendations.map((rec, idx) => (
              <AIRecommendationCard key={idx} {...rec} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}