<script setup>
import { reactive } from 'vue';
import { OurGallery } from '../composables/constants/OurGallery';

const cardBaseClasses = 'relative rounded-lg overflow-hidden group shadow-md shadow-black/30 cursor-pointer';
const imageClasses = 'w-full h-48 object-cover transition-transform duration-300 ease-out group-hover:scale-105';

const cardMotionProps = reactive({
    initial: { opacity: 0, y: 50 },
    visibleOnce: { opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut' } },
    rest: { y: 0, transition: { duration: 200, ease: 'easeOut' } }, // Untuk kembali setelah hover
    hovered: { y: -8, transition: { duration: 200, ease: 'easeOut' } }, // Card naik saat hover
});

// const textOverlayMotionProps = reactive({
//     initial: { y: 20, opacity: 0 },
//     hovered: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut', delay: 0.05 } },
//     rest: { y: 20, opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } },

// });

const textOverlayMotionProps = reactive({
    initial: {
    y: 20,
    opacity: 0
    },
    hovered: {
    y: 0,
    opacity: 1,
    transition: {
        duration: 0.3,
        ease: 'easeOut',
        delay: 0.05
    }
    },
    rest: {
    y: {
    type: 'spring',
    stiffness: 200,
    damping: 25
    },
    opacity: {
    duration: 0.2
    }
}
});

const reactiveGalleryItems = reactive(OurGallery);
</script>

<template>
    <div class="mx-auto mb-[50px] flex flex-col gap-5 items-center cursor-pointer justify-center mt-20">
        <div class="bg-holy w-[150px] h-2 bg-gradient-to-l from-khaki from-56% to-holy"></div>
        <h1
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800, ease: 'easeOut' } }"
            class="text-holy text-3xl font-bold lg:text-5xl"
        >Our <span class="bg-cosmos bg-gradient-to-l from-cosmos from-56% to-khaki bg-clip-text text-transparent">Gallery</span></h1>
        <div v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 600, duration: 900, ease: 'easeOut' } }" 
        class="bg-holy w-[100px] h-1 bg-gradient-to-l from-khaki from-56% to-holy"></div>
        <p v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 700, duration: 1000, ease: 'easeOut' } }"
        class="text-center text-[13px] w-[300px] lg:text-[16px] lg:w-[700px] my-5 text-holy">
            Sebuah potret dinamika HIMATIF Universitas Tangerang Raya, menampilkan dokumentasi kegiatan dan kenangan tak ternilai yang mengilustrasikan upaya berkelanjutan kami dalam memajukan potensi mahasiswa Teknologi Informasi.
        </p>
    </div>

    <div class="mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div
        v-for="(item, index) in reactiveGalleryItems"
        :key="item.id"
        v-motion
        :initial="cardMotionProps.initial"
        :visibleOnce="{ ...cardMotionProps.visibleOnce, transition: { ...cardMotionProps.visibleOnce.transition, delay: 100 * index } }"
        :rest="cardMotionProps.rest"
        :hovered="cardMotionProps.hovered"
        :class="cardBaseClasses"
    >
        <img :src="item.src" :alt="item.alt" :class="imageClasses" />
        
        <div v-motion
        :initial="textOverlayMotionProps.initial"
        :hovered="textOverlayMotionProps.hovered"
        :rest="textOverlayMotionProps.rest"
        class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t  from-black/80 to-transparent text-white text-xl lg:text-2xl font-semibold flex items-end h-full z-10 
        opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
    <span class="text-center">{{ item.title }}</span>
        </div>
    </div>
    </div>
    </div>
</template>