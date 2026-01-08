document.addEventListener("alpine:init", () => {
  Alpine.data("projectList", () => ({
    projects: [
      {
        id: 1,
        title: "Mosque Management Information System",
        desc: "A web-based system for cash management, complaint handling, and mosque activities.",
        image: "images/projects/simas.webp",
        repoLink: "https://github.com/naufallevi/ci4-sistem-pengelolaan-masjid",
        techs: ["CodeIgniter 4", "PHP", "Bootstrap", "MySQL"],
      },
      {
        id: 2,
        title: "Automatic Irrigation System Using Arduino",
        desc: "An automatic plant watering device that measures soil moisture and irrigates plants based on the moisture level.",
        image: "images/projects/iot-penyiraman.webp",
        repoLink: "#projects",
        techs: ["Internet Of Things", "Arduino"],
      },
      // {
      //   id: 1,
      //   title: "Sistem Informasi Pengelolaan Masjid",
      //   desc: "Sistem manajemen kas, sarana pengaduan, dan kegiatan masjid berbasis web.",
      //   image: "images/projects/simas.webp",
      //   repoLink: "https://github.com/naufallevi/ci4-sistem-pengelolaan-masjid",
      //   techs: ["CodeIgniter 4", "PHP", "Bootstrap", "MySQL"],
      // },
      // {
      //   id: 2,
      //   title: "Sistem Penyiraman Otomatis Menggunakan Arduino",
      //   desc: "Alat penyiraman tanaman otomatis yang dapat mengukur kelembaban tanah dan menyiram tanaman sesuai kelembaban",
      //   image: "images/projects/iot-penyiraman.webp",
      //   repoLink: "#projects",
      //   techs: ["Internet Of Things", "Arduino"],
      // },
    ],
  }));
});
