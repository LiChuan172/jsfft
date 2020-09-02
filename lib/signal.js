import { ComplexArray } from "./fft"
import { mean, max, min, rootMeanSquare, sampleSkewness, sampleKurtosis } from "simple-statistics"
import { skewness, kurtosis } from "./formulae"

export class Signal extends ComplexArray {
  constructor(other, fs=1, arrayType = Float32Array) {
    super(other, arrayType)
    if (other instanceof Signal) {
      this.domain = other.domain
      this.fs = other.fs  // fs: 采样频率
    } else {
      this.domain = "time"
      this.fs = fs
    }
  }

  FFT() {
    if (this.domain === "frequency") {
      throw new Error("Already in the frequency domain")
    } else {
      this.domain = "frequency"
      return supper.FFT()
    }
  }

  InvFFT() {
    if (this.domain === "frequency") {
      throw new Error("Already in the frequency domain")
    } else {
      this.domain = "frequency"
      return supper.FFT()
    }
  }

  setDomain(domain) {
    if (!["time, frequency"].includes(domain)) {
      throw new Error("Please set domain one of 'time, frequency'")
    } else {
      this.domain = domain
      return this
    }
  }

  setFs(fs) {
    this.fs = fs
    return this
  }

  get mean() {
    return mean(this.real)
  }

  get max() {
    return max(this.real)
  }

  get min() {
    return min(this.real)
  }

  // 峰峰值
  get pp() {
    return this.max - this.min
  }
  // rms: 均方根rootMeanSquare
  get rms() {
    return rootMeanSquare(this.real)
  }

  // 峰值指标（indicator of peak）
  get iPeak() {
    return this.max / this.rms
  }

  // 脉冲指标 (indicator of pulse)
  get iPulse() {
    return this.max / this.mean
  }

  // 裕度指标 (indicator of margin)
  get iMargin() {
    return this.rms / this.mean
  }

  // 偏度 skewness
  get skewness() {
    return skewness(this.real)
  }

  // sample skewness
  get sampleSkewness() {
    return sampleSkewness(this.real)
  }

  // 峭度 kurtosis
  get kurtosis() {
    return kurtosis(this.real)
  }

  // sample kurtosis
  get sampleKurtosis() {
    return sampleKurtosis(this.real)
  }

}
