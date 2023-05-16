<template>
    <div>
<h1>Estoy en cripto view {{ criptoId }}</h1>
<router-link to="/cripto">Volver</router-link>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute} from 'vue-router'
const route = useRoute()
const criptoId = ref(null)

// watch(){
//     //si cambia el id

// }
onMounted(() => {
    //quiero hacer algo con el id
    criptoId.value = route.params.id
    //ir a servicio axios.get("criptos/${criptoId.value}")
})
</script>

<style scoped>

</style>