import { TaskCard } from '../components/dashboard/task-card';
import { Plus } from 'lucide-react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const tasks = {
  todo: [
    {
      id: 1,
      title: 'Rotate window display to 30Y Tawny',
      zone: 'Entrance',
      priority: 'high' as const,
      estimatedTime: '15 min',
      assignedStaff: 'Maria S.',
      checklist: [
        { label: 'Remove current 10Y display', completed: false },
        { label: 'Clean display surface', completed: false },
        { label: 'Arrange 30Y bottles & props', completed: false },
        { label: 'Update digital signage', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Restock 30Y Tawny inventory',
      zone: 'Inventory',
      priority: 'high' as const,
      estimatedTime: '20 min',
      assignedStaff: 'João P.',
      checklist: [
        { label: 'Check warehouse stock', completed: false },
        { label: 'Transfer 12 units to shelf', completed: false },
        { label: 'Update inventory system', completed: false }
      ]
    },
    {
      id: 3,
      title: 'Update entrance screen content',
      zone: 'Entrance',
      priority: 'medium' as const,
      estimatedTime: '10 min',
      assignedStaff: 'Ana R.'
    }
  ],
  doing: [
    {
      id: 4,
      title: 'Conduct guided tasting for group',
      zone: 'Tasting',
      priority: 'high' as const,
      estimatedTime: '30 min',
      assignedStaff: 'Carlos M.',
      checklist: [
        { label: 'Welcome & introduction', completed: true },
        { label: 'First tasting (Ruby)', completed: true },
        { label: 'Second tasting (Tawny)', completed: false },
        { label: 'Third tasting (Vintage)', completed: false },
        { label: 'Q&A and recommendations', completed: false }
      ]
    },
    {
      id: 5,
      title: 'Assist customers in 50 years zone',
      zone: '50 Years',
      priority: 'medium' as const,
      estimatedTime: '15 min',
      assignedStaff: 'Sofia L.',
      checklist: [
        { label: 'Engage & understand needs', completed: true },
        { label: 'Present product options', completed: false }
      ]
    }
  ],
  done: [
    {
      id: 6,
      title: 'Check tasting machine status',
      zone: 'Tasting',
      priority: 'low' as const,
      estimatedTime: '5 min',
      assignedStaff: 'João P.',
      checklist: [
        { label: 'Inspect dispensers', completed: true },
        { label: 'Check pressure levels', completed: true },
        { label: 'Clean nozzles', completed: true }
      ]
    },
    {
      id: 7,
      title: 'Greet entrance visitors',
      zone: 'Entrance',
      priority: 'low' as const,
      estimatedTime: '5 min',
      assignedStaff: 'Maria S.',
      checklist: [
        { label: 'Welcome & brief intro', completed: true },
        { label: 'Offer store map', completed: true }
      ]
    }
  ]
};

function KanbanColumn({ title, tasks, count }: { title: string; tasks: any[]; count: number }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{count} tasks</p>
        </div>
        {title === 'To Do' && (
          <button className="w-7 h-7 rounded-lg bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}

export function TasksPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-light text-gray-900">Tasks</h2>
            <p className="text-sm text-gray-500 mt-1">AI-generated and manual task management</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Task
            </button>
          </div>
        </div>

        {/* Task Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Total Tasks</p>
            <p className="text-2xl font-light text-gray-900">
              {tasks.todo.length + tasks.doing.length + tasks.done.length}
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-sm text-blue-700 mb-1">To Do</p>
            <p className="text-2xl font-light text-blue-900">{tasks.todo.length}</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="text-sm text-amber-700 mb-1">In Progress</p>
            <p className="text-2xl font-light text-amber-900">{tasks.doing.length}</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-green-700 mb-1">Completed Today</p>
            <p className="text-2xl font-light text-green-900">{tasks.done.length}</p>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-3 gap-6">
          <KanbanColumn title="To Do" tasks={tasks.todo} count={tasks.todo.length} />
          <KanbanColumn title="Doing" tasks={tasks.doing} count={tasks.doing.length} />
          <KanbanColumn title="Done" tasks={tasks.done} count={tasks.done.length} />
        </div>
      </div>
    </DndProvider>
  );
}
