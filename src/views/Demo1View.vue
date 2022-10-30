<script setup>
import MainContainer from '../components/utilities/MainContainer.vue'
import CardContainer from '../components/utilities/CardContainer.vue'
import { ref } from 'vue'

const response = ref('')

const opts = {
  headers: {
    mode: 'cors',
  },
}

const res = await fetch(
  'https://k2.alrighty.sg/api/odatav4/v4/Adventure_Works_Sales_vSalesPersonSalesByFiscalYears_1',
  opts
)

const data = await res.json()

if (!res.ok) {
  response.value = `An error has occured: ${res.status} - ${res.statusText}`
}

const result = {
  status: res.status + '-' + res.statusText,
  headers: {
    'Content-Type': res.headers.get('Content-Type'),
    'Content-Length': res.headers.get('Content-Length'),
  },
  data: data,
}

response.value = JSON.stringify(result, null, 2)
</script>

<template>
  <MainContainer>
    <CardContainer :title="'Demo 1 - Fetching Data'" />
    Response = {{ response }}
  </MainContainer>
</template>
