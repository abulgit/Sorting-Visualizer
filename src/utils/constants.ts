export const ALGORITHMS = {
  'bubble-sort': 'Bubble Sort',
  'merge-sort': 'Merge Sort',
  'quick-sort': 'Quick Sort',
  'selection-sort': 'Selection Sort',
  'insertion-sort': 'Insertion Sort'
} as const

export type AlgorithmPath = keyof typeof ALGORITHMS
export type AlgorithmName = typeof ALGORITHMS[AlgorithmPath] 