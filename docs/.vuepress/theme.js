import { hopeTheme } from "vuepress-theme-hope";
import { sidebar } from "./sidebar.js";

export default hopeTheme({
  plugins: {
    blog: true,
    components: {
      components: [
        'SiteInfo',
        'VPCard',
        'Badge',
      ]
    }
  },
  blog: {
    name: "M1nu0x0",
    description: "삐약이 개발자의 블로그",
    star: true,
    medias: {
      GitHub: "https://github.com/M1nu0x0",
      Gmail: "mailto:minwoo.sejong@gmail.com",
    },
    // sidebarDisplay: "mobile",
  },

  displayFooter: true,
  footer: "© 2024. ~ M1nu0x0",
  logo: "/images/profile.png",

  markdown: {
    components: true,
    math: {
      type: "katex",
    },
    lineNumbers: false,
    codeTabs: true,
  },

  navbar: [
    { text: "Home", link: "/" },
    { text: "Posts", link: "/Posts" },
    { text: "Repos", link: "/Repos" },
    { text: "About", link: "/About" },
  ],
  sidebar,
  sidebarDepth: 2,
  sidebarAutoCollapse: true,

  darkMode: "toggle",
  backToTop: true,
});
