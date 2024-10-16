<template>
  <th
    scope="col"
    class="truncate whitespace-nowrap text-center sticky top-0 z-10 border-b customBorder border-spacing-0 border-separate border-gray-300 bg-gray-50 py-3.5 pl-3 pr-3 text-sm font-semibold text-gray-900"
  >
    <p>
      {{ props.data }}
    </p>
  </th>
</template>

<script setup>
const props = defineProps(['data']);
</script>
