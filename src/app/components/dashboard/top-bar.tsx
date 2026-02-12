import { Search, Bell, ChevronDown, Store, Calendar } from 'lucide-react';

interface TopBarProps {
  userRole: 'staff' | 'admin';
  onRoleChange: (role: 'staff' | 'admin') => void;
}

export function TopBar({ userRole, onRoleChange }: TopBarProps) {
  return (
    <div className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6">
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Store selector */}
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          <Store className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700 font-medium">Porto Flagship</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        {/* Date range */}
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">Last 7 days</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        {/* Mind Active indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100">
          <div className="relative">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <span className="text-xs font-medium text-emerald-700">Mind Active</span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 w-64 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-gray-50 transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Role switch */}
        <div className="flex items-center gap-2">
          <select
            value={userRole}
            onChange={(e) => onRoleChange(e.target.value as 'staff' | 'admin')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200 bg-white text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <option value="staff">Staff View</option>
            <option value="admin">Admin View</option>
          </select>
        </div>

        {/* User avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-sm font-medium text-gray-700">JD</span>
        </div>
      </div>
    </div>
  );
}