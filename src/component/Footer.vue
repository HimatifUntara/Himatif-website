<template>
  <footer class="bg-errie text-white py-10 px-6 text-center font-sans">
    <div class="max-w-screen-lg mx-auto flex flex-col items-center gap-6 pt-8 relative">

      <!-- Info Kampus -->
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-2.5">UNIVERSITAS TANGERANG RAYA</h3>
        <p class="leading-normal">Komp. Perum. Sudirman Indah</p>
        <p class="leading-normal">
          Jl. KI Mas Laeng No 25 Katomas Tigaraksa Kab. Tangerang
        </p>
      </div>

      <!-- Social Media -->
      <div class="text-center">
        <p class="mb-2.5 text-base">Follow Social Media Kami:</p>
        <div class="flex gap-3 justify-center pt-2.5 flex-wrap">
          <!-- WhatsApp -->
          <a
            href="https://wa.me/087773832234"
            target="_blank"
            aria-label="WhatsApp"
            class="text-holy text-xl border border-holy rounded-full w-12 h-12 flex justify-center items-center transition duration-300 hover:text-white hover:border-none hover:bg-gradient-to-br from-green-500 to-teal-500"
          >
            <IconSimpleIconsWhatsapp class="w-6 h-6" />
          </a>

          <!-- Instagram -->
          <a
            href="https://instagram.com/himatif.untara"
            target="_blank"
            aria-label="Instagram"
            class="text-white text-xl border border-white rounded-full w-12 h-12 flex justify-center items-center transition duration-300 hover:text-white hover:border-none hover:bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400"
          >
            <IconSimpleIconsInstagram class="w-6 h-6" />
          </a>

          <!-- YouTube -->
          <a
            href="https://youtube.com/himatif_untara"
            target="_blank"
            aria-label="YouTube"
            class="text-white text-xl border border-white rounded-full w-12 h-12 flex justify-center items-center transition duration-300 hover:text-white hover:border-none hover:bg-gradient-to-br from-red-600 to-black"
          >
            <IconSimpleIconsYoutube class="w-6 h-6" />
          </a>

          <!-- TikTok -->
          <a
            href="https://tiktok.com/@yourtiktokusername"
            target="_blank"
            aria-label="TikTok"
            class="text-white text-xl border border-white rounded-full w-12 h-12 flex justify-center items-center transition duration-300 hover:text-white hover:border-none hover:bg-gradient-to-br from-cyan-400 to-pink-500"
          >
            <IconSimpleIconsTiktok class="w-6 h-6" />
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center mt-4">
        <p class="text-sm uppercase">Copyright © HIMATIF UNTARA {{ currentYear }}</p>
        <p class="text-[10px] uppercase">made by litbang</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
