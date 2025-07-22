<script setup>
import { ref, computed, watch } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { divisions } from '../composables/constants/StrukturMember';

const selectedDivision = ref(divisions[0]);
const offset = ref(0);
const isHovered = ref(false);
const imageWidth = 320; // 300px width + margin

useIntervalFn(() => {
  if (!isHovered.value) {
    offset.value = (offset.value - 1) % (selectedDivision.value.images.length * imageWidth);
  }
}, 16); // smoother, ~60fps

watch(selectedDivision, () => {
  offset.value = 0;
});
</script>

<template>
<section class="pb-20">
    <!-- <div class="mx-auto mb-10 flex flex-col gap-5 items-center justify-center mt-20">
    <h1 class="text-holy text-3xl font-bold lg:text-5xl">
        <span class="bg-cosmos bg-gradient-to-l from-cosmos from-56% to-khaki bg-clip-text text-transparent">Explore </span>Our Cabinet
    </h1>
    <p class="text-center text-[13px] w-[300px] lg:text-[16px] lg:w-[700px] my-5 text-holy">
        Temukan Individu-Individu Yang Membuat Organisasi Berkembang
    </p>
    </div> -->

    <div class="mx-auto mb-[50px] flex flex-col gap-5 items-center cursor-pointer justify-center mt-20">
        <div class="bg-holy w-[300px] h-2 bg-gradient-to-l from-khaki from-56% to-holy"></div>
        <h1
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800, ease: 'easeOut' } }"
            class="text-holy text-3xl font-bold lg:text-5xl"
        ><span class="bg-cosmos bg-gradient-to-l from-cosmos from-56% to-khaki bg-clip-text text-transparent">Explore </span>Our Cabinet</h1>
        <div v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 600, duration: 900, ease: 'easeOut' } }" 
        class="bg-holy w-[100px] h-1 bg-gradient-to-l from-khaki from-56% to-holy"></div>
        <p v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 700, duration: 1000, ease: 'easeOut' } }"
        class="text-center text-[13px] w-[300px] lg:text-[16px] lg:w-[700px] my-5 text-holy">
            Temukan Individu-Individu Yang Membuat Organisasi Berkembang
        </p>
    </div>

    <!-- Tombol Divisi -->
    <div class="flex flex-wrap justify-center gap-3 mb-10">
    <button
        v-for="division in divisions"
        :key="division.name"
        @click="selectedDivision = division"
        class="px-4 py-2 text-holy rounded-lg border transition-all duration-300"
        :class="{
        'bg-khaki text-holy': selectedDivision.name === division.name,
        'hover:bg-khaki hover:text-holy': selectedDivision.name !== division.name
        }"
    >
        {{ division.name }}
    </button>
    </div>

    <!-- Auto Slide Carousel -->
    <div class="scroll-smooth relative overflow-hidden max-w-6xl mx-auto px-4 group">
    <div
        class="flex transition-transform duration-1000 ease-linear"
        :style="{ transform: `translateX(${offset}px)` }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        >
        <template v-for="(img, index) in selectedDivision.images.concat(selectedDivision.images)" :key="index">
        <div class="flex bg-errie rounded-md flex-col items-center mx-2 flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
            <img
                :src="img.src"
                :alt="img.name"
                class="w-[300px] h-[300px] object-cover rounded-t-md"
            />
            <p class="mt-2 text-center text-sm font-medium text-holy/70">{{ img.name }}</p>
            </div>
        </template>
    </div>
    <div class="pointer-events-none absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-errie/90 via-errie/70 to-transparent"></div>
    <div class="pointer-events-none absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-errie/90 via-errie/70 to-transparent"></div>
    </div>
</section>
</template>

<style scoped>
</style>
