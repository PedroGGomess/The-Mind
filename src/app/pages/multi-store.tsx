import { Store, TrendingUp, TrendingDown, Activity, BarChart3 } from 'lucide-react';

export function MultiStorePage() {
  const stores = [
    {
      id: 1,
      name: 'Porto Flagship',
      location: 'Porto, Portugal',
      status: 'active',
      revenue: '€42,350',
      revenueChange: 12,
      visitors: 847,
      visitorsChange: 8,
      conversion: 23,
      conversionChange: 5,
      mindScore: 86,
    },
    {
      id: 2,
      name: 'Lisbon Downtown',
      location: 'Lisbon, Portugal',
      status: 'active',
      revenue: '€38,920',
      revenueChange: -3,
      visitors: 923,
      visitorsChange: 15,
      conversion: 19,
      conversionChange: -2,
      mindScore: 78,
    },
    {
      id: 3,
      name: 'Algarve Resort',
      location: 'Faro, Portugal',
      status: 'active',
      revenue: '€51,200',
      revenueChange: 22,
      visitors: 1124,
      visitorsChange: 28,
      conversion: 28,
      conversionChange: 8,
      mindScore: 91,
    },
    {
      id: 4,
      name: 'Madrid Boutique',
      location: 'Madrid, Spain',
      status: 'setup',
      revenue: '—',
      revenueChange: 0,
      visitors: 0,
      visitorsChange: 0,
      conversion: 0,
      conversionChange: 0,
      mindScore: 0,
    },
  ];

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-emerald-600" />;
    if (change < 0) return <TrendingDown className="w-4 h-4 text-rose-600" />;
    return null;
  };

  const getTrendColor = (change: number) => {
    if (change > 0) return 'text-emerald-600';
    if (change < 0) return 'text-rose-600';
    return 'text-gray-500';
  };

  const getStatusBadge = (status: string) => {
    if (status === 'active') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    return 'bg-amber-50 text-amber-700 border-amber-200';
  };

  const getMindScoreColor = (score: number) => {
    if (score >= 85) return 'text-emerald-600';
    if (score >= 70) return 'text-amber-600';
    return 'text-rose-600';
  };

  const activeStores = stores.filter(s => s.status === 'active').length;
  const totalRevenue = stores.filter(s => s.status === 'active').reduce((sum, s) => {
    return sum + parseFloat(s.revenue.replace('€', '').replace(',', ''));
  }, 0);
  const avgConversion = Math.round(
    stores.filter(s => s.status === 'active').reduce((sum, s) => sum + s.conversion, 0) / activeStores
  );

  return (
    <div className="h-full p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Multi-Store Intelligence</h1>
          <p className="text-sm text-gray-500 mt-1">Centralized control and analytics across all locations</p>
        </div>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
          <Store className="w-4 h-4" />
          Add New Store
        </button>
      </div>

      {/* Network Overview */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-gray-500">Active Stores</div>
            <Store className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-semibold text-gray-900">{activeStores}</div>
          <div className="text-xs text-gray-500 mt-1">of {stores.length} total</div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-gray-500">Network Revenue</div>
            <TrendingUp className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="text-2xl font-semibold text-gray-900">€{(totalRevenue / 1000).toFixed(1)}k</div>
          <div className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +12% vs last week
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-gray-500">Avg. Conversion</div>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-semibold text-gray-900">{avgConversion}%</div>
          <div className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +4% vs last week
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-gray-500">Network Mind Score</div>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="text-2xl font-semibold text-gray-900">85</div>
          <div className="text-xs text-gray-500 mt-1">Excellent performance</div>
        </div>
      </div>

      {/* Store Performance Table */}
      <div className="bg-white rounded-2xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-900">Store Performance</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Store
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Visitors
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mind Score
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {stores.map((store) => (
                <tr key={store.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{store.name}</div>
                      <div className="text-xs text-gray-500">{store.location}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusBadge(store.status)}`}>
                      {store.status === 'active' ? 'Active' : 'Setup'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{store.revenue}</div>
                    {store.revenueChange !== 0 && (
                      <div className={`text-xs flex items-center gap-1 ${getTrendColor(store.revenueChange)}`}>
                        {getTrendIcon(store.revenueChange)}
                        {Math.abs(store.revenueChange)}%
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{store.visitors || '—'}</div>
                    {store.visitorsChange !== 0 && (
                      <div className={`text-xs flex items-center gap-1 ${getTrendColor(store.visitorsChange)}`}>
                        {getTrendIcon(store.visitorsChange)}
                        {Math.abs(store.visitorsChange)}%
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{store.conversion ? `${store.conversion}%` : '—'}</div>
                    {store.conversionChange !== 0 && (
                      <div className={`text-xs flex items-center gap-1 ${getTrendColor(store.conversionChange)}`}>
                        {getTrendIcon(store.conversionChange)}
                        {Math.abs(store.conversionChange)}%
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {store.mindScore > 0 ? (
                      <div className={`font-semibold ${getMindScoreColor(store.mindScore)}`}>
                        {store.mindScore}
                      </div>
                    ) : (
                      <div className="text-gray-400">—</div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-medium transition-colors">
                      {store.status === 'active' ? 'View Dashboard' : 'Configure'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Comparison */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Revenue Comparison — Last 7 Days</h2>
          <div className="space-y-3">
            {stores.filter(s => s.status === 'active').map((store) => (
              <div key={store.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700">{store.name}</span>
                  <span className="text-sm font-semibold text-gray-900">{store.revenue}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-gray-900 to-gray-600 h-2 rounded-full"
                    style={{ width: `${(parseFloat(store.revenue.replace('€', '').replace(',', '')) / 51200) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Conversion Rate Comparison</h2>
          <div className="space-y-3">
            {stores.filter(s => s.status === 'active').map((store) => (
              <div key={store.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700">{store.name}</span>
                  <span className="text-sm font-semibold text-gray-900">{store.conversion}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full"
                    style={{ width: `${(store.conversion / 28) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
