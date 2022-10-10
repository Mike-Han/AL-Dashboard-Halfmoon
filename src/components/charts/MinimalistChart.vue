<script setup>
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  series: {
    type: Array,
    require: true,
  },
  categories: {
    type: Array,
    default: () => [],
  },
  type: {
    type: String,
    default: 'area',
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
  stacked: {
    type: Boolean,
    default: false,
  },
  barHorizontal: {
    type: Boolean,
    default: false,
  },
  palette: {
    type: String,
    default: 'palette1',
  },
  labels: {
    type: Array,
    default: () => [],
  },
})

const chartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    stacked: props.stacked,
    sparkline: {
      enabled: true,
    },
    background: 'transparent',
  },
  plotOptions: {
    bar: {
      horizontal: props.barHorizontal,
    },
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: props.categories,
  },
  labels: props.labels,
  theme: {
    // eslint-disable-next-line no-undef
    mode: halfmoon.getPreferredMode() === 'dark-mode' ? 'dark' : 'light',
    palette: props.palette,
  },
}
</script>

<template>
  <div class="app">
    <VueApexCharts
      :type="type"
      :options="chartOptions"
      :series="series"
      :width="width"
      :height="height" />
  </div>
</template>
