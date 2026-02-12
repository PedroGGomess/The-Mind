import { Wine, Users, CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const packageData = [
  { name: "Rookie's", sessions: 12, revenue: 480 },
  { name: "Fifty's", sessions: 8, revenue: 640 },
  { name: 'Mix', sessions: 15, revenue: 750 },
];

const sessionsTimeline = [
  { time: '14:00', count: 1 },
  { time: '14:15', count: 2 },
  { time: '14:30', count: 2 },
  { time: '14:45', count: 3 },
  { time: '15:00', count: 3 },
  { time: '15:15', count: 2 },
  { time: '15:30', count: 2 },
  { time: '15:45', count: 3 },
];

const topWines = [
  { name: '30Y Tawny', tastings: 24, conversions: 18 },
  { name: '20Y Tawny', tastings: 32, conversions: 20 },
  { name: 'Vintage 2011', tastings: 16, conversions: 12 },
  { name: 'LBV 2018', tastings: 28, conversions: 16 },
  { name: 'Ruby Reserve', tastings: 20, conversions: 10 },
];

export function WineTastingPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-light text-gray-900">Wine Tasting Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">Monitor tasting sessions, packages, and machine status</p>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Wine className="w-5 h-5 text-gray-600" />
            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
              Active
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-1">Active Sessions</p>
          <p className="text-3xl font-light text-gray-900">3</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Users className="w-5 h-5 text-gray-600" />
          </div>
          <p className="text-sm text-gray-500 mb-1">Sessions Today</p>
          <p className="text-3xl font-light text-gray-900">35</p>
          <p className="text-xs text-green-600 mt-1">+12% vs yesterday</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="w-5 h-5 text-gray-600" />
          </div>
          <p className="text-sm text-gray-500 mb-1">Avg Spend/Session</p>
          <p className="text-3xl font-light text-gray-900">€52</p>
          <p className="text-xs text-green-600 mt-1">+€8 vs last week</p>
        </div>

        <div className="bg-green-50 rounded-xl p-5 border border-green-100">
          <div className="flex items-center justify-between mb-3">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-xs px-2 py-1 rounded-full bg-green-200 text-green-800 font-medium">
              OK
            </span>
          </div>
          <p className="text-sm text-green-700 mb-1">Machine Status</p>
          <p className="text-2xl font-light text-green-900">All Systems</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Sessions Timeline */}
        <div className="col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Sessions Timeline (Last 60 min)</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={sessionsTimeline}>
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
              <Bar dataKey="count" fill="#1f2937" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Popular Packages */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Popular Packages</h3>
          <div className="space-y-3">
            {packageData.map((pkg) => (
              <div key={pkg.name} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{pkg.name}</span>
                  <Wine className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{pkg.sessions} sessions</span>
                  <span className="font-medium">€{pkg.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Machine Status & Preferences */}
      <div className="grid grid-cols-2 gap-6">
        {/* Machine Status Details */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Machine Status Details</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Dispenser 1</p>
                  <p className="text-xs text-gray-500">Pressure: Normal</p>
                </div>
              </div>
              <span className="text-xs text-green-700 font-medium">OK</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Dispenser 2</p>
                  <p className="text-xs text-gray-500">Pressure: Normal</p>
                </div>
              </div>
              <span className="text-xs text-green-700 font-medium">OK</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-100">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Dispenser 3</p>
                  <p className="text-xs text-gray-500">Pressure: Slightly Low</p>
                </div>
              </div>
              <span className="text-xs text-amber-700 font-medium">Check Soon</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Dispenser 4</p>
                  <p className="text-xs text-gray-500">Pressure: Normal</p>
                </div>
              </div>
              <span className="text-xs text-green-700 font-medium">OK</span>
            </div>
          </div>
        </div>

        {/* Preferences Insights */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Top Wines & Conversion</h3>
          <div className="space-y-2">
            {topWines.map((wine, idx) => (
              <div key={wine.name} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500">#{idx + 1}</span>
                    <span className="text-sm font-medium text-gray-900">{wine.name}</span>
                  </div>
                  <span className="text-xs text-gray-600">{wine.tastings} tastings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full" 
                      style={{ width: `${(wine.conversions / wine.tastings) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    {Math.round((wine.conversions / wine.tastings) * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-700">
              <span className="font-medium">Insight:</span> 30Y Tawny has highest conversion at 75%. 
              Consider featuring in next promotion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
