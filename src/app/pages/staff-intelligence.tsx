import { Target, AlertTriangle, Clock, CheckCircle } from 'lucide-react';

export function StaffIntelligencePage() {
  const alerts = [
    { id: 1, priority: 'high', title: 'Tasting Zone — High Opportunity', action: 'Offer guided wine tasting', time: '2 min ago', status: 'active' },
    { id: 2, priority: 'medium', title: '30Y Zone — Visitor Engagement Low', action: 'Approach with new collection preview', time: '8 min ago', status: 'active' },
    { id: 3, priority: 'medium', title: 'Checkout — Queue Building', action: 'Open additional register', time: '12 min ago', status: 'active' },
    { id: 4, priority: 'low', title: 'Entrance — Display Attention Low', action: 'Refresh window display', time: '1 hour ago', status: 'snoozed' },
  ];

  const getPriorityColor = (priority: string) => {
    if (priority === 'high') return 'border-rose-500 bg-rose-50';
    if (priority === 'medium') return 'border-amber-500 bg-amber-50';
    return 'border-blue-500 bg-blue-50';
  };

  const getPriorityBadge = (priority: string) => {
    if (priority === 'high') return 'bg-rose-100 text-rose-700 border-rose-200';
    if (priority === 'medium') return 'bg-amber-100 text-amber-700 border-amber-200';
    return 'bg-blue-100 text-blue-700 border-blue-200';
  };

  return (
    <div className="h-full p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Staff Intelligence</h1>
        <p className="text-sm text-gray-500 mt-1">AI-powered guidance for optimal customer service</p>
      </div>

      {/* Focus Area */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-8 text-white">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur">
            <Target className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-semibold">NOW FOCUS ON:</h2>
              <span className="px-2 py-0.5 bg-rose-500 text-white text-xs font-medium rounded-full">High Priority</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Tasting Zone — High Opportunity</h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              A visitor has been browsing the tasting area for 8 minutes without engaging. 
              This is an optimal moment for staff intervention.
            </p>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur border border-white/20 mb-4">
              <h4 className="font-semibold mb-2 text-sm">Suggested Action:</h4>
              <p className="text-gray-200 text-sm">
                "Good afternoon! I notice you're interested in our wine selection. 
                Would you like to try our guided tasting experience? It's complimentary 
                and takes about 15 minutes."
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-white text-gray-900 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                Mark as Done
              </button>
              <button className="px-6 py-2.5 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors border border-white/20">
                Snooze 15min
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Feed */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Alert Feed</h2>
        
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className={`border-l-4 rounded-xl p-4 ${getPriorityColor(alert.priority)} transition-all hover:shadow-md`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${getPriorityBadge(alert.priority)}`}>
                      {alert.priority.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {alert.time}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{alert.title}</h3>
                  <p className="text-sm text-gray-700 mb-3">{alert.action}</p>
                  
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Done
                    </button>
                    <button className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors border border-gray-200">
                      Snooze
                    </button>
                  </div>
                </div>
                
                {alert.status === 'snoozed' && (
                  <div className="ml-4 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                    Snoozed
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats - Staff View (No Financial Data) */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-xs text-gray-500 mb-1">Active Visitors</div>
          <div className="text-2xl font-semibold text-gray-900">48</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-xs text-gray-500 mb-1">Tasting Sessions</div>
          <div className="text-2xl font-semibold text-gray-900">5</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-xs text-gray-500 mb-1">Avg. Engagement</div>
          <div className="text-2xl font-semibold text-gray-900">15.2m</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-xs text-gray-500 mb-1">Open Tasks</div>
          <div className="text-2xl font-semibold text-gray-900">7</div>
        </div>
      </div>
    </div>
  );
}
