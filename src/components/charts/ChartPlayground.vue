<script setup>
import VueApexCharts from 'vue3-apexcharts'

const chartOptions = {
  chart: {
    id: 'vuechart-example',
    toolbar: {
      show: true,
    },
  },
  grid: {
    show: true,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    labels: {
      show: true,
    },
    axisBorder: {
      show: true,
      color: 'orange',
      height: 5,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    labels: {
      show: true,
    },
  },
  theme: {
    // eslint-disable-next-line no-undef
    mode: halfmoon.getPreferredMode() === 'dark-mode' ? 'dark' : 'light',
    palette: 'palette1',
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
  },
}

const series = [
  {
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41],
  },
]
</script>

<template>
  <div class="app">
    <VueApexCharts
      type="area"
      :options="chartOptions"
      :series="series"
      :height="550"></VueApexCharts>
  </div>
</template>
