import { Settings as SettingsIcon, Store, Users, Bell, Database, Shield } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-light text-gray-900">Settings</h2>
          <p className="text-sm text-gray-500 mt-1">Configure platform preferences and integrations</p>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-4">
        {/* Store Settings */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
              <Store className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Store Configuration</h3>
              <p className="text-xs text-gray-500">Basic store information and settings</p>
            </div>
          </div>
          <div className="space-y-3 pl-13">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm text-gray-900">Store Name</p>
                <p className="text-xs text-gray-500">Porto Flagship</p>
              </div>
              <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">Edit</button>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-gray-100">
              <div>
                <p className="text-sm text-gray-900">Operating Hours</p>
                <p className="text-xs text-gray-500">10:00 AM - 8:00 PM</p>
              </div>
              <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">Edit</button>
            </div>
          </div>
        </div>

        {/* Team Management */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
              <Users className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Team & Permissions</h3>
              <p className="text-xs text-gray-500">Manage staff access and roles</p>
            </div>
          </div>
          <div className="space-y-3 pl-13">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm text-gray-900">Active Staff</p>
                <p className="text-xs text-gray-500">8 members</p>
              </div>
              <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">Manage</button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
              <Bell className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
              <p className="text-xs text-gray-500">Alert preferences and channels</p>
            </div>
          </div>
          <div className="space-y-3 pl-13">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm text-gray-900">Email Alerts</p>
                <p className="text-xs text-gray-500">High priority only</p>
              </div>
              <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">Configure</button>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-gray-100">
              <div>
                <p className="text-sm text-gray-900">In-app Notifications</p>
                <p className="text-xs text-gray-500">All alerts enabled</p>
              </div>
              <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">Configure</button>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
              <Database className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Integrations</h3>
              <p className="text-xs text-gray-500">Connected services and APIs</p>
            </div>
          </div>
          <div className="space-y-3 pl-13">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm text-gray-900">WhatsApp Business API</p>
                <p className="text-xs text-green-600">Connected</p>
              </div>
              <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">View</button>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-gray-100">
              <div>
                <p className="text-sm text-gray-900">Inventory System</p>
                <p className="text-xs text-green-600">Connected</p>
              </div>
              <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">View</button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
              <Shield className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Security & Privacy</h3>
              <p className="text-xs text-gray-500">Data protection and access control</p>
            </div>
          </div>
          <div className="space-y-3 pl-13">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm text-gray-900">Two-Factor Authentication</p>
                <p className="text-xs text-green-600">Enabled</p>
              </div>
              <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">Configure</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
