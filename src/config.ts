export const SITE = {
  website: "https://eliane-orlandin.github.io/",
  author: "Eliane Orlandin",
  profile: "https://github.com/Eliane-orlandin",
  desc: "Blog de tecnologia com notícias selecionadas, explicadas de forma simples e direta, sempre com referência à fonte.",
  title: "Eliane's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Sugerir edição",
    url: "https://github.com/Eliane-orlandin/meu-blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "pt-BR",
  timezone: "America/Sao_Paulo",
} as const;
