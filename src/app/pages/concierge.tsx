import { MessageCircle, Users, TrendingUp, ShoppingBag, Globe } from 'lucide-react';

const templates = [
  {
    id: 1,
    name: 'Welcome Message',
    languages: ['EN', 'ES', 'PT'],
    usage: 124,
    conversion: '34%',
    preview: 'Welcome to THE 100! 🍷 Discover our exclusive collection of premium Port wines...'
  },
  {
    id: 2,
    name: 'Tasting Invitation',
    languages: ['EN', 'ES', 'PT'],
    usage: 89,
    conversion: '58%',
    preview: 'Experience our guided tasting session! Choose from Rookie\'s, Fifty\'s, or Mix packages...'
  },
  {
    id: 3,
    name: 'Product Recommendation',
    languages: ['EN', 'ES', 'PT'],
    usage: 156,
    conversion: '41%',
    preview: 'Based on your interests, we recommend trying our 30Y Tawny Port...'
  },
  {
    id: 4,
    name: 'Special Offer',
    languages: ['EN', 'ES'],
    usage: 67,
    conversion: '52%',
    preview: 'Exclusive offer just for you! Get 15% off on selected vintages...'
  }
];

const zoneContextRules = [
  {
    zone: '20/30 Years',
    trigger: 'Dwell time > 3 minutes',
    action: 'Send curated 20Y/30Y selection with tasting notes',
    status: 'active'
  },
  {
    zone: '50 Years',
    trigger: 'Zone entry + QR scan',
    action: 'Provide detailed aging process info & sommelier contact',
    status: 'active'
  },
  {
    zone: 'Tasting',
    trigger: 'Tasting completion',
    action: 'Offer personalized wine recommendations based on preferences',
    status: 'active'
  },
  {
    zone: 'Entrance',
    trigger: 'First visit (detected)',
    action: 'Send welcome message + store map + today\'s highlights',
    status: 'active'
  }
];

export function ConciergePage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-light text-gray-900">WhatsApp Concierge</h2>
          <p className="text-sm text-gray-500 mt-1">Intelligent messaging and customer engagement</p>
        </div>
      </div>

      {/* Funnel Metrics */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Users className="w-5 h-5 text-gray-600" />
          </div>
          <p className="text-sm text-gray-500 mb-1">QR Scans</p>
          <p className="text-3xl font-light text-gray-900">342</p>
          <p className="text-xs text-green-600 mt-1">+28% vs yesterday</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <MessageCircle className="w-5 h-5 text-gray-600" />
          </div>
          <p className="text-sm text-gray-500 mb-1">Conversations</p>
          <p className="text-3xl font-light text-gray-900">187</p>
          <p className="text-xs text-gray-500 mt-1">54.7% engagement</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="w-5 h-5 text-gray-600" />
          </div>
          <p className="text-sm text-gray-500 mb-1">Recommendations Sent</p>
          <p className="text-3xl font-light text-gray-900">156</p>
          <p className="text-xs text-gray-500 mt-1">83.4% of conversations</p>
        </div>

        <div className="bg-green-50 rounded-xl p-5 border border-green-100">
          <div className="flex items-center justify-between mb-3">
            <ShoppingBag className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-sm text-green-700 mb-1">Purchases</p>
          <p className="text-3xl font-light text-green-900">47</p>
          <p className="text-xs text-green-600 mt-1">30.1% conversion</p>
        </div>
      </div>

      {/* Template Library */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-medium text-gray-900">Message Templates</h3>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs text-gray-500">Multilingual</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            Create template
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">{template.name}</h4>
                  <div className="flex items-center gap-2 mb-3">
                    {template.languages.map((lang) => (
                      <span key={lang} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <MessageCircle className="w-4 h-4 text-gray-400" />
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-600 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  {template.preview}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <div>
                    <span className="text-gray-500">Usage:</span>
                    <span className="ml-1 font-medium text-gray-900">{template.usage}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Conv:</span>
                    <span className="ml-1 font-medium text-green-600">{template.conversion}</span>
                  </div>
                </div>
                <button className="text-xs text-gray-700 hover:text-gray-900 font-medium">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zone Context Rules */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-900">Zone Context Rules</h3>
          <button className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
            Add rule
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left text-xs font-medium text-gray-500 px-6 py-3">Zone</th>
                  <th className="text-left text-xs font-medium text-gray-500 px-6 py-3">Trigger</th>
                  <th className="text-left text-xs font-medium text-gray-500 px-6 py-3">Action</th>
                  <th className="text-left text-xs font-medium text-gray-500 px-6 py-3">Status</th>
                  <th className="text-right text-xs font-medium text-gray-500 px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {zoneContextRules.map((rule, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-900">{rule.zone}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{rule.trigger}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{rule.action}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {rule.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Engagement Insight</h4>
            <p className="text-sm text-gray-700 mb-3">
              Visitors engaging via WhatsApp Concierge show 2.4x higher conversion rates compared to 
              in-store only. Tasting Invitation template performs best (58% conversion) and is most 
              effective when sent after 3+ minutes in the 20/30 zone. Consider expanding multilingual 
              support to include French and German based on visitor demographics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
