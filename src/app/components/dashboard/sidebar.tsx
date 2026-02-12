import { 
  LayoutDashboard, 
  MapPin, 
  Wine, 
  Palette, 
  CheckSquare, 
  Package, 
  MessageCircle, 
  Bell, 
  FileText, 
  Settings,
  Radio,
  Users,
  TrendingUp,
  Cpu,
  Store,
  LucideIcon
} from 'lucide-react';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
  userRole: 'staff' | 'admin';
}

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  adminOnly?: boolean;
}

const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'live-store', label: 'Live Store', icon: Radio },
  { id: 'zones', label: 'Zones', icon: MapPin },
  { id: 'wine-tasting', label: 'Wine Tasting', icon: Wine, adminOnly: true },
  { id: 'visual-merchandising', label: 'Visual Merchandising', icon: Palette, adminOnly: true },
  { id: 'concierge', label: 'Concierge', icon: MessageCircle, adminOnly: true },
  { id: 'staff-intelligence', label: 'Staff Intelligence', icon: Users },
  { id: 'inventory', label: 'Inventory Intelligence', icon: Package },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'alerts', label: 'Alerts', icon: Bell },
  { id: 'funnel-analytics', label: 'Funnel Analytics', icon: TrendingUp, adminOnly: true },
  { id: 'equipment', label: 'Equipment', icon: Cpu, adminOnly: true },
  { id: 'reports', label: 'Reports', icon: FileText, adminOnly: true },
  { id: 'multi-store', label: 'Multi-Store', icon: Store, adminOnly: true },
  { id: 'settings', label: 'Settings', icon: Settings, adminOnly: true },
];

export function Sidebar({ activePage, onPageChange, userRole }: SidebarProps) {
  const filteredItems = navItems.filter(item => !item.adminOnly || userRole === 'admin');

  return (
    <div className="w-64 h-full bg-white border-r border-gray-100 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-lg font-semibold text-gray-900">THE 100's Mind</h1>
        <p className="text-xs text-gray-500 mt-1">AI Design Engine & Smart Retail Platform</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                    isActive
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}