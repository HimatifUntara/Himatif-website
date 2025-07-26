<script setup>
const dosenList = [
  {
    nama: "Muhammad Nur Ikhsan, S.Kom., M.Eng",
    foto: "/images/dosen/Muhammad Nur Ikhsan, S.T.,M.Eng.jpg",
    bidang: "Dekan Fakultas Teknik",
    kontak: "mnurikhsan@untara.ac.id",
  },
  {
    nama: "Saryani.,S.Kom.,M.TI",
    foto: "/images/dosen/Saryani.,S.Kom.,M.TI.png",
    bidang: "Kaprodi Teknologi Informasi",
    kontak: "saryani@untara.ac.id",
  },
  {
    nama: "Fabio Junior.,S.Kom.,M.Kom",
    foto: "/images/dosen/Fabio Junior.,S.Kom.,M.Kom.png",
    bidang: "Dosen Teknologi Informasi",
    kontak: "fabioj@untara.ac.id",
  },
  {
    nama: "Irawan.,S.Kom.,M.Kom",
    foto: "/images/dosen/Irawan.,S.Kom.,M.Kom.png",
    bidang: "Dosen Teknologi Informasi",
    kontak: "irawan@untara.ac.id",
  },
  {
    nama: "Rika Nurhidayah.,S.Kom.,M.Kom",
    foto: "/images/dosen/Rika Nurhidayah.,S.Kom.,MM.png",
    bidang: "Dosen Teknologi Informasi",
    kontak: "rikanurhidayah@untara.ac.id",
  },
  {
    nama: "Kevin Septianzah, S.Kom.,M.Kom",
    foto: "/images/dosen/Kevin Septianzah, S.Kom.,M.Kom..jpg",
    bidang: "Dosen Teknologi Informasi",
    kontak: "kevins@untara.ac.id",
  },
  {
    nama: "Septa Febriyansyah.,S.M.,S.Kom.,M.Kom",
    foto: "/images/dosen/Septa Febriyansyah.,S.M.,S.Kom.,M.Kom.png",
    bidang: "Dosen Teknologi Informasi",
    kontak: "septaf@untara.ac.id",
  },
  {
    nama: "Amelia Sholikhaq, S.Kom.,M.Kom",
    foto: "/images/dosen/Amelia Sholikhaq, S.Kom.,M.Kom..jpg",
    bidang: "Dosen Teknologi Informasi",
    kontak: "amelias@untara.ac.id",
  },
  {
    nama: "R Wahyudi.,ST.,M.Kom",
    foto: "/images/dosen/R Wahyudi.,ST.,M.Kom.png",
    bidang: "Dosen Teknologi Informasi",
    kontak: "rwahyudi@untara.ac.id",
  },
  {
    nama: "Bambang Libriantoro,  S.Kom.,M.Kom",
    foto: "/images/dosen/Bambang Libriantoro,  S.Kom.,M.Kom.jpeg",
    bidang: "Dosen Teknologi Informasi",
    kontak: "bambangl@untara.ac.id",
  },
  {
    nama: "Ayi Krisnha W.A.N.,S.Kom.,M.Kom",
    foto: "/images/dosen/AYI KRISNHA W.A.N.jpg",
    bidang: "Dosen Teknologi Informasi",
    kontak: "ayikrisnha@untara.ac.id",
  },
  {
    nama: "Singgih mitro, s, S.T,M.T.",
    foto: "/images/dosen/Singgih mitro, s, S.T.,M.T.jpg",
    bidang: "Dosen Teknologi Informasi",
    kontak: "singgihm@untara.ac.id",
  },
  {
    nama: "Ahmad Deni Muttaqin, S.Kom.,M.S",
    foto: "/images/dosen/Ahmad Deni Muttaqin, S.Kom.,M.S.jpg",
    bidang: "Dosen Teknologi Informasi",
    kontak: "denim@untara.ac.id",
  },

  // Tambahkan data dosen lain sesuai kebutuhan
];
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-cosmos via-errie to-khaki py-16 px-4"
  >
    <h1
      class="text-3xl md:text-5xl font-bold text-center text-holy mb-12 drop-shadow-lg"
    >
      Dosen
      <span
        class="bg-gradient-to-r from-khaki to-cosmos bg-clip-text text-transparent"
        >Teknologi Informasi</span
      >
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
    >
      <div
        v-for="dosen in dosenList"
        :key="dosen.nama"
        class="relative bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl group"
      >
        <div
          class="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-khaki shadow-lg transition-all duration-500 group-hover:rotate-6 flex items-center justify-center bg-gray-200"
        >
          <img
            :src="dosen.foto"
            :alt="dosen.nama"
            class="object-cover w-full h-full"
            loading="lazy"
            @error="
              event.target.src =
                'https://ui-avatars.com/api/?name=' +
                encodeURIComponent(dosen.nama) +
                '&background=E0C97F&color=2E3A4D&size=128'
            "
          />
        </div>
        <h2 class="text-xl font-bold text-holy text-center mb-1">
          {{ dosen.nama }}
        </h2>
        <p class="text-cosmos text-sm mb-2 text-center">{{ dosen.bidang }}</p>
        <a
          :href="`mailto:${dosen.kontak}`"
          class="inline-block mt-2 px-4 py-1 rounded-full bg-khaki/80 text-cosmos font-semibold text-xs shadow hover:bg-cosmos hover:text-holy transition-colors duration-300"
        >
          {{ dosen.kontak }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-cosmos {
  background-color: #2e3a4d;
}
.bg-errie {
  background-color: #23272f;
}
.bg-khaki {
  background-color: #e0c97f;
}
.text-holy {
  color: #fffbe9;
}
.text-cosmos {
  color: #2e3a4d;
}
</style>
