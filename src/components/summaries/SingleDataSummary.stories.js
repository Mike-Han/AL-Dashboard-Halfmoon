import SingleSummary from './SingleDataSummary.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Single Data Summary',
  component: SingleSummary,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    titleColour: {
      control: { type: 'select' },
      options: ['text-default', 'text-primary', 'text-success', 'text-secondary', 'text-danger'],
    },
    valueColour: {
      control: { type: 'select' },
      options: ['text-default', 'text-primary', 'text-success', 'text-secondary', 'text-danger'],
    },
    iconColour: {
      control: { type: 'select' },
      options: ['text-default', 'text-primary', 'text-success', 'text-secondary', 'text-danger'],
    },
    alignment: {
      control: { type: 'select' },
      options: ['text-left', 'text-center', 'text-right'],
    },
    accentDirection: {
      control: { type: 'select' },
      options: ['left', 'top', 'right', 'bottom'],
    },
    accentColour: {
      control: { type: 'select' },
      options: [
        'var(--default-color)',
        'var(--primary-color)',
        'var(--success-color)',
        'var(--secondary-color)',
        'var(--danger-color)',
      ],
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SingleSummary },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<single-summary v-bind="args" />',
})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  title: 'Title',
  value: '$10,000',
  alignment: 'text-left',
  accentDirection: 'left',
}
