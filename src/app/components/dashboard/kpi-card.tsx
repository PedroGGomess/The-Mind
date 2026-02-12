import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: LucideIcon;
  badge?: string;
  badgeColor?: 'gold' | 'beige' | 'gray';
}

export function KPICard({ title, value, change, changeType = 'neutral', icon: Icon, badge, badgeColor = 'gray' }: KPICardProps) {
  const getBadgeColor = () => {
    switch (badgeColor) {
      case 'gold':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'beige':
        return 'bg-stone-50 text-stone-700 border-stone-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600';
      case 'negative':
        return 'text-red-600';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          {badge && (
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs border ${getBadgeColor()} mt-1`}>
              {badge}
            </span>
          )}
        </div>
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
            <Icon className="w-5 h-5 text-gray-600" />
          </div>
        )}
      </div>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-light text-gray-900">{value}</p>
        {change && (
          <span className={`text-sm ${getChangeColor()}`}>{change}</span>
        )}
      </div>
    </div>
  );
}
