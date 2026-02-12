import { Lightbulb, ArrowRight, Info } from 'lucide-react';
import { useState } from 'react';

interface AIRecommendationCardProps {
  title: string;
  reason: string;
  confidence: number;
  impact: string;
  explanation: string;
  actions: { label: string; variant?: 'primary' | 'secondary' }[];
}

export function AIRecommendationCard({ title, reason, confidence, impact, explanation, actions }: AIRecommendationCardProps) {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-all">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-4 h-4 text-amber-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-sm font-medium text-gray-900">{title}</h4>
            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
              {confidence}% confidence
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-2">{reason}</p>
          <div className="flex items-center gap-1 text-xs text-emerald-600 mb-2">
            <span>Est. impact:</span>
            <span className="font-medium">{impact}</span>
          </div>
          
          {/* Why? Explainability */}
          <button 
            onClick={() => setShowExplanation(!showExplanation)}
            className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Info className="w-3 h-3" />
            <span className="font-medium">Why?</span>
          </button>
          
          {showExplanation && (
            <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-700">{explanation}</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {actions.map((action, idx) => (
          <button
            key={idx}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
              action.variant === 'primary'
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {action.label}
            <ArrowRight className="w-3 h-3" />
          </button>
        ))}
      </div>
    </div>
  );
}