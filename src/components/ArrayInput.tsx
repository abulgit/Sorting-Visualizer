import { useState, useEffect } from 'react'
import Toast from './Toast'

export default function ArrayInput({ 
  setCustomArray,
  generateNewArray,
  startSorting,
  isSorting,
  algorithmName,
  arraySize 
}: { 
  setCustomArray: (input: string) => void
  generateNewArray: () => void
  startSorting: () => void
  isSorting: boolean
  algorithmName: string
  arraySize: number
}) {
  const [values, setValues] = useState<string[]>(Array(10).fill(''))
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [error])

  const handleInputChange = (index: number, value: string) => {
    setError('') 
    const newValue = value.replace(/[^0-9]/g, '') 
    const newValues = [...values]
    newValues[index] = newValue
    setValues(newValues)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validNumbers = values
      .map(v => v.trim())
      .filter(Boolean)
      .map(Number)
      .filter(n => !isNaN(n))
      
    if (validNumbers.length === 0) {
      setError('Please enter some numbers')
      return 
    }

    if (validNumbers.length < 2) {
      setError('Please enter at least 2 numbers')
      return
    }

    if (validNumbers.length > 10) {
      setError('Maximum 10 numbers allowed')
      return
    }
    
    setError('') 
    setCustomArray(validNumbers.join(','))
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight' && index < 9) {
      const nextInput = document.getElementById(`array-input-${index + 1}`)
      nextInput?.focus()
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      const prevInput = document.getElementById(`array-input-${index - 1}`)
      prevInput?.focus()
    }
  }

  return (
    <>
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
        <div className="p-4 flex flex-col space-y-1">
          <h3 className="font-semibold leading-none tracking-tight text-zinc-900 dark:text-zinc-50">
            Input Array
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Enter custom values or generate random array.
          </p>
        </div>
        <div className="p-4 pt-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-10 gap-2">
              {values.map((value, index) => (
                <div key={index} className="relative">
                  <input
                    id={`array-input-${index}`}
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    maxLength={2}
                    disabled={isSorting}
                    className="flex h-9 w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-1 text-sm shadow-sm transition-colors text-zinc-900 dark:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-1 bg-white dark:bg-zinc-950 text-xs text-zinc-400 dark:text-zinc-500">
                    {index}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setValues(Array(10).fill(''))
                    setError('')
                  }}
                  disabled={isSorting}
                  className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 h-9 px-4 py-2"
                >
                  Clear Array
                </button>
                <button
                  type="submit"
                  disabled={isSorting}
                  className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 h-9 px-4 py-2"
                >
                  Use This Array
                </button>
              </div>

              <button
                type="button"
                onClick={generateNewArray}
                disabled={isSorting}
                className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 h-9 px-4 py-2"
              >
                Generate Random Array ({arraySize})
              </button>

              <button
                type="button"
                onClick={startSorting}
                disabled={isSorting}
                className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600 h-9 px-4 py-2"
              >
                {isSorting ? `${algorithmName}ing...` : `Let's ${algorithmName}!`}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toast message={error} />
    </>
  )
} 