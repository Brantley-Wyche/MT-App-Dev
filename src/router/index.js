
import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from '@/components/HelloWorld'
import ChooseLocation from '@/components/ChooseLocation'

const routes = [
    {
      path: "/",
      name: "Home",
      component: HelloWorld,
    },
    {
      path: "/location",
      name: "Location",
      component: ChooseLocation,
    },
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;