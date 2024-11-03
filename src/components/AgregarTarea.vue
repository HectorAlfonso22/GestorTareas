<template>
    <div>
      <h2>Agregar Tarea</h2>
      <input v-model="nuevaTarea" placeholder="Escribe una tarea" />
      <button class="btn btn-primary" @click="agregarTarea">Agregar Tarea</button>
      <ul class="list-group mt-3">
        <li
          v-for="(tarea, index) in tareas"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span :class="{ 'text-decoration-line-through': tarea.completada }">
            {{ tarea.texto }} - {{ tarea.estado }}
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
  