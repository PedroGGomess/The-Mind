import { Users, TrendingUp, TrendingDown } from 'lucide-react';

interface Zone {
  id: string;
  name: string;
  peopleCount: number;
  status: 'hot' | 'cold' | 'normal';
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ZoneMapProps {
  zones: Zone[];
}

export function ZoneMap({ zones }: ZoneMapProps) {
  const getZoneColor = (status: Zone['status']) => {
    switch (status) {
      case 'hot':
        return 'bg-red-100 border-red-300 text-red-700';
      case 'cold':
        return 'bg-blue-100 border-blue-300 text-blue-700';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-700';
    }
  };

  const getZoneIcon = (status: Zone['status']) => {
    switch (status) {
      case 'hot':
        return <TrendingUp className="w-3 h-3" />;
      case 'cold':
        return <TrendingDown className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <h3 className="text-sm font-medium text-gray-900 mb-4">Store Layout</h3>
      
      <div className="relative w-full aspect-video bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
        {zones.map((zone) => (
          <div
            key={zone.id}
            className={`absolute border-2 rounded-lg ${getZoneColor(zone.status)} p-2 transition-all hover:shadow-lg`}
            style={{
              left: `${zone.x}%`,
              top: `${zone.y}%`,
              width: `${zone.width}%`,
              height: `${zone.height}%`,
            }}
          >
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">{zone.name}</span>
                {getZoneIcon(zone.status)}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span className="text-xs font-semibold">{zone.peopleCount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <span className="text-gray-600">Hot zone</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <span className="text-gray-600">Normal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          <span className="text-gray-600">Cold zone</span>
        </div>
      </div>
    </div>
  );
}
