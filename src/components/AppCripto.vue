<template>
  <input type="radio" id="rank" v-model="orden" :value="1" />
  <label for="rank">Ordenar por ranking</label>
  <input type="radio" id="name" v-model="orden" :value="2" />
  <label for="name">Ordenar por nombre</label>
  <p
    v-for="(cripto, index) in listaFiltrada"
    :key="index"
    :class="{ top3: index <= 2 }"
  >
    {{ cripto.name }} {{ cripto.changePercent24Hr > 0 ? "⬆️" : "⬇️" }}
  </p>
</template>

<script setup>
import axios from "axios";
import { ref, computed, onMounted } from "vue";
const lista = ref([]);
const orden = ref(1); //1 es por "rank" y 2 por "name"

const listaFiltrada = computed(() => {
  return lista.value.sort((a, b) => {
    if (orden.value === 1) {
      return a.rank - b.rank; //son numericas, asi que se pueden restar. Sort ordena segun si la comparacion da positivo, negativo o cero.
    } else {
      return a.name.localeCompare(b.name); //para los string no podemos restar.
    }
  });
});

onMounted(async () => {
  const respuesta = await axios.get(
    "https://api.coincap.io/v2/assets?limit=10"
  );
  lista.value = respuesta.data.data; //esto lo obtengo mirando lo que devuelve el servicio.
});
</script>
<style>
.top3 {
  color: forestgreen;
}
</style>
