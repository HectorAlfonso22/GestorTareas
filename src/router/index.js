import Vue from 'vue';
import VueRouter from 'vue-router';
import AgregarTarea from '../components/AgregarTarea.vue';
import ExtraerTareasAPI from '../components/ExtraerTareasAPI.vue';
import VistaCombinada from '../components/VistaCombinada.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/agregar-tarea',
    name: 'AgregarTarea',
    component: AgregarTarea
  },
  {
    path: '/extraer-tareas',
    name: 'ExtraerTareasAPI',
    component: ExtraerTareasAPI
  },
  {
    path: '/vista-combinada',
    name: 'VistaCombinada',
    component: VistaCombinada
  }
];

const router = new VueRouter({
  mode: 'history', // Usamos 'history' para quitar el '#' de la URL en vue-router@3
  routes
});

export default router;
