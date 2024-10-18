
<script setup>

import Link from "@/components/link-item.vue";
import useImage from "@/composables/useImage";

const {url,fileChange,isImageUpload}= useImage()
</script>

<template>
    <div class="mx-10 mt-5">
        <div class="">
            <Link to="products">
                Productos
            </Link>
        </div>
        <div class="">
            <h1 class="text-3xl font-black text-black">Nuevo <span class="text-green-700">producto</span> </h1>
        </div>

    </div>


    <div class=" bg-gray-200 shadow-2xl mt-10 mx-10">
        <div class=" mt-10  w-full 2xl:w-2/4 flex justify-center">

            <FormKit
                color="primary"
                type="form"
                submit-label="Guardar producto"
                incomplete-message="Producto no guardado revisa los mensajes"
            >

            <FormKit
                type="text"
                label="Nombre"
                name="name"
                validation="required"
                :validation-messages="{required:'El nombre es obligatorio'}"
                placeholder="Ingresa el nombre del producto"
            />
            <FormKit
                type="file"
                label="Subir archivo "
                name="file"
                validation="required"
                :validation-messages="{required:'Archivo es obligatorio'}"
                accept=".jpg,.jpeg,.pn"
                @change="fileChange"
                
            />
            <div v-if="isImageUpload">
                <img :src="url" alt="Imagen del producto" class="w-40 h-40 object-cover" />

            </div>
            <FormKit
                type="select"
                label="Categoria"
                name="categori"
                validation="required"
                :validation-messages="{required:'Categoria es obligatorio'}"
                :options="[1,2,3,4]"
            />
            <FormKit
                type="number"
                label="Precio"
                name="price"
                placeholder="Ingresa el precio"
                validation="required"
                :validation-messages="{required:'El precio es obligatorio'}"
            />
            <FormKit
                type="number"
                label="Disponible"
                name="available"
                placeholder="Producto Dispnible"
                validation="required"
                :validation-messages="{required:'El producto es obligatorio'}"
                min="1"
                max="1000"
                
            />
            
            </FormKit>
        </div>

    </div>

</template>