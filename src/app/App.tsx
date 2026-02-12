import { useState } from 'react';
import { Sidebar } from './components/dashboard/sidebar';
import { TopBar } from './components/dashboard/top-bar';
import { OverviewPage } from './pages/overview';
import { LiveStorePage } from './pages/live-store';
import { ZonesPage } from './pages/zones';
import { WineTastingPage } from './pages/wine-tasting';
import { VisualMerchandisingPage } from './pages/visual-merchandising';
import { ConciergePage } from './pages/concierge';
import { StaffIntelligencePage } from './pages/staff-intelligence';
import { InventoryPage } from './pages/inventory';
import { TasksPage } from './pages/tasks';
import { AlertsPage } from './pages/alerts';
import { FunnelAnalyticsPage } from './pages/funnel-analytics';
import { EquipmentPage } from './pages/equipment';
import { ReportsPage } from './pages/reports';
import { MultiStorePage } from './pages/multi-store';
import { SettingsPage } from './pages/settings';

export default function App() {
  const [activePage, setActivePage] = useState('overview');
  const [userRole, setUserRole] = useState<'staff' | 'admin'>('admin');

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <OverviewPage />;
      case 'live-store':
        return <LiveStorePage />;
      case 'zones':
        return <ZonesPage />;
      case 'wine-tasting':
        return userRole === 'admin' ? <WineTastingPage /> : <OverviewPage />;
      case 'visual-merchandising':
        return userRole === 'admin' ? <VisualMerchandisingPage /> : <OverviewPage />;
      case 'concierge':
        return userRole === 'admin' ? <ConciergePage /> : <OverviewPage />;
      case 'staff-intelligence':
        return <StaffIntelligencePage />;
      case 'inventory':
        return <InventoryPage />;
      case 'tasks':
        return <TasksPage />;
      case 'alerts':
        return <AlertsPage />;
      case 'funnel-analytics':
        return userRole === 'admin' ? <FunnelAnalyticsPage /> : <OverviewPage />;
      case 'equipment':
        return userRole === 'admin' ? <EquipmentPage /> : <OverviewPage />;
      case 'reports':
        return userRole === 'admin' ? <ReportsPage /> : <OverviewPage />;
      case 'multi-store':
        return userRole === 'admin' ? <MultiStorePage /> : <OverviewPage />;
      case 'settings':
        return userRole === 'admin' ? <SettingsPage /> : <OverviewPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="h-screen flex bg-gray-50 font-['Inter',sans-serif]">
      {/* Sidebar */}
      <Sidebar 
        activePage={activePage} 
        onPageChange={setActivePage}
        userRole={userRole}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar userRole={userRole} onRoleChange={setUserRole} />
        
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}