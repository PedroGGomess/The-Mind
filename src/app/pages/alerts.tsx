import { AlertCard } from '../components/dashboard/alert-card';
import { Filter } from 'lucide-react';

const alerts = [
  {
    id: 1,
    title: 'High opportunity: 30 years shelf — dwell time ↑',
    zone: '20/30 Years',
    timestamp: '2 min ago',
    priority: 'high' as const,
    suggestedAction: 'Approach visitors and offer guided product tour. Mention current promotion on 30Y Tawny.'
  },
  {
    id: 2,
    title: 'Tasting zone active — offer guided tasting',
    zone: 'Tasting',
    timestamp: '5 min ago',
    priority: 'high' as const,
    suggestedAction: 'Group of 4 showing interest. Recommend "The Fifty\'s Experience" package.'
  },
  {
    id: 3,
    title: 'SKU low: 30Y Tawny — restock recommended',
    zone: 'Inventory',
    timestamp: '12 min ago',
    priority: 'medium' as const,
    suggestedAction: 'Only 4 units remaining. Request restock from warehouse before end of day.'
  },
  {
    id: 4,
    title: 'Window display engagement down 23%',
    zone: 'Entrance',
    timestamp: '18 min ago',
    priority: 'medium' as const,
    suggestedAction: 'Consider rotating featured product. Current: 10Y. Suggested: 30Y Tawny or new arrival.'
  },
  {
    id: 5,
    title: 'Checkout queue building',
    zone: 'Checkout',
    timestamp: '3 min ago',
    priority: 'high' as const,
    suggestedAction: 'Open second register or offer mobile checkout assistance.'
  },
  {
    id: 6,
    title: 'Tasting machine needs attention',
    zone: 'Tasting',
    timestamp: '25 min ago',
    priority: 'low' as const,
    suggestedAction: 'Dispenser 3 pressure low. Schedule maintenance check.'
  },
  {
    id: 7,
    title: 'Cold zone detected: 50 years section',
    zone: '50 Years',
    timestamp: '32 min ago',
    priority: 'medium' as const,
    suggestedAction: 'Low traffic for 30+ minutes. Consider adjusting screen content or moving highlight piece.'
  },
  {
    id: 8,
    title: 'Visitor lingering at entrance',
    zone: 'Entrance',
    timestamp: '1 min ago',
    priority: 'low' as const,
    suggestedAction: 'Greet visitor and offer welcome tour of the space.'
  }
];

export function AlertsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-light text-gray-900">Alert Center</h2>
          <p className="text-sm text-gray-500 mt-1">Real-time notifications and recommended actions</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Filter</span>
          </button>
        </div>
      </div>

      {/* Priority Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Total Active</p>
          <p className="text-2xl font-light text-gray-900">{alerts.length}</p>
        </div>
        <div className="bg-red-50 rounded-xl p-4 border border-red-100">
          <p className="text-sm text-red-700 mb-1">High Priority</p>
          <p className="text-2xl font-light text-red-900">
            {alerts.filter(a => a.priority === 'high').length}
          </p>
        </div>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
          <p className="text-sm text-amber-700 mb-1">Medium Priority</p>
          <p className="text-2xl font-light text-amber-900">
            {alerts.filter(a => a.priority === 'medium').length}
          </p>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <p className="text-sm text-blue-700 mb-1">Low Priority</p>
          <p className="text-2xl font-light text-blue-900">
            {alerts.filter(a => a.priority === 'low').length}
          </p>
        </div>
      </div>

      {/* Alerts Feed */}
      <div className="space-y-3">
        {alerts.map((alert) => (
          <AlertCard
            key={alert.id}
            {...alert}
            onDone={() => console.log('Done:', alert.id)}
            onSnooze={() => console.log('Snooze:', alert.id)}
            onDetails={() => console.log('Details:', alert.id)}
          />
        ))}
      </div>
    </div>
  );
}
