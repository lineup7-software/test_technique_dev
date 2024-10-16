<template>
  <td
    class="py-6 pl-4 pr-4 text-sm text-gray-900 text-center text-ellipsis break-words"
  >
    {{ props.data }}
  </td>
</template>

<script setup>
const props = defineProps(['data']);
</script>
