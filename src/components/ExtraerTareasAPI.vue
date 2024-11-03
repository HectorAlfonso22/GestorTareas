<template>
    <div>
      <h2>Extraer Tareas de la API</h2>
      <button class="btn btn-secondary" @click="obtenerTareas">Obtener Tareas de API</button>
      <ul class="list-group mt-3">
        <li
          v-for="(tarea, index) in tareas"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span :class="{ 'text-decoration-line-through': tarea.completada }">
            {{ tarea.title }} - {{ tarea.estado }}
          </span>
          <div>
            <button class="btn btn-success btn-sm" @click="marcarCompletada(index)">
              Completado
            </button>
            <button class="btn btn-danger btn-sm" @click="eliminarTarea(index)">
              Eliminar
            </button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tareas: []
      };
    },
    methods: {
      async obtenerTareas() {
        try {
          const response = await fetch('https://dummyjson.com/todos');
          const data = await response.json();
          this.tareas = data.todos.map((tarea) => ({
            title: tarea.todo,
            completada: tarea.completed,
            estado: tarea.completed ? 'Completada' : 'Pendiente'
          }));
        } catch (error) {
          console.error('Error al obtener las tareas:', error);
        }
      },
      eliminarTarea(index) {
        this.tareas.splice(index, 1);
      },
      marcarCompletada(index) {
        this.tareas[index].completada = !this.tareas[index].completada;
        this.tareas[index].estado = this.tareas[index].completada ? 'Completada' : 'Pendiente';
      }
    }
  };
  </script>
  