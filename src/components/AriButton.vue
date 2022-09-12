<script lang="ts"> export default { name: 'AriButton' } </script>
<template>
  <button type="button" :class="[classes, buttonType, buttonSize]" @click="onClick()">
    <i :class="'fas ' + icon" v-if="icon && icon.length > 0" />
    <span v-if="label">{{ label }}</span>
  </button>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  interface Props {
    label?: string,
    outlined?: boolean,
    text?: boolean,
    small?: boolean,
    large?: boolean,
    icon?: string,
    disabled?: boolean
  }
  // Définition des Events & Props
  const props = defineProps<Props>();
  const emit = defineEmits({
    click: () => true,
    'click-disabled': () => true
  });

  // We're checking if our props are valid
  if (!props.label && !props.icon) throw new Error('Buttons must have at least a Label or an Icon Props !');
  

  // CSS generation
  const buttonType = computed(() => {
    if (props.outlined) return 'outlined';
    else if (props.text) return 'text';
    else return 'filled';
  });
  const buttonSize = computed(() => {
    if (!props.label) return 'no-label';
    if (props.small) return 'small';
    else if (props.large) return 'large';
    else return 'medium';
  })
  const classes = computed (() => ({
    'ariane-button': true,
    'ariane-button-disabled': props.disabled,
    'ariane-button-icon': props.icon && props.icon.length > 0
  }));

  // Event generations
  function onClick () {
    if (props.disabled) emit('click-disabled');
    else emit('click');
  }
</script>

<style>
  /* Classes Partagées */
  button.ariane-button {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  button.ariane-button:hover {
    opacity: 0.5;
  }
  button.ariane-button-disabled {
    cursor: default;
  }
  button.ariane-button-disabled:hover {
    opacity: 1 !important;
  }
  button.ariane-button-bordered {
    height: 31px;
    border-radius: 3px;
    border: 1px solid;
    @apply border-main-primary
  }
  .filled, .outlined  {
    @apply ariane-button-bordered;
  }
  /* Filled */
  button.filled {
    color: #fff;
    @apply bg-main-primary border-main-primary;
  }
  button.filled.ariane-button-disabled {
    @apply bg-main-text-disabled border-main-text-disabled;
  }
  /* Outlined */
  button.outlined {
    background-color: transparent;
    @apply border-main-primary text-main-primary;
  }
  button.outlined.ariane-button-disabled {
    @apply text-main-text-disabled border-main-text-disabled;
  }
  /* Text */
  button.text {
    @apply text-main-primary;
  }
  button.text.ariane-button-disabled {
    @apply text-main-text-disabled;
  }
  /* Size */
  button.small {
    width: 100px;
    @apply text-sm;
    padding: 8px 0px;
  }
  button.small.ariane-button-icon {
    @apply text-xs;
  }
  button.medium {
    width: 150px;
    @apply text-base;
    padding: 8px 15px;
  }
  button.medium.ariane-button-icon {
    @apply text-sm;
  }
  button.large {
    width: 200px;
    padding: 8px 25px;
    @apply text-lg;
  }
  button.large.ariane-button-icon {
    @apply text-base;
  }
  @media (max-width: 768px) {
    button.small {
      width: 80px;
      @apply text-xs
    }
    button.medium {
      width: 120px;
      @apply text-sm;
    }
    button.large {
      width: 170px;
      @apply text-base;
    }
    
  }
  button.no-label {
    padding: 8px;
  }

  /* ANIMATION */
.ripple {
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  transform: scale(0);
  position: absolute;
  opacity: 1;
}
.ripple-effect {
    animation: ripple .4s linear;
}

@keyframes ripple {
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>