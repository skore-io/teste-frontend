export default {
  mode: "universal",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,700;1,800&display=swap"
      }
    ]
  },
  loading: { color: "#fff" },
  plugins: ["~/plugins/axios"],
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: "https://us-central1-teste-frontend-c2dcc.cloudfunctions.net"
  },
  build: {
    extend(config, ctx) {}
  },
  transition: { name: "page", mode: "out-in" }
};
