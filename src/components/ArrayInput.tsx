import { useState } from 'react'

export default function ArrayInput({ setCustomArray }: { 
  setCustomArray: (input: string) => void 
}) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCustomArray(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter comma-separated numbers (e.g., 5,3,9)"
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Use Custom Array
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Maximum 10 numbers (0-100)
      </p>
    </form>
  )
} 