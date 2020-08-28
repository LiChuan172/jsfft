import { ComplexArray } from "./fft"
import { mean, max, rootMeanSquare } from "simple-statistics"

export default class Signal {
  constructor(complexArray, fs, domain = "time") {
    if (!complexArray instanceof ComplexArray) {
      throw new Error("complexArray must be an instance of ComplexArray")
    }
    this._complexArray = complexArray
    this._fs = fs
    this._domain = domain
  }
  FFT() {
    if (domain === "frequency") {
      throw new Error("Already in the frequency domain")
    } else {
      this.domain = "frequency"
      return this._complexArray.FFT()
    }
  }
  get fs() {
    return this._fs
  }
  set fs(fs) {
    this._fs = fs
  }

  get domain() {
    return this._domain
  }

  get length() {
    return this._complexArray.length
  }

  get real() {
    return  [...this._complexArray.real]
  }

  get mean() {
    return mean(this.real)
  }

  get peak() {
    return max(this.real)
  }

  get rms() {
    return rootMeanSquare(this.real)
  }

  get indicatorPeak() {
    return this.peak / this.rms
  }

  get indicatorPuls() {
    return this.peak / this.mean
  }

  get indicatorMargin() {
    return this.rms / this.mean
  }
  
}
