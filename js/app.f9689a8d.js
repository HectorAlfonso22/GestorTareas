(function(){"use strict";var a={7552:function(a,t,e){var n=e(6848),r=function(){var a=this,t=a._self._c;return t("div",{staticClass:"container py-4",attrs:{id:"app"}},[a._m(0),t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary rounded shadow-sm mb-4"},[a._m(1),t("div",{staticClass:"collapse navbar-collapse justify-content-center",attrs:{id:"navbarNav"}},[t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"nav-item mx-2"},[t("router-link",{staticClass:"nav-link btn btn-outline-light px-4",attrs:{to:"/agregar-tarea"}},[a._v("Añadir Tarea")])],1),t("li",{staticClass:"nav-item mx-2"},[t("router-link",{staticClass:"nav-link btn btn-outline-light px-4",attrs:{to:"/extraer-tareas"}},[a._v("Extraer Tareas de la API")])],1),t("li",{staticClass:"nav-item mx-2"},[t("router-link",{staticClass:"nav-link btn btn-outline-light px-4",attrs:{to:"/vista-combinada"}},[a._v("Vista Combinada")])],1)])])]),t("div",{staticClass:"card shadow-lg p-4 rounded bg-light"},[t("router-view")],1)])},s=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"text-center"},[t("h1",{staticClass:"display-4 text-primary mb-4"},[a._v("Gestor de Tareas")]),t("p",{staticClass:"lead text-muted"},[a._v("Organiza tus tareas de forma sencilla y eficaz")])])},function(){var a=this,t=a._self._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],o={name:"App"},i=o,l=e(1656),c=(0,l.A)(i,r,s,!1,null,null,null),u=c.exports,d=e(6178),m=function(){var a=this,t=a._self._c;return t("div",[t("h2",[a._v("Agregar Tarea")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.nuevaTarea,expression:"nuevaTarea"}],attrs:{placeholder:"Escribe una tarea"},domProps:{value:a.nuevaTarea},on:{input:function(t){t.target.composing||(a.nuevaTarea=t.target.value)}}}),t("button",{staticClass:"btn btn-primary",on:{click:a.agregarTarea}},[a._v("Agregar Tarea")]),t("ul",{staticClass:"list-group mt-3"},a._l(a.tareas,(function(e,n){return t("li",{key:n,staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t("span",{class:{"text-decoration-line-through":e.completada}},[a._v(" "+a._s(e.texto)+" - "+a._s(e.estado)+" ")]),t("div",[t("button",{staticClass:"btn btn-success btn-sm",on:{click:function(t){return a.marcarCompletada(n)}}},[a._v(" Completado ")]),t("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){return a.eliminarTarea(n)}}},[a._v(" Eliminar ")])])])})),0)])},p=[],v={data(){return{nuevaTarea:"",tareas:[]}},methods:{agregarTarea(){this.nuevaTarea&&(this.tareas.unshift({texto:this.nuevaTarea,completada:!1,estado:"Pendiente"}),this.nuevaTarea="")},eliminarTarea(a){this.tareas.splice(a,1)},marcarCompletada(a){this.tareas[a].completada=!this.tareas[a].completada,this.tareas[a].estado=this.tareas[a].completada?"Completada":"Pendiente"}}},b=v,h=(0,l.A)(b,m,p,!1,null,null,null),f=h.exports,g=function(){var a=this,t=a._self._c;return t("div",[t("h2",[a._v("Extraer Tareas de la API")]),t("button",{staticClass:"btn btn-secondary",on:{click:a.obtenerTareas}},[a._v("Obtener Tareas de API")]),t("ul",{staticClass:"list-group mt-3"},a._l(a.tareas,(function(e,n){return t("li",{key:n,staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t("span",{class:{"text-decoration-line-through":e.completada}},[a._v(" "+a._s(e.title)+" - "+a._s(e.estado)+" ")]),t("div",[t("button",{staticClass:"btn btn-success btn-sm",on:{click:function(t){return a.marcarCompletada(n)}}},[a._v(" Completado ")]),t("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){return a.eliminarTarea(n)}}},[a._v(" Eliminar ")])])])})),0)])},C=[],_={data(){return{tareas:[]}},methods:{async obtenerTareas(){try{const a=await fetch("https://dummyjson.com/todos"),t=await a.json();this.tareas=t.todos.map((a=>({title:a.todo,completada:a.completed,estado:a.completed?"Completada":"Pendiente"})))}catch(a){console.error("Error al obtener las tareas:",a)}},eliminarTarea(a){this.tareas.splice(a,1)},marcarCompletada(a){this.tareas[a].completada=!this.tareas[a].completada,this.tareas[a].estado=this.tareas[a].completada?"Completada":"Pendiente"}}},T=_,x=(0,l.A)(T,g,C,!1,null,null,null),y=x.exports,k=function(){var a=this,t=a._self._c;return t("div",[t("h2",[a._v("Vista Combinada")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.nuevaTarea,expression:"nuevaTarea"}],attrs:{placeholder:"Escribe una tarea"},domProps:{value:a.nuevaTarea},on:{input:function(t){t.target.composing||(a.nuevaTarea=t.target.value)}}}),t("button",{staticClass:"btn btn-primary",on:{click:a.agregarTarea}},[a._v("Agregar Tarea")]),t("button",{staticClass:"btn btn-secondary",on:{click:a.obtenerTareas}},[a._v("Obtener Tareas de API")]),t("ul",{staticClass:"list-group mt-3"},a._l(a.tareas,(function(e,n){return t("li",{key:n,staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t("span",{class:{"text-decoration-line-through":e.completada}},[a._v(" "+a._s(e.todo||e.texto)+" - "+a._s(e.estado)+" ")]),t("div",[t("button",{staticClass:"btn btn-success btn-sm",on:{click:function(t){return a.marcarCompletada(n)}}},[a._v(" Completado ")]),t("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){return a.eliminarTarea(n)}}},[a._v(" Eliminar ")])])])})),0)])},w=[],A={data(){return{nuevaTarea:"",tareas:[]}},methods:{agregarTarea(){this.nuevaTarea&&(this.tareas.unshift({texto:this.nuevaTarea,completada:!1,estado:"Pendiente"}),this.nuevaTarea="")},async obtenerTareas(){try{const a=await fetch("https://dummyjson.com/todos"),t=await a.json(),e=t.todos.map((a=>({todo:a.todo,completada:a.completed,estado:a.completed?"Completada":"Pendiente"})));this.tareas=e.concat(this.tareas)}catch(a){console.error("Error al obtener las tareas:",a)}},eliminarTarea(a){this.tareas.splice(a,1)},marcarCompletada(a){this.tareas[a].completada=!this.tareas[a].completada,this.tareas[a].estado=this.tareas[a].completada?"Completada":"Pendiente"}}},P=A,j=(0,l.A)(P,k,w,!1,null,null,null),O=j.exports;n.Ay.use(d.Ay);const E=[{path:"/agregar-tarea",name:"AgregarTarea",component:f},{path:"/extraer-tareas",name:"ExtraerTareasAPI",component:y},{path:"/vista-combinada",name:"VistaCombinada",component:O}],I=new d.Ay({mode:"history",routes:E});var N=I;e(323);n.Ay.config.productionTip=!1,new n.Ay({router:N,render:a=>a(u)}).$mount("#app")}},t={};function e(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return a[n].call(s.exports,s,s.exports,e),s.exports}e.m=a,function(){var a=[];e.O=function(t,n,r,s){if(!n){var o=1/0;for(u=0;u<a.length;u++){n=a[u][0],r=a[u][1],s=a[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(e.O).every((function(a){return e.O[a](n[l])}))?n.splice(l--,1):(i=!1,s<o&&(o=s));if(i){a.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=a.length;u>0&&a[u-1][2]>s;u--)a[u]=a[u-1];a[u]=[n,r,s]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){var a={524:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var r,s,o=n[0],i=n[1],l=n[2],c=0;if(o.some((function(t){return 0!==a[t]}))){for(r in i)e.o(i,r)&&(e.m[r]=i[r]);if(l)var u=l(e)}for(t&&t(n);c<o.length;c++)s=o[c],e.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return e.O(u)},n=self["webpackChunkgestor_tareas"]=self["webpackChunkgestor_tareas"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(7552)}));n=e.O(n)})();
//# sourceMappingURL=app.f9689a8d.js.map