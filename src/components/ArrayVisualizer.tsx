import { motion } from 'framer-motion'

export default function ArrayVisualizer({ 
  array,
  comparing = []
}: { 
  array: number[]
  comparing?: number[] 
}) {
  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
      <div className="p-6 flex flex-col space-y-2">
        <h3 className="font-semibold leading-none tracking-tight text-zinc-900 dark:text-zinc-50">
          Visualization
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Watch the sorting process in real-time.
        </p>
      </div>
      <div className="p-6 pt-0">
        <div className="flex items-end justify-center h-64 gap-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4">
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
                  ? 'bg-rose-500 dark:bg-rose-600'
                  : 'bg-zinc-800 dark:bg-zinc-200'
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
    </div>
  )
} 