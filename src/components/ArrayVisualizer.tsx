import { motion } from 'framer-motion'

export default function ArrayVisualizer({ 
  array,
  comparing = []
}: { 
  array: number[]
  comparing?: number[] 
}) {
  // Find the maximum value in the array
  const maxValue = Math.max(...array, 1) // Use 1 as minimum to avoid division by zero

  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
      <div className="p-4 flex flex-col space-y-1">
        <h3 className="font-semibold leading-none tracking-tight text-zinc-900 dark:text-zinc-50">
          Visualization
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Watch the sorting process in real-time.
        </p>
      </div>
      <div className="p-4 pt-0">
        <div className="flex items-end justify-center h-[330px] gap-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4">
          {array.length === 0 ? (
            <div className="flex items-center justify-center w-full h-full text-zinc-500 dark:text-zinc-400">
              Click "Generate Random Array" to start
            </div>
          ) : (
            array.map((value, index) => (
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
                  height: `${(value / maxValue) * 100}%`, // Calculate relative height
                  minWidth: '20px',
                  minHeight: '20px' // Add minimum height for visibility
                }}
              >
                {/* Optional: Show value on bar */}
                <div className="flex justify-center items-end h-full">
                  <span className="text-xs text-white dark:text-zinc-900 pb-1">
                    {value}
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
} 