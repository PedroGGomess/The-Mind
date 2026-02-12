import { ImageWithFallback } from './figma/ImageWithFallback';

interface MaskedImageCardProps {
  imageUrl: string;
  title: string;
  description: string;
  category?: string;
}

export function MaskedImageCard({ imageUrl, title, description, category }: MaskedImageCardProps) {
  return (
    <div className="relative w-full max-w-sm h-96 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
      {/* Background Image */}
      <ImageWithFallback
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay - Initial State */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
      
      {/* Mask Transition Overlay - Reveals on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end p-6 z-10">
        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900">
              {category}
            </span>
          </div>
        )}
        
        {/* Title - Always Visible */}
        <h3 className="text-2xl font-semibold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-4">
          {title}
        </h3>
        
        {/* Description - Hidden Initially, Reveals on Hover */}
        <div className="overflow-hidden">
          <p className="text-white/90 text-sm leading-relaxed transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {description}
          </p>
        </div>
        
        {/* Additional Info - Reveals on Hover */}
        <div className="flex items-center gap-4 mt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          <button className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
            Learn More
          </button>
          <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium hover:bg-white/30 transition-colors">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
