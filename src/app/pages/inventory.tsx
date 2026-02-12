import { Package, AlertTriangle, TrendingDown } from 'lucide-react';

const inventoryItems = [
  { sku: 'PT-30Y-001', name: '30Y Tawny Port', stock: 4, status: 'critical', velocity: 2.3, reorderPoint: 8 },
  { sku: 'PT-20Y-002', name: '20Y Tawny Port', stock: 12, status: 'low', velocity: 1.8, reorderPoint: 10 },
  { sku: 'PT-VT-011', name: 'Vintage 2011', stock: 18, status: 'ok', velocity: 1.1, reorderPoint: 6 },
  { sku: 'PT-LBV-018', name: 'LBV 2018', stock: 24, status: 'ok', velocity: 1.5, reorderPoint: 8 },
  { sku: 'PT-RR-001', name: 'Ruby Reserve', stock: 32, status: 'ok', velocity: 2.1, reorderPoint: 12 },
  { sku: 'PT-10Y-003', name: '10Y Tawny Port', stock: 6, status: 'low', velocity: 1.2, reorderPoint: 8 },
  { sku: 'PT-50Y-001', name: '50Y Tawny Port', stock: 8, status: 'ok', velocity: 0.4, reorderPoint: 4 },
  { sku: 'PT-WH-002', name: 'White Port', stock: 28, status: 'ok', velocity: 1.9, reorderPoint: 10 },
];

export function InventoryPage() {
  const criticalItems = inventoryItems.filter(item => item.status === 'critical');
  const lowItems = inventoryItems.filter(item => item.status === 'low');

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-light text-gray-900">Inventory Management</h2>
          <p className="text-sm text-gray-500 mt-1">Real-time stock levels and reorder recommendations</p>
        </div>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
          Request restock
        </button>
      </div>

      {/* Alert Banners */}
      {criticalItems.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-sm font-medium text-red-900 mb-1">Critical Stock Levels</h4>
              <p className="text-sm text-red-700">
                {criticalItems.length} SKU{criticalItems.length > 1 ? 's' : ''} below critical threshold. 
                Immediate restock recommended to prevent stockouts.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <Package className="w-5 h-5 text-gray-600 mb-3" />
          <p className="text-sm text-gray-500 mb-1">Total SKUs</p>
          <p className="text-3xl font-light text-gray-900">{inventoryItems.length}</p>
        </div>

        <div className="bg-red-50 rounded-xl p-5 border border-red-100">
          <AlertTriangle className="w-5 h-5 text-red-600 mb-3" />
          <p className="text-sm text-red-700 mb-1">Critical</p>
          <p className="text-3xl font-light text-red-900">{criticalItems.length}</p>
        </div>

        <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
          <TrendingDown className="w-5 h-5 text-amber-600 mb-3" />
          <p className="text-sm text-amber-700 mb-1">Low Stock</p>
          <p className="text-3xl font-light text-amber-900">{lowItems.length}</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Avg Velocity</p>
          <p className="text-3xl font-light text-gray-900">1.6</p>
          <p className="text-xs text-gray-500 mt-1">units/day</p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left text-xs font-medium text-gray-500 px-6 py-3">SKU</th>
                <th className="text-left text-xs font-medium text-gray-500 px-6 py-3">Product</th>
                <th className="text-left text-xs font-medium text-gray-500 px-6 py-3">Stock</th>
                <th className="text-left text-xs font-medium text-gray-500 px-6 py-3">Velocity</th>
                <th className="text-left text-xs font-medium text-gray-500 px-6 py-3">Reorder Point</th>
                <th className="text-left text-xs font-medium text-gray-500 px-6 py-3">Status</th>
                <th className="text-right text-xs font-medium text-gray-500 px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {inventoryItems.map((item) => (
                <tr key={item.sku} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono text-gray-600">{item.sku}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-900">{item.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${
                      item.status === 'critical' ? 'text-red-600' :
                      item.status === 'low' ? 'text-amber-600' :
                      'text-gray-900'
                    }`}>
                      {item.stock} units
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{item.velocity} /day</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{item.reorderPoint} units</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'critical' ? 'bg-red-100 text-red-700' :
                      item.status === 'low' ? 'bg-amber-100 text-amber-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {item.status === 'critical' ? 'Critical' : item.status === 'low' ? 'Low' : 'OK'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {(item.status === 'critical' || item.status === 'low') && (
                      <button className="text-xs text-gray-900 hover:text-gray-700 font-medium">
                        Restock
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
