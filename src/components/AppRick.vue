<template>
  <input type="text" v-model="busqueda" />
  <p v-for="(personaje, index) in personajesFiltrados" :key="index">
    {{ personaje.name }}
  </p>
</template>

<script setup>
import axios from "axios";
import { ref, computed, onMounted } from "vue";
const busqueda = ref("");
const personajes = ref([]);

//esta propiedad va a estar siempre escuchando los cambios en "busqueda" y va a actuaizar el filtro.
const personajesFiltrados = computed(() => {
  return personajes.value.filter(
    (personaje) =>
      personaje.name.toLowerCase().includes(busqueda.value.toLowerCase()) //llevamos todo a minuscula para comparar.
  );
});

onMounted(async () => {
  const respuesta = await axios.get(
    "https://rickandmortyapi.com/api/character"
  );
  personajes.value = respuesta.data.results; //esto lo obtengo mirando lo que devuelve el servicio.
});
</script>
