<script setup>
import StrukturMember from "../component/StrukturMember.vue";
import OurGallery from "../component/OurGallery.vue";
import Dosen from "../component/Dosen.vue";
import Footer from "../component/Footer.vue";
import { ref } from "vue";

// const OurGallery = defineAsyncComponent(() =>
// import ('../component/OurGallery.vue')
// );
// import {defineAsyncComponent, ref} from 'vue';

const sectionRefs = ref([]);
</script>

<template>
  <!-- after:content-[''] after:w-20 after:left-0 after:-z-110 after:animate-wiggle after:bg-cosmos after:h-20 after:absolute after:rounded-xl -->
  <section
    class="overflow-x-hidden w-full h-[680px] bg-Home bg-no-repeat bg-center bg-fixed bg-cover"
  >
    <div class="bg-black/75 h-full flex flex-col my-auto justify-center">
      <div
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
          transition: { duration: 2000, ease: 'easeOut' },
        }"
        :delay="300"
        class="relative mt-28 flex flex-row w-auto lg:mt-36 h-auto mx-auto gap-1 z-10"
      >
        <div
          class="w-10 h-10 animate-float absolute -z-10 lg:w-32 left-0 bg-cosmos bg-gradient-to-r from-cosmos from-56% to-khaki lg:h-32 rounded-2xl"
        ></div>
        <div
          class="w-10 h-10 animate-floates absolute -z-10 lg:w-32 right-0 bottom-0 bg-cosmos bg-gradient-to-l from-cosmos from-56% to-khaki lg:h-32 rounded-2xl"
        ></div>
        <img
          src="/public/images/untara.webp"
          alt="Universitas Tangerang Raya"
          class="w-[100px] h-fit lg:w-[170px]"
        />
        <img
          src="/public/images/LogoHimatif.webp"
          alt="Himatif Untara"
          class="w-[100px] h-fit lg:w-[170px]"
        />
        <img
          src="/public/images/Specta.webp"
          alt="Specta"
          class="w-[100px] h-fit lg:w-[170px]"
        />
      </div>
      <div class="text-holy text-center my-4">
        <h1
          v-motion
          :initial="{ opacity: 0, y: -100 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 2000, ease: 'easeOut' },
          }"
          :delay="400"
          class="font-bold text-3xl lg:text-7xl my-7 pb-2 bg-cosmos bg-gradient-to-r from-cosmos from-56% to-khaki bg-clip-text text-transparent"
        >
          Our Strength Lies In Our Team
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: { duration: 2000, ease: 'easeOut' },
          }"
          :delay="700"
          class="text-md"
        >
          Kami persembahkan jajaran kabinet HIMATIF yang penuh semangat!
          Bersama, kita kuatkan formasi dan wujudkan inovasi!
        </p>
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 2000, ease: 'easeOut' },
          }"
          :delay="500"
          class="mx-auto mt-10 w-fit h-fit bg-cosmos p-3 rounded-full animate-bounce"
        >
          <a href="#strukturmember" title="Scroll to Struktur Member">
            <IconCarbonArrowDown class="lg:w-8 h-auto"
          /></a>
        </div>
      </div>
    </div>
  </section>

  <!-- Struktur Member -->
  <section
    id="strukturmember"
    ref="sectionRefs[3]"
    class="w-full h-full lg:pb-[140px] py-5 bg-gradient-to-r from-khaki to-cosmos"
  >
    <StrukturMember />
  </section>

  <!-- Dosen -->
  <section id="dosen" ref="sectionRefs[5]">
    <Dosen />
  </section>

  <!-- Our Gallery -->
  <section
    id="ourGallery"
    ref="sectionRefs[4]"
    class="w-full h-full py-5 bg-errie [background:linear-gradient(90deg,_#AF9D80_0%,_#5E141B_50%,_#253A4A_80%)]"
  >
    <OurGallery />
  </section>

  <!-- Footer -->
  <Footer />
  <!-- <section id="ourGallery" ref="sectionRefs[3]" class="w-full h-full py-5 bg-errie [background:radial-gradient(circle,_rgba(28,31,35,1)_50%,_rgba(37,58,74,1)_100%)]">
        <SocialMedia />
    </section> -->
</template>
