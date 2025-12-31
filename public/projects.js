document.addEventListener("alpine:init", () => {
  Alpine.data("projectList", () => ({
    projects: [
      {
        id: 1,
        title: "Sistem Informasi Pengelolaan Masjid",
        desc: "Sistem manajemen kas, jadwal imam, dan kegiatan masjid berbasis web dengan notifikasi WA.",
        image: "images/projects/simas.webp",
        repoLink: "https://github.com/naufallevi/ci4-sistem-pengelolaan-masjid",
        techs: ["CodeIgniter 4", "PHP", "Bootstrap", "MySQL"],
      },
    ],
  }));
});
