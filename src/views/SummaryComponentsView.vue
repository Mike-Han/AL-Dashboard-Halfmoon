<script setup>
import MainContainer from '../components/utilities/MainContainer.vue'
import ContentContainer from '../components/utilities/ContentContainer.vue'
import SingleDataSummary from '../components/summaries/SingleDataSummary.vue'
import chart from '../components/charts/MinimalistChart.vue'

const chartHeight = '100px'
const sparklineData = [25, 35, 45, 65, 85]
const categories = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
const series = [
  {
    name: 'series1',
    data: randomizeArray(sparklineData),
  },
  {
    name: 'series2',
    data: randomizeArray(sparklineData),
  },
]
const series2 = randomizeArray(sparklineData)
const labels = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']

function randomizeArray(arg) {
  const array = arg.slice()
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
</script>

<template>
  <MainContainer>
    <ContentContainer :title="'Summary Components'">
      <p>
        Showcase of the summary components available in
        <img
          src="/img/painel-dark.png"
          class="hidden-lm h-25 align-middle"
          alt="painel labs" />
        <img
          src="/img/painel-light.png"
          class="hidden-dm h-25 align-middle"
          alt="painel labs" />
      </p>
    </ContentContainer>

    <ContentContainer :title="'Component: Single Data Summary'">
      <div class="row">
        <div class="col">
          <h6 class="mt-0">
            <code class="code p-5">components/summaries/SingleDataSummary.vue</code>
          </h6>
        </div>
      </div>

      <div class="row">
        <div class="col-md">
          <SingleDataSummary
            class="ml-0 mr-10"
            :title="'Summary 1'"
            :value="'$10,000'"
            :alignment="'text-left'"
            :accentDirection="'left'" />
        </div>
        <div class="col-md">
          <SingleDataSummary
            class="mx-5"
            :title="'Summary 2'"
            :titleColour="'text-primary'"
            :value="'( $20,000 )'"
            :valueColour="'text-danger'"
            :accentDirection="'top'"
            :accentColour="'var(--secondary-color)'" />
        </div>
        <div class="col-md">
          <SingleDataSummary
            class="mx-5"
            :title="'Summary 3'"
            :value="'$30,000'"
            :icon="'bi bi-gem'"
            :alignment="'text-right'"
            :accentDirection="'right'"
            :accentColour="'var(--success-color)'" />
        </div>
        <div class="col-md">
          <SingleDataSummary
            class="ml-5 mr-0"
            :title="'Summary 4'"
            :titleColour="'text-secondary'"
            :value="'$40,000'"
            :valueColour="'text-success'"
            :icon="'bi bi-currency-bitcoin'"
            :iconColour="'text-primary'"
            :accentDirection="'bottom'"
            :accentColour="'var(--danger-color)'" />
        </div>
      </div>
    </ContentContainer>

    <ContentContainer :title="'Component: Single Data Summary with Minimalist Chart'">
      <div class="row">
        <div class="col">
          <h6 class="mt-0">
            <code class="code p-5">components/summaries/SingleDataSummary.vue</code>
            <code class="code p-5">components/charts/MinimalistChart.vue</code>
          </h6>
          <h6 class="mt-0"></h6>
        </div>
      </div>

      <div class="row mt-10">
        <div class="col-md">
          <SingleDataSummary
            class="ml-0 mr-10"
            :title="'Line Chart'"
            :alignment="'text-left'"
            :accentDirection="'bottom'"
            :accentColour="'var(--primary-color)'">
            <chart
              :series="series"
              :categories="categories"
              :height="chartHeight"
              :type="'line'" />
          </SingleDataSummary>
        </div>

        <div class="col-md">
          <SingleDataSummary
            class="ml-0 mr-10"
            :title="'Area Chart'"
            :alignment="'text-left'"
            :accentDirection="'bottom'"
            :accentColour="'var(--success-color)'">
            <chart
              :series="series"
              :categories="categories"
              :height="chartHeight"
              :type="'area'"
              :palette="'palette2'" />
          </SingleDataSummary>
        </div>

        <div class="col-md">
          <SingleDataSummary
            class="ml-0 mr-10"
            :title="'Bar Chart'"
            :alignment="'text-left'"
            :accentDirection="'left'"
            :accentColour="'var(--secondary-color)'">
            <chart
              :series="series"
              :categories="categories"
              :height="chartHeight"
              :type="'bar'"
              :stacked="true"
              :barHorizontal="true"
              :palette="'palette3'" />
          </SingleDataSummary>
        </div>

        <div class="col-md">
          <SingleDataSummary
            class="ml-0 mr-10"
            :title="'Column Chart'"
            :alignment="'text-left'"
            :accentDirection="'bottom'"
            :accentColour="'var(--danger-color)'">
            <chart
              :series="series"
              :categories="categories"
              :height="chartHeight"
              :type="'bar'"
              :stacked="true"
              :palette="'palette4'" />
          </SingleDataSummary>
        </div>
      </div>

      <div class="row mt-10">
        <div class="col-md">
          <SingleDataSummary
            class="ml-0 mr-10"
            :title="'Pie Chart'"
            :alignment="'text-left'"
            :accentDirection="'top'"
            :accentColour="'var(--primary-color)'">
            <chart
              :series="series2"
              :height="chartHeight"
              :type="'pie'"
              :labels="labels"
              :palette="'palette5'" />
          </SingleDataSummary>
        </div>

        <div class="col-md">
          <SingleDataSummary
            class="ml-0 mr-10"
            :title="'Donut Chart'"
            :alignment="'text-left'"
            :accentDirection="'top'"
            :accentColour="'var(--success-color)'">
            <chart
              :series="series2"
              :height="chartHeight"
              :type="'donut'"
              :labels="labels"
              :palette="'palette6'" />
          </SingleDataSummary>
        </div>

        <div class="col-md">
          <SingleDataSummary
            class="ml-0 mr-10"
            :title="'Radial Bar'"
            :alignment="'text-left'"
            :accentDirection="'top'"
            :accentColour="'var(--secondary-color)'">
            <chart
              :series="series"
              :height="chartHeight"
              :type="'bar'"
              :labels="labels"
              :palette="'palette7'" />
          </SingleDataSummary>
        </div>

        <div class="col-md">
          <SingleDataSummary
            class="ml-0 mr-10"
            :title="'Polar Area'"
            :alignment="'text-left'"
            :accentDirection="'top'"
            :accentColour="'var(--danger-color)'">
            <chart
              :series="series2"
              :height="chartHeight"
              :type="'polarArea'"
              :stacked="true"
              :palette="'palette8'" />
          </SingleDataSummary>
        </div>
      </div>
    </ContentContainer>
  </MainContainer>
</template>
