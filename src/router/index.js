
import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from '@/components/HelloWorld'
import LocationPicker from '@/components/LocationPicker'

const routes = [
    {
      path: "/",
      name: "Home",
      component: HelloWorld,
    },
    {
      path: "/location",
      name: "Location",
      component: LocationPicker,
    },
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;