function blogMedium() {
  return {
    posts: [],

    fetchPosts() {
      fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mrshintaro")
        .then((res) => res.json())
        .catch((error) => {
          console.error("Gagal mengambil postingan:", error);
          this.error = true;
        })
        .then((data) => {
          this.posts = data.items.slice(0, 4).map((item) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(item.content, "text/html");
            const img = doc.querySelector("img");

            return {
              title: item.title,
              link: item.link,
              image: img ? img.src : "https://placehold.co/600x400",
              alt: item.title,
              // date: new Date(item.pubDate).toDateString(),
              date: new Date(item.pubDate).toLocaleDateString("en-GB", {
                weekday: "short",
                day: "2-digit",
                month: "short",
                year: "numeric",
              }),
            };
          });
          setTimeout(() => {
            if (window.location.hash) {
              const element = document.querySelector(window.location.hash);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }
          }, 300); // Delay 300ms
        });
    },
  };
}
