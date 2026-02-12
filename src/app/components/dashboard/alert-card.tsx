import { Clock, MapPin, AlertCircle, CheckCircle2, BellOff } from 'lucide-react';

interface AlertCardProps {
  title: string;
  zone: string;
  timestamp: string;
  priority: 'low' | 'medium' | 'high';
  suggestedAction: string;
  onDone?: () => void;
  onSnooze?: () => void;
  onDetails?: () => void;
}

export function AlertCard({ 
  title, 
  zone, 
  timestamp, 
  priority, 
  suggestedAction,
  onDone,
  onSnooze,
  onDetails
}: AlertCardProps) {
  const getPriorityColor = () => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 border-red-100 text-red-700';
      case 'medium':
        return 'bg-amber-50 border-amber-100 text-amber-700';
      default:
        return 'bg-blue-50 border-blue-100 text-blue-700';
    }
  };

  const getPriorityBadgeColor = () => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className={`rounded-xl p-4 border ${getPriorityColor()}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getPriorityBadgeColor()}`}>
              {priority.charAt(0).toUpperCase() + priority.slice(1)}
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{timestamp}</span>
            </div>
          </div>
          <h4 className="text-sm font-medium text-gray-900 mb-1">{title}</h4>
          <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
            <MapPin className="w-3 h-3" />
            <span>{zone}</span>
          </div>
          <p className="text-xs text-gray-700 bg-white/50 rounded-lg px-2 py-1.5 border border-gray-200">
            <span className="font-medium">Suggested action:</span> {suggestedAction}
          </p>
        </div>
        <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
      </div>

      <div className="flex gap-2">
        <button
          onClick={onDone}
          className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-white text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors border border-gray-200"
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          Done
        </button>
        <button
          onClick={onSnooze}
          className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-white text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors border border-gray-200"
        >
          <BellOff className="w-3.5 h-3.5" />
          Snooze
        </button>
        <button
          onClick={onDetails}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
        >
          Details
        </button>
      </div>
    </div>
  );
}
