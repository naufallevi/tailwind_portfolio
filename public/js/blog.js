function blogMedium() {
  return {
    posts: [],

    fetchPosts() {
      fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mrshintaro")
        .then((res) => res.json())
        .then((data) => {
          this.posts = data.items.slice(0, 4).map((item) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(item.content, "text/html");
            const img = doc.querySelector("img");

            return {
              title: item.title,
              link: item.link,
              image: img ? img.src : "https://placehold.co/600x400",
              // date: new Date(item.pubDate).toDateString(),
              date: new Date(item.pubDate).toLocaleDateString("en-GB", {
                weekday: "short",
                day: "2-digit",
                month: "short",
                year: "numeric",
              }),
            };
          });
        });
    },
  };
}
