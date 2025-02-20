import { useState, useCallback } from 'react'

export function useArrayGeneration(initialSize: number) {
  const [array, setArray] = useState<number[]>([])

  const generateRandomArray = useCallback((size: number) => {
    const newArray = Array.from({ length: size }, () => 
      Math.floor(Math.random() * 100)
    )
    setArray(newArray)
  }, [])

  const setCustomArray = useCallback((input: string) => {
    const numbers = input
      .split(',')
      .map(n => parseInt(n.trim(), 10))
      .filter(n => !isNaN(n))
    
    if (numbers.length > 0) {
      setArray(numbers)
    }
  }, [])

  // Initialize array if empty
  useState(() => {
    if (array.length === 0) {
      generateRandomArray(initialSize)
    }
  }, [initialSize, generateRandomArray, array.length])

  return {
    array,
    setArray,
    generateRandomArray,
    setCustomArray
  }
} 