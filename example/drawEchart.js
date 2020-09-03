import echarts from "echarts"

export function drawEChart(element_id, signal) {
  const len = signal.length
  const dataShow = Array.from(signal.real).map((v, i) => [ (i * 10) / len, v])
  const chart = echarts.init(document.getElementById(element_id))
  const option = {
    xAxis: {
      min: 0,
      max: 10,
      axisLine: {
        onZero: false
      }
    },
    yAxis: {
      min: -0.5,
      max: 1.5,
      axisLine: {
        onZero: false
      }
    },
    series: [
      {
        type: "line",
        showSymbol: false,
        data: dataShow
      }
    ]
  }
  chart.setOption(option)
}
