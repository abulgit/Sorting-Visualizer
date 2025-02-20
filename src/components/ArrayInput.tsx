import { useState, useEffect } from 'react'

export default function ArrayInput({ setCustomArray }: { 
  setCustomArray: (input: string) => void 
}) {
  const [values, setValues] = useState<string[]>(Array(10).fill(''))

  const handleInputChange = (index: number, value: string) => {
    const newValue = value.replace(/[^0-9]/g, '') // Only allow numbers
    const newValues = [...values]
    newValues[index] = newValue
    setValues(newValues)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const numbers = values
      .map(v => v.trim())
      .filter(v => v !== '')
      .join(',')
    setCustomArray(numbers)
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Custom Array</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
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
                  className="w-full p-2 text-center border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs text-gray-400">
                  {index}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Enter numbers (0-99) • Use arrow keys to navigate
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setValues(Array(10).fill(''))}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            Clear
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600 transition-colors"
          >
            Update Array
          </button>
        </div>
      </form>
    </div>
  )
} 