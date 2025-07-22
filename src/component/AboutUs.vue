<script setup>
import { aboutUs } from '../composables/constants/AboutUs';
</script>

<template>
  <section class="mb-20 w-full h-auto flex flex-col items-center mt-20 px-4">
    <!-- Heading Section -->
    <div class="flex flex-col gap-4 items-center text-center">
      <div class="bg-holy w-[150px] h-2 bg-gradient-to-l from-khaki from-56% to-holy"></div>

      <span
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800, ease: 'easeOut' } }"
        class="bg-cosmos/50 text-holy p-2 rounded-full w-[130px] text-sm"
      >
        About HIMATIF
      </span>

      <h1
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800, ease: 'easeOut' } }"
        class="text-holy text-3xl lg:text-5xl font-bold"
      >
        About
        <span class="bg-gradient-to-l from-cosmos from-56% to-khaki uppercase bg-clip-text text-transparent">
          Himatif
        </span>
      </h1>
    </div>

    <!-- Description Cards -->
    <div
      v-for="(about, index) in aboutUs"
      :key="index"
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 800, ease: 'easeOut' } }"
      class="w-full max-w-3xl mt-10 text-holy bg-cosmos/70 shadow-blacky p-6 sm:p-8 rounded-xl"
    >
      <p class="text-sm sm:text-base text-justify leading-relaxed">
        {{ about.description }}
      </p>
    </div>
  </section>
</template>
