import { TrendingDown, AlertCircle, ArrowRight } from 'lucide-react';

export function FunnelAnalyticsPage() {
  const funnelSteps = [
    { id: 1, stage: 'Entry', visitors: 847, percentage: 100, conversion: 100 },
    { id: 2, stage: 'Zone Engagement', visitors: 723, percentage: 85, conversion: 85 },
    { id: 3, stage: 'Product Interaction', visitors: 521, percentage: 62, conversion: 72 },
    { id: 4, stage: 'Tasting Experience', visitors: 287, percentage: 34, conversion: 55 },
    { id: 5, stage: 'Purchase', visitors: 193, percentage: 23, conversion: 67 },
  ];

  const insights = [
    {
      id: 1,
      title: 'Major Drop-off: Zone to Interaction',
      description: 'Conversion drops 18% between Zone Engagement and Product Interaction',
      impact: 'high',
      recommendation: 'Improve product discovery and staff engagement in browsing zones',
    },
    {
      id: 2,
      title: 'Strong Tasting Conversion',
      description: '67% of visitors who taste make a purchase',
      impact: 'positive',
      recommendation: 'Increase tasting participation through proactive staff approach',
    },
    {
      id: 3,
      title: 'Entry-to-Engagement Rate Good',
      description: '85% of visitors engage with at least one zone',
      impact: 'positive',
      recommendation: 'Maintain current entrance experience and initial greeting',
    },
  ];

  const getImpactStyle = (impact: string) => {
    if (impact === 'high') return 'border-rose-500 bg-rose-50 text-rose-700';
    if (impact === 'positive') return 'border-emerald-500 bg-emerald-50 text-emerald-700';
    return 'border-amber-500 bg-amber-50 text-amber-700';
  };

  return (
    <div className="h-full p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Funnel Analytics</h1>
        <p className="text-sm text-gray-500 mt-1">Physical customer journey and conversion analysis</p>
      </div>

      {/* Main Funnel */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-6">Physical Funnel — Last 7 Days</h2>
          
          <div className="space-y-4">
            {funnelSteps.map((step, index) => (
              <div key={step.id}>
                <div className="flex items-center gap-4">
                  {/* Stage indicator */}
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {step.id}
                  </div>
                  
                  {/* Funnel bar */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-900">{step.stage}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">{step.visitors} visitors</span>
                        <span className="text-sm font-semibold text-gray-900">{step.percentage}%</span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-100 rounded-full h-8"></div>
                      <div 
                        className="absolute top-0 left-0 bg-gradient-to-r from-gray-900 to-gray-700 h-8 rounded-full transition-all flex items-center justify-end pr-3"
                        style={{ width: `${step.percentage}%` }}
                      >
                        {step.conversion < 100 && (
                          <span className="text-xs font-medium text-white">
                            {step.conversion}% convert
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Drop-off indicator */}
                {index < funnelSteps.length - 1 && (
                  <div className="ml-4 pl-8 mt-2 mb-2 flex items-center gap-2 text-xs text-gray-500">
                    <TrendingDown className="w-3 h-3 text-rose-500" />
                    <span>
                      {funnelSteps[index].visitors - funnelSteps[index + 1].visitors} drop-off 
                      ({Math.round(((funnelSteps[index].visitors - funnelSteps[index + 1].visitors) / funnelSteps[index].visitors) * 100)}%)
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-semibold text-gray-900">23%</div>
                <div className="text-xs text-gray-500 mt-1">Overall Conversion</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900">77%</div>
                <div className="text-xs text-gray-500 mt-1">Drop-off Rate</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-emerald-600">+5%</div>
                <div className="text-xs text-gray-500 mt-1">vs Last Week</div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights Panel */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Key Insights</h2>
            
            <div className="space-y-4">
              {insights.map((insight) => (
                <div 
                  key={insight.id} 
                  className={`border-l-4 rounded-xl p-4 ${getImpactStyle(insight.impact)}`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    {insight.impact === 'high' ? (
                      <AlertCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    )}
                    <h3 className="font-semibold text-sm">{insight.title}</h3>
                  </div>
                  <p className="text-xs text-gray-700 mb-3 pl-6">{insight.description}</p>
                  <div className="bg-white rounded-lg p-3 pl-6">
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Recommendation:</span> {insight.recommendation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-6 text-white">
            <h3 className="font-semibold mb-3">Optimize Funnel</h3>
            <p className="text-sm text-gray-300 mb-4">
              Based on current data, focusing on Zone-to-Interaction conversion could add ~40 purchases per week.
            </p>
            <button className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-xl font-medium hover:bg-gray-100 transition-colors">
              Generate Action Plan
            </button>
          </div>
        </div>
      </div>

      {/* Timeline Breakdown */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Hourly Breakdown — Today</h2>
        <div className="flex items-end gap-2 h-32">
          {[42, 38, 45, 67, 89, 112, 134, 128, 95, 87, 76, 54].map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-gray-100 rounded-t relative" style={{ height: `${(value / 134) * 100}%`, minHeight: '4px' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-600 rounded-t"></div>
              </div>
              <span className="text-xs text-gray-500 mt-2">{index + 9}h</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
