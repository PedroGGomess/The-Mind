import { ZoneMap } from '../components/dashboard/zone-map';
import { Users, AlertTriangle, CheckCircle2 } from 'lucide-react';

const zones = [
  { id: '1', name: 'Entrance', peopleCount: 12, status: 'normal' as const, x: 5, y: 10, width: 20, height: 35 },
  { id: '2', name: '20/30', peopleCount: 24, status: 'hot' as const, x: 28, y: 10, width: 20, height: 35 },
  { id: '3', name: '50', peopleCount: 8, status: 'normal' as const, x: 51, y: 10, width: 20, height: 35 },
  { id: '4', name: 'Tasting', peopleCount: 15, status: 'hot' as const, x: 74, y: 10, width: 21, height: 35 },
  { id: '5', name: 'Checkout', peopleCount: 6, status: 'normal' as const, x: 28, y: 55, width: 43, height: 35 },
];

const actionItems = [
  {
    id: 1,
    action: 'Offer guided tasting to group in Tasting zone',
    zone: 'Tasting',
    priority: 'high',
    status: 'pending'
  },
  {
    id: 2,
    action: 'Engage visitors in 20/30 zone – highlight new arrivals',
    zone: '20/30',
    priority: 'high',
    status: 'pending'
  },
  {
    id: 3,
    action: 'Replenish tasting samples',
    zone: 'Tasting',
    priority: 'medium',
    status: 'pending'
  },
  {
    id: 4,
    action: 'Check window display lighting',
    zone: 'Entrance',
    priority: 'low',
    status: 'completed'
  },
  {
    id: 5,
    action: 'Assist customer at 50 years shelf',
    zone: '50',
    priority: 'medium',
    status: 'pending'
  }
];

export function ZonesPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-light text-gray-900">Live Store Zones</h2>
          <p className="text-sm text-gray-500 mt-1">Real-time visitor distribution and zone activity</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700">65 visitors in-store</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Zone Map */}
        <div className="col-span-2">
          <ZoneMap zones={zones} />

          {/* Queue Alert */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-sm font-medium text-amber-900 mb-1">Checkout congestion detected</h4>
                <p className="text-sm text-amber-700 mb-3">
                  6 visitors in checkout zone. Consider opening second register or offering mobile checkout.
                </p>
                <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors">
                  Notify available staff
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* What to do now */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">What to do now</h3>
            <p className="text-xs text-gray-500">Priority actions based on current activity</p>
          </div>

          <div className="space-y-2">
            {actionItems.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-xl p-4 border transition-all ${
                  item.status === 'completed'
                    ? 'border-green-200 bg-green-50/50'
                    : item.priority === 'high'
                    ? 'border-amber-200 bg-amber-50/30'
                    : 'border-gray-100'
                }`}
              >
                <div className="flex items-start gap-3">
                  {item.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5"></div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm mb-2 ${
                      item.status === 'completed' 
                        ? 'text-gray-500 line-through' 
                        : 'text-gray-900'
                    }`}>
                      {item.action}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {item.zone}
                      </span>
                      {item.priority === 'high' && item.status !== 'completed' && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                          High Priority
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
