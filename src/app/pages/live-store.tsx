import { Clock, TrendingUp, AlertCircle, Activity } from 'lucide-react';

export function LiveStorePage() {
  const zones = [
    { id: 'entrance', name: 'Entrance', people: 20, capacity: 30, dwell: 2.5, conversion: 85, x: 10, y: 10, width: 180, height: 100 },
    { id: '20y', name: '20Y Zone', people: 8, capacity: 15, dwell: 12.3, conversion: 45, x: 10, y: 130, width: 180, height: 120 },
    { id: '30y', name: '30Y Zone', people: 12, capacity: 15, dwell: 18.7, conversion: 62, x: 210, y: 10, width: 180, height: 120 },
    { id: 'tasting', name: 'Tasting Zone', people: 5, capacity: 8, dwell: 25.4, conversion: 78, x: 410, y: 10, width: 180, height: 120 },
    { id: 'checkout', name: 'Checkout', people: 3, capacity: 6, dwell: 4.2, conversion: 95, x: 210, y: 150, width: 180, height: 100 },
  ];

  const liveSignals = [
    { id: 1, type: 'high', message: 'High dwell detected in 30Y zone', time: '2 min ago', zone: '30Y Zone' },
    { id: 2, type: 'info', message: 'Tasting machine session active', time: '5 min ago', zone: 'Tasting' },
    { id: 3, type: 'warning', message: 'Queue forming at checkout', time: '8 min ago', zone: 'Checkout' },
    { id: 4, type: 'info', message: 'Visitor entered 20Y zone', time: '10 min ago', zone: '20Y Zone' },
  ];

  const getHeatColor = (people: number, capacity: number) => {
    const ratio = people / capacity;
    if (ratio > 0.8) return 'bg-rose-100 border-rose-300';
    if (ratio > 0.5) return 'bg-amber-100 border-amber-300';
    return 'bg-emerald-100 border-emerald-300';
  };

  return (
    <div className="h-full p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Live Store — Real-Time Control Room</h1>
          <p className="text-sm text-gray-500 mt-1">Monitor customer flow and zone activity in real time</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200">
          <Activity className="w-4 h-4 text-emerald-500" />
          <span className="text-sm font-medium text-gray-700">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Store Map */}
        <div className="col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-6">Store Layout — Live Occupancy</h2>
          
          <div className="relative bg-gray-50 rounded-xl p-8" style={{ height: '500px' }}>
            {zones.map((zone) => (
              <div
                key={zone.id}
                className={`absolute rounded-xl border-2 transition-all ${getHeatColor(zone.people, zone.capacity)} p-4 cursor-pointer hover:shadow-lg`}
                style={{ 
                  left: `${zone.x}px`, 
                  top: `${zone.y}px`, 
                  width: `${zone.width}px`, 
                  height: `${zone.height}px` 
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{zone.name}</h3>
                    <div className="text-xs text-gray-600">{zone.people}/{zone.capacity} visitors</div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <Clock className="w-3 h-3" />
                      <span>{zone.dwell}m avg dwell</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <TrendingUp className="w-3 h-3" />
                      <span>{zone.conversion}% conversion</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-6 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-emerald-100 border-2 border-emerald-300 rounded"></div>
              <span>Low Occupancy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-amber-100 border-2 border-amber-300 rounded"></div>
              <span>Medium Occupancy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-rose-100 border-2 border-rose-300 rounded"></div>
              <span>High Occupancy</span>
            </div>
          </div>
        </div>

        {/* Live Signals */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">Live Signals</h2>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="space-y-3">
              {liveSignals.map((signal) => (
                <div key={signal.id} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-start gap-2">
                    <AlertCircle className={`w-4 h-4 mt-0.5 ${
                      signal.type === 'high' ? 'text-rose-500' :
                      signal.type === 'warning' ? 'text-amber-500' :
                      'text-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">{signal.message}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">{signal.zone}</span>
                        <span className="text-xs text-gray-400">{signal.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Metrics */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Current Metrics</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Total Visitors</span>
                  <span className="text-lg font-semibold text-gray-900">48</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-gray-900 h-1.5 rounded-full" style={{ width: '64%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Avg Dwell Time</span>
                  <span className="text-lg font-semibold text-gray-900">15.2m</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '76%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Conversion Rate</span>
                  <span className="text-lg font-semibold text-gray-900">67%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
