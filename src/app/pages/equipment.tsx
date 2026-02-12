import { Cpu, CheckCircle, AlertTriangle, XCircle, Activity, Calendar } from 'lucide-react';

export function EquipmentPage() {
  const equipment = [
    { 
      id: 1, 
      name: 'Wine Tasting Machine #1', 
      location: 'Tasting Zone', 
      status: 'operational', 
      uptime: 99.2, 
      lastMaintenance: '2 days ago',
      nextMaintenance: 'In 12 days',
      sessionsToday: 47,
    },
    { 
      id: 2, 
      name: 'Digital Signage - Entrance', 
      location: 'Entrance', 
      status: 'operational', 
      uptime: 100, 
      lastMaintenance: '1 week ago',
      nextMaintenance: 'In 21 days',
      views: 847,
    },
    { 
      id: 3, 
      name: 'POS Terminal #1', 
      location: 'Checkout', 
      status: 'warning', 
      uptime: 95.8, 
      lastMaintenance: '3 weeks ago',
      nextMaintenance: 'Overdue by 2 days',
      transactions: 193,
    },
    { 
      id: 4, 
      name: 'Digital Signage - 30Y Zone', 
      location: '30Y Zone', 
      status: 'operational', 
      uptime: 98.5, 
      lastMaintenance: '5 days ago',
      nextMaintenance: 'In 23 days',
      views: 521,
    },
    { 
      id: 5, 
      name: 'Sensor Network', 
      location: 'Store-wide', 
      status: 'operational', 
      uptime: 99.9, 
      lastMaintenance: '1 day ago',
      nextMaintenance: 'In 6 days',
      dataPoints: '1.2M',
    },
    { 
      id: 6, 
      name: 'Climate Control System', 
      location: 'Wine Storage', 
      status: 'attention', 
      uptime: 88.3, 
      lastMaintenance: '2 months ago',
      nextMaintenance: 'Overdue by 15 days',
      temperature: '16.5°C',
    },
  ];

  const getStatusIcon = (status: string) => {
    if (status === 'operational') return <CheckCircle className="w-5 h-5 text-emerald-500" />;
    if (status === 'warning') return <AlertTriangle className="w-5 h-5 text-amber-500" />;
    return <XCircle className="w-5 h-5 text-rose-500" />;
  };

  const getStatusBadge = (status: string) => {
    if (status === 'operational') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (status === 'warning') return 'bg-amber-50 text-amber-700 border-amber-200';
    return 'bg-rose-50 text-rose-700 border-rose-200';
  };

  const getUptimeColor = (uptime: number) => {
    if (uptime >= 99) return 'text-emerald-600';
    if (uptime >= 95) return 'text-amber-600';
    return 'text-rose-600';
  };

  const operationalCount = equipment.filter(e => e.status === 'operational').length;
  const warningCount = equipment.filter(e => e.status === 'warning').length;
  const attentionCount = equipment.filter(e => e.status === 'attention').length;

  return (
    <div className="h-full p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Equipment Management</h1>
        <p className="text-sm text-gray-500 mt-1">Monitor and maintain retail technology infrastructure</p>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500 mb-1">Total Equipment</div>
              <div className="text-2xl font-semibold text-gray-900">{equipment.length}</div>
            </div>
            <Cpu className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500 mb-1">Operational</div>
              <div className="text-2xl font-semibold text-emerald-600">{operationalCount}</div>
            </div>
            <CheckCircle className="w-8 h-8 text-emerald-400" />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500 mb-1">Warning</div>
              <div className="text-2xl font-semibold text-amber-600">{warningCount}</div>
            </div>
            <AlertTriangle className="w-8 h-8 text-amber-400" />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500 mb-1">Needs Attention</div>
              <div className="text-2xl font-semibold text-rose-600">{attentionCount}</div>
            </div>
            <XCircle className="w-8 h-8 text-rose-400" />
          </div>
        </div>
      </div>

      {/* Equipment List */}
      <div className="bg-white rounded-2xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-900">Equipment Status</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          {equipment.map((item) => (
            <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  {/* Status Icon */}
                  <div className="mt-1">
                    {getStatusIcon(item.status)}
                  </div>
                  
                  {/* Equipment Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${getStatusBadge(item.status)}`}>
                        {item.status.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                      <span>📍 {item.location}</span>
                      <span className="flex items-center gap-1">
                        <Activity className="w-4 h-4" />
                        <span className={`font-medium ${getUptimeColor(item.uptime)}`}>
                          {item.uptime}% uptime
                        </span>
                      </span>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-4 gap-4 text-xs">
                      <div>
                        <div className="text-gray-500 mb-1">Last Maintenance</div>
                        <div className="font-medium text-gray-900">{item.lastMaintenance}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">Next Maintenance</div>
                        <div className={`font-medium ${item.nextMaintenance.includes('Overdue') ? 'text-rose-600' : 'text-gray-900'}`}>
                          {item.nextMaintenance}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">Today's Activity</div>
                        <div className="font-medium text-gray-900">
                          {item.sessionsToday && `${item.sessionsToday} sessions`}
                          {item.views && `${item.views} views`}
                          {item.transactions && `${item.transactions} transactions`}
                          {item.dataPoints && `${item.dataPoints} data points`}
                          {item.temperature && item.temperature}
                        </div>
                      </div>
                      <div className="flex items-end">
                        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-medium transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance Schedule */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-900">Upcoming Maintenance</h2>
          <Calendar className="w-5 h-5 text-gray-400" />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div>
              <div className="font-medium text-gray-900 text-sm">Sensor Network Calibration</div>
              <div className="text-xs text-gray-500 mt-1">In 6 days</div>
            </div>
            <button className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors">
              Schedule
            </button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div>
              <div className="font-medium text-gray-900 text-sm">Wine Tasting Machine #1 Cleaning</div>
              <div className="text-xs text-gray-500 mt-1">In 12 days</div>
            </div>
            <button className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors">
              Schedule
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-rose-50 rounded-xl border border-rose-200">
            <div>
              <div className="font-medium text-rose-700 text-sm">Climate Control System - OVERDUE</div>
              <div className="text-xs text-rose-600 mt-1">Overdue by 15 days</div>
            </div>
            <button className="px-3 py-1.5 bg-rose-600 text-white rounded-lg text-xs font-medium hover:bg-rose-700 transition-colors">
              Schedule Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
