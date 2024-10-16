import { createRouter, createWebHistory } from 'vue-router';
import EditMe from '@/views/EditMe.vue';

const routes = [
  {
    path: '',
    name: 'Home',
    component: EditMe,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
