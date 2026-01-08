document.addEventListener("alpine:init", () => {
  Alpine.data("journeyList", () => ({
    studies: [
      {
        id: 1,
        title: "SMK Gondang Wonopringgo",
        desc: "Computer and Network Engineering",
        date: "Jun 2017 - Mar 2020",
        techs: ["Cisco", "Mikrotik", "Web Server (Linux)"],
      },
      {
        id: 2,
        title: "Institut Widya Pratama",
        desc: "Informatics Engineering (3.94 GPA)",
        date: "Sep 2021 - Nov 2025",
        techs: ["PHP", "CodeIgniter", "MySQL", "Python", "Dart", "Flutter", "Machine Learnig","Internet Of Things", "Cloud Computing", "Database Management"],
      },
    ],
    works: [
      {
        id: 1,
        title: "PT Adeaksa Indo Jayatama",
        job: "Network Engineer (Intern)",
        desc: "Assisted with LAN/WAN network installation, CCTV system setup, technical troubleshooting, and monthly customer billing for small to medium sized clients.",
        date: "Apr 2019 - Jun 2019",
        techs: ["Network Troubleshooting", "IT Support", "CCTV Installation", "Customer Support"],
      },
      {
        id: 2,
        title: "Dinas Komunikasi dan Informatika Kabupaten Pekalongan",
        job: "Web Developer (Intern)",
        desc: "Contributed to the E-Government team by supporting website development, handling administrative correspondence, documenting technical and project progress, and developing the SIMPAN SPBE system (Laravel 8) and an internal Helpdesk application (CodeIgniter 4).",
        date: "Mar 2024 - Jun 2024",
        techs: ["PHP", "Laravel", "CodeIgniter", "Technical Documentation"],
      },
    ]
  }));
});