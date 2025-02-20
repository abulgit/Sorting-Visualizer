export const algorithms = {
  'Bubble Sort': bubbleSort,
  'Insertion Sort': insertionSort,
  'Selection Sort': selectionSort,
  'Quick Sort': quickSort,
  'Merge Sort': mergeSort
}

function* bubbleSort(array: number[]) {
  const arr = [...array]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        yield { array: [...arr], comparing: [j, j + 1] }
      }
    }
  }
}

function* insertionSort(array: number[]) {
  const arr = [...array]
  for (let i = 1; i < arr.length; i++) {
    let j = i
    while (j > 0 && arr[j] < arr[j - 1]) {
      ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      yield { array: [...arr], comparing: [j, j - 1] }
      j--
    }
  }
}

function* selectionSort(array: number[]) {
  const arr = [...array]
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j
    }
    if (min !== i) {
      ;[arr[i], arr[min]] = [arr[min], arr[i]]
      yield { array: [...arr], comparing: [i, min] }
    }
  }
}

function* quickSort(array: number[]): Generator<any> {
  function* partition(low: number, high: number): any {
    const pivot = arr[high]
    let i = low - 1
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        yield { array: [...arr], comparing: [i, j] }
      }
    }
    ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    yield { array: [...arr], comparing: [i + 1, high] }
    return i + 1
  }

  const arr = [...array]
  function* qs(low: number, high: number): any {
    if (low < high) {
      const pi = yield* partition(low, high)
      yield* qs(low, pi - 1)
      yield* qs(pi + 1, high)
    }
  }

  yield* qs(0, arr.length - 1)
}

function* mergeSort(array: number[]): Generator<any> {
  function* merge(l: number, m: number, r: number): any {
    const n1 = m - l + 1
    const n2 = r - m
    const L = new Array(n1)
    const R = new Array(n2)

    for (let i = 0; i < n1; i++) L[i] = arr[l + i]
    for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j]

    let i = 0,
      j = 0,
      k = l

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i]
        i++
      } else {
        arr[k] = R[j]
        j++
      }
      yield { array: [...arr], comparing: [k] }
      k++
    }

    while (i < n1) {
      arr[k] = L[i]
      yield { array: [...arr], comparing: [k] }
      i++
      k++
    }

    while (j < n2) {
      arr[k] = R[j]
      yield { array: [...arr], comparing: [k] }
      j++
      k++
    }
  }

  const arr = [...array]
  function* ms(l: number, r: number): any {
    if (l >= r) return
    const m = l + Math.floor((r - l) / 2)
    yield* ms(l, m)
    yield* ms(m + 1, r)
    yield* merge(l, m, r)
  }

  yield* ms(0, arr.length - 1)
} 