<template>
    <div>
      <h2>Vista Combinada</h2>
      <input v-model="nuevaTarea" placeholder="Escribe una tarea" />
      <button class="btn btn-primary" @click="agregarTarea">Agregar Tarea</button>
      <button class="btn btn-secondary" @click="obtenerTareas">Obtener Tareas de API</button>
      <ul class="list-group mt-3">
        <li
          v-for="(tarea, index) in tareas"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span :class="{ 'text-decoration-line-through': tarea.completada }">
            {{ tarea.todo || tarea.texto }} - {{ tarea.estado }}
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
        nuevaTarea: '',
        tareas: []
      };
    },
    methods: {
      agregarTarea() {
        if (this.nuevaTarea) {
          this.tareas.unshift({ texto: this.nuevaTarea, completada: false, estado: 'Pendiente' });
          this.nuevaTarea = '';
        }
      },
      async obtenerTareas() {
        try {
          const response = await fetch('https://dummyjson.com/todos');
          const data = await response.json();
          const nuevasTareas = data.todos.map((tarea) => ({
            todo: tarea.todo,
            completada: tarea.completed,
            estado: tarea.completed ? 'Completada' : 'Pendiente'
          }));
          this.tareas = nuevasTareas.concat(this.tareas);
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
  