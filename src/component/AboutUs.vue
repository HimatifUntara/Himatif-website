<script setup>
import { aboutUs } from '../composables/constants/AboutUs';
</script>

<template>
    <div class="mx-auto mb-[50px] hidden xl:flex lg:flex flex-col gap-5 items-center cursor-pointer justify-center mt-20">
        <div class="bg-holy w-[150px] h-2 bg-gradient-to-l from-khaki from-56% to-holy"></div>
        <span
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800, ease: 'easeOut' } }"
            class="bg-cosmos/50 text-holy p-2 rounded-full w-[130px] text-sm text-center"
        >About HIMATIF</span>

        <h1
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800, ease: 'easeOut' } }"
            class="text-holy font-bold lg:text-5xl"
        >About <span class="bg-cosmos bg-gradient-to-l from-cosmos from-56% to-khaki uppercase bg-clip-text text-transparent">Himatif</span></h1>
    </div>
    <div
        v-for="(about, index) in aboutUs"
        :key="index"
        class="hidden xl:flex lg:w-[1100px] justify-center items-center mx-auto rounded-md lg:flex flex-col xl:flex-row xl:gap-3 xl:rounded-none xl:border-none"
    >
        <div
            class="h-full overflow-hidden rounded-t-md xl:max-w-md xl:shadow-xl xl:rounded-md"
            :class="{'xl:order-2': index % 2 !== 0}"
        >
            <img
                :src="`/images/${about.image}`"
                :alt="`Image Preview of ${about.name}`"
                class="aspect-video rounded-t-md object-cover xl:rounded-md"
            >
        </div>
        <div>
            <p
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut' } }"
                :delay="500"
                :hovered="{ y: -8, transition: { duration: 150, ease: 'easeOut' } }" class="bg-cosmos/70 cursor-pointer text-holy lg:py-10 md:rounded-b-md lg:rounded-xl leading-7 p-4 shadow-blacky" >
                {{ about.description }}
            </p>
        </div>
    </div>

    <section class="lg:hidden xl:hidden mb-20 w-full h-auto sm:flex flex-col">
        <div class="mx-auto flex flex-col gap-4 items-center cursor-pointer justify-center mt-20">
            <div class="bg-holy w-[150px] h-2 bg-gradient-to-l from-khaki from-56% to-holy"></div>
            <span v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800, ease: 'easeOut' } }"
            class="bg-cosmos/50 text-holy p-2 rounded-full w-[130px] text-sm text-center">About HIMATIF</span>
            <h1 v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800, ease: 'easeOut' } }"
            class="text-holy text-3xl font-bold lg:text-5xl my-4">About <span class="bg-cosmos bg-gradient-to-l from-cosmos from-56% to-khaki uppercase bg-clip-text text-transparent">Himatif</span></h1>

            <div
                v-motion
                :initial="{ opacity: 0, x: -50 }"
                :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 1000, ease: 'easeInOut' } }"
                :delay="200"
                class="w-60 lg:w-[800px] h-auto text-holy bg-cosmos/70 shadow-blacky p-10 rounded-xl"
            >
                <p class="text-[10px] lg:text-xl"><strong class="text-khaki">HIMATIF</strong> adalah wadah pengembangan dan aspirasi Mahasiswa Teknologi Informasi yang tumbuh atas kesadaran dan rasa tanggung jawab sosial dari, oleh, dan untuk mahasiswa, khususnya di Universitas Tangerang Raya.</p>
            </div>

            <div
                v-motion
                :initial="{ opacity: 0, x: 50 }"
                :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 1000, ease: 'easeInOut' } }"
                :delay="400"
                class="w-60 lg:w-[800px] h-auto text-holy bg-cosmos/70 shadow-blacky p-5 rounded-xl"
            >
                <p class="text-[10px] lg:text-xl"> Sebagai entitas yang berdedikasi, <strong class="text-khaki">HIMATIF</strong> hadir sebagai organisasi kemahasiswaan. Organisasi ini memiliki peran penting, yaitu berada langsung di bawah naungan Badan Eksekutif Mahasiswa Fakultas Teknik, guna mendukung serta mengelola berbagai inisiatif dan program bagi seluruh Mahasiswa Teknologi Informasi.</p>
            </div>

            <div
                v-motion
                :initial="{ opacity: 0, x: -50 }"
                :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 1000, ease: 'easeInOut' } }"
                :delay="600"
                class="w-60 lg:w-[800px] h-auto text-holy bg-cosmos/70 shadow-blacky p-10 rounded-xl"
            >
                <p class="text-[10px] lg:text-xl">Sebagai perwakilan mahasiswa, <strong class="text-khaki">HIMATIF</strong> adalah organisasi utama untuk mahasiswa di Jurusan Teknologi Informasi. Kehadirannya sangat penting dalam mengatur berbagai kegiatan, program, dan ide-ide yang berhubungan langsung dengan kebutuhan serta pengembangan semua mahasiswa di jurusan ini.</p>
            </div>
        </div>
    </section>
</template>