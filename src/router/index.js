import { createRouter, createWebHashHistory } from 'vue-router'
//Para realizar la creacion de ruta protegida es necesario hacer este import
import { getAuth } from 'firebase/auth'
import Login from '@/views/Login.vue'
import Table from '@/views/Table.vue'
import HomeViewVue from '@/views/HomeView.vue'

const auth = getAuth();

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: HomeViewVue,
    //Indicamos que requiere usar el guardian de autenticacion
    meta: { requiresAuth: true }
  },
  {
    path: '/table',
    name: 'table',
    component: Table,
   meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//Esta parte de el codigo es el guardian de autenticacion, comprueba que se ha iniciado sesion previamente
router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('/');
  } else {
    next();
  }
});

export default router; 