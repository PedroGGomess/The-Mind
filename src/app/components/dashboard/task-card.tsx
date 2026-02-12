import { Clock, MapPin, Circle, CheckCircle2 } from 'lucide-react';

interface TaskCardProps {
  title: string;
  zone: string;
  priority: 'low' | 'medium' | 'high';
  estimatedTime: string;
  assignedStaff?: string;
  checklist?: { label: string; completed: boolean }[];
  onDrag?: () => void;
}

export function TaskCard({ 
  title, 
  zone, 
  priority, 
  estimatedTime, 
  assignedStaff,
  checklist = []
}: TaskCardProps) {
  const getPriorityColor = () => {
    switch (priority) {
      case 'high':
        return 'border-l-red-400';
      case 'medium':
        return 'border-l-amber-400';
      default:
        return 'border-l-blue-400';
    }
  };

  const getPriorityBadge = () => {
    switch (priority) {
      case 'high':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className={`bg-white rounded-xl p-4 border-l-4 border-r border-t border-b border-gray-100 ${getPriorityColor()} shadow-sm hover:shadow-md transition-shadow cursor-move`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {priority === 'high' && (
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${getPriorityBadge()}`}>
                High Priority
              </span>
            )}
          </div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">{title}</h4>
          
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{zone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{estimatedTime}</span>
            </div>
          </div>

          {checklist.length > 0 && (
            <div className="space-y-1.5 mb-3">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {item.completed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  ) : (
                    <Circle className="w-3.5 h-3.5 text-gray-300" />
                  )}
                  <span className={`text-xs ${item.completed ? 'text-gray-400 line-through' : 'text-gray-600'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {assignedStaff && (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">{assignedStaff.charAt(0)}</span>
              </div>
              <span className="text-xs text-gray-500">{assignedStaff}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
