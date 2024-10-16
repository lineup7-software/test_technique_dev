<template>
  <div class="min-h-[100vh] w-full flex justify-center items-center">
    <div>
      <TableBase>
        <thead>
          <TableHeader data="Titre1" />
          <TableHeader data="Titre2" />
          <TableHeader data="Titre3" />
          <TableHeader data="Titre3" />
          <TableHeader data="Titre5" />
          <TableHeader data="Titre6" />
        </thead>
        <tbody>
          <tr>
            <TableRow data="Ligne1" />
            <TableRow data="Ligne1" />
            <TableRow data="Ligne1" />
            <TableRow data="Ligne1" />
            <TableRow data="Ligne1" />
            <TableRow data="Ligne1" />
          </tr>
          <tr>
            <TableRow data="Ligne2" />
            <TableRow data="Ligne2" />
            <TableRow data="Ligne2" />
            <TableRow data="Ligne2" />
            <TableRow data="Ligne2" />
            <TableRow data="Ligne2" />
          </tr>
        </tbody>
      </TableBase>
    </div>
  </div>
</template>

<script setup>
import {
  ref, onBeforeMount,
} from 'vue';
import TableBase from '@/components/TableBase.vue';
import TableHeader from '@/components/TableHeader.vue';
import TableRow from '@/components/TableRow.vue';

import axiosInstance from '@/services/axios/axiosInstances';

const axios = axiosInstance;

// À COMPLÉTER
</script>
