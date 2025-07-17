<script setup>
import AboutUs from '../component/AboutUs.vue';
import {ref} from 'vue';

const sectionRefs = ref([]);

</script>

<template>
    <!-- after:content-[''] after:w-20 after:left-0 after:-z-110 after:animate-wiggle after:bg-cosmos after:h-20 after:absolute after:rounded-xl -->
    <section class="overflow-x-hidden w-full h-[680px] bg-Home bg-no-repeat bg-center bg-fixed bg-cover">
        <div class="bg-black/90 h-full flex flex-col my-auto justify-center">
            <div v-motion
                :initial="{ opacity: 0, x: -100 }"
                :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 2000, ease: 'easeOut' } }"
                :delay="300"
                class="relative mt-28 flex flex-row w-auto lg:mt-36 h-auto mx-auto gap-1 z-10">
                <div class=" w-10 h-10 animate-float absolute -z-10 lg:w-32 left-0 bg-cosmos bg-gradient-to-r from-cosmos from-56% to-khaki lg:h-32 rounded-2xl"></div>
                <div class="w-10 h-10 animate-floates absolute -z-10 lg:w-32 right-0 bottom-0 bg-cosmos bg-gradient-to-l from-cosmos from-56% to-khaki lg:h-32 rounded-2xl"></div>
                <img src="/public/images/LogoHimatif.png" alt="Himatif Untara" class="w-[100px] h-fit lg:w-[170px]">
                <img src="/public/images/untara.png" alt="Universitas Tangerang Raya" class="w-[100px] h-fit lg:w-[170px]">
            </div>
            <div 
                class="text-holy text-center my-4">
                <h1 v-motion
                :initial="{ opacity: 0, y: -100 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 2000, ease: 'easeOut' } }"
                :delay="400"
                class="font-bold text-3xl lg:text-7xl my-7 pb-2 bg-cosmos bg-gradient-to-r from-cosmos from-56% to-khaki bg-clip-text text-transparent">
                    Selamat Datang
                </h1>
                <p v-motion
                :initial="{ opacity: 0, x: 100 }"
                :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 2000, ease: 'easeOut' } }"
                :delay="700"
                class="text-md">Website Resmi Himpunan Mahasiswa Teknologi Informasi Universitas Tangerang Raya</p>
                <div v-motion
                :initial="{ opacity: 0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 2000, ease: 'easeOut' } }"
                :delay="500"
                class="mx-auto mt-10 w-fit h-fit bg-cosmos p-3 rounded-full animate-bounce">
                    <IconCarbonArrowDown  class="lg:w-8 h-auto"/>
                </div>
            </div>
        </div>
    </section>
    <section id="aboutUs" ref="sectionRefs[1]" class="bg-errie h-auto">
    <div>
        <div class="grid mx-auto grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-6">
            <AboutUs />
        </div>
    </div>
</section>
</template>