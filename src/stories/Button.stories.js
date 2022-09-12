import MyButton from '../components/AriButton.vue';

export default {
  title: 'Ariane/AriButton',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      type: { name: 'string', required: true },
      description: 'Intitulé du bouton',
      control: { type: 'text' }
    },
    outlined: {
      type: { name: 'boolean' },
      description: 'Passe le bouton en type "Outlined"',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
    },
    text: {
      type: { name: 'boolean' },
      description: 'Passe le bouton en type "Text"',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
    },
    small: {
      type: { name: 'boolean' },
      description: 'Passe la taille maximal du bouton au minimum',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
    },
    large: {
      type: { name: 'boolean' },
      description: 'Passe la taille maximal du bouton au maximum',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
    },
    icon: {
      type: { name: 'string', required: false },
      description: 'Icone',
      table: { type: { summary: 'font-awsome string' }, defaultValue: { summary: '' } },
      control: { type: 'text' }
    },
    disabled: {
      type: { name: 'boolean' },
      description: 'Passe le bouton en désactivé. IL n\'emittera plus @click mais @click-disabled',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: false } },
    },
    click: { action: 'click' },
    'click-disabled': { action: 'click-disabled' }
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Filled = Template.bind({});
Filled.args = {
  label: 'Filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined',
  outlined: true
};

export const Text = Template.bind({});
Text.args = {
  label: 'Text',
  text: true
};

export const withIcon = Template.bind({});
withIcon.args = {
  label: 'With Icon',
  icon: 'fa-plus'
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small',
  small: true
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large',
  large: true
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  label: '',
  icon: 'fa-plus'
};