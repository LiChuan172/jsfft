import { mean, rootMeanSquare, sum } from "simple-statistics"
const { abs } = Math

function shape(arr, order) {
  const m = mean(arr)
  const rms = rootMeanSquare(arr)
  const n = arr.length
  return sum(arr.map((num) => abs(num) - m) ** order) / n / rms ** order
}

// 歪度（偏度）指标
export function skewness(arr) {
  return shape(arr, 3)
}

// 峭度指标
export function kurtosis(arr) {
  return shape(arr, 4)
}