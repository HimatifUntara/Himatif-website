<script setup>
import { reactive } from 'vue';
import { cards } from '../composables/constants/Vision';

const cardMotionProps = reactive({
    initial: { 
        opacity: 0, 
        y: 50
    },
    visibleOnce: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 700, 
            ease: 'easeOut' 
        } 
    },
    rest: { 
        y: 0, 
        transition: { 
            duration: 200, 
            ease: 'easeOut' 
        } 
    }, 
    hovered: { 
        y: -8,
        transition: { 
            duration: 200, 
            ease: 'easeOut' 
        } 
    },
});

</script>

<template>
    <div class="mx-auto mb-[50px] flex flex-col gap-5 items-center cursor-pointer justify-center mt-20">
        <div class="bg-holy w-[150px] h-2 bg-gradient-to-l from-khaki from-56% to-holy"></div>
        <h1
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800, ease: 'easeOut' } }"
            class="text-holy text-3xl font-bold lg:text-5xl"
        >Vision <span class="bg-cosmos bg-gradient-to-l from-cosmos from-56% to-khaki bg-clip-text text-transparent">& </span>Mision</h1>
        <div v-motion
            :initial="{ opacity: 0, y: -20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 600, duration: 900, ease: 'easeOut' } }" 
        class="bg-holy w-[100px] h-1 bg-gradient-to-l from-khaki from-56% to-holy"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div
            v-for="(card, index) in cards.slice(0, 2)"
            :key="index"
            v-motion
            :initial="cardMotionProps.initial"
            :visibleOnce="{ 
                ...cardMotionProps.visibleOnce, 
                transition: { 
                    ...cardMotionProps.visibleOnce.transition, 
                    delay: 100 * index // Tambahkan delay untuk efek staggered
                } 
            }"
            :rest="cardMotionProps.rest"
            :hovered="cardMotionProps.hovered"
            class="group p-6 h-72 cursor-pointer text-white rounded-xl bg-errie shadow-blacky transition-all duration-300 hover:bg-cosmos hover:text-white"
            :class="card.hover ? 'hover:-translate-y-2' : ''"
        >
            <h2 class="text-2xl font-bold mb-2">{{ card.title }}</h2>
            <p class="text-base">{{ card.text }}</p>
        </div>

        <div
            v-motion
            :initial="cardMotionProps.initial"
            :visibleOnce="{ 
                ...cardMotionProps.visibleOnce, 
                transition: { 
                    ...cardMotionProps.visibleOnce.transition, 
                    delay: 100 * 2 // Delay setelah card kedua (index 1)
                } 
            }"
            :rest="cardMotionProps.rest"
            :hovered="cardMotionProps.hovered"
            class="mb-[150px] lg:col-span-2 p-6 rounded-xl background-cosmos bg-gradient-to-r from-cosmos 30% to-errie text-white shadow-blacky text-sm lg:text-lg text-center"
        >
            <p>{{ cards[2].text }}</p>
        </div>
    </div>
</template>