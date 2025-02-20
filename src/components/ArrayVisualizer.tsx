import { motion } from 'framer-motion'

export default function ArrayVisualizer({ 
  array,
  comparing = []
}: { 
  array: number[]
  comparing?: number[] 
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Visualization</h3>
      <div className="flex items-end justify-center h-64 gap-1 bg-gray-50 rounded-lg p-4">
        {array.map((value, index) => (
          <motion.div
            key={index}
            layout
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            className={`rounded-t-lg transition-colors duration-200 ${
              comparing.includes(index)
                ? 'bg-gradient-to-t from-red-500 to-red-400'
                : 'bg-gradient-to-t from-blue-500 to-blue-400'
            }`}
            style={{
              width: `${100 / array.length}%`,
              height: `${(value / 100) * 80}%`,
              minWidth: '20px'
            }}
          />
        ))}
      </div>
    </div>
  )
} 