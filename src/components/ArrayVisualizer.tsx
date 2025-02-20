import { motion } from 'framer-motion'

export default function ArrayVisualizer({ 
  array,
  comparing = []
}: { 
  array: number[]
  comparing?: number[] 
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-end justify-center h-64 gap-1">
        {array.map((value, index) => (
          <motion.div
            key={index}
            layout
            transition={{ type: 'spring', damping: 20 }}
            className={`rounded-t-md transition-all duration-300 ${
              comparing.includes(index) ? 'bg-red-500' : 'bg-blue-500'
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