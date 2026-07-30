export type RedditLink = {
  id: string
  title: string
  subreddit: string
  author: string
  votes: number
  comments: number
  url: string
  thumbnail: string
  tags: string[]
  savedAt: string
  domain: string
}

export const ALL_TAGS = [
  "programación",
  "ciencia",
  "espacio",
  "gaming",
  "tecnología",
  "noticias",
  "datos",
  "interesante",
  "leer después",
  "favorito",
]

export const MOCK_LINKS: RedditLink[] = [
  {
    id: "1",
    title: "I built a Python tool that automatically refactors legacy code using LLMs — open source and surprisingly effective",
    subreddit: "r/programming",
    author: "u/devhacker42",
    votes: 48200,
    comments: 1340,
    url: "https://github.com/example/llm-refactor",
    thumbnail: "/previews/r-programming.png",
    tags: ["programación", "tecnología", "favorito"],
    savedAt: "2025-06-08",
    domain: "github.com",
  },
  {
    id: "2",
    title: "James Webb Space Telescope captures unprecedented image of two galaxies merging 4.6 billion light-years away",
    subreddit: "r/space",
    author: "u/cosmos_watcher",
    votes: 132900,
    comments: 2870,
    url: "https://nasa.gov/webb-galaxies",
    thumbnail: "/previews/r-space.png",
    tags: ["espacio", "ciencia", "interesante"],
    savedAt: "2025-06-07",
    domain: "nasa.gov",
  },
  {
    id: "3",
    title: "After 6 years of development, Kingdom: The Last Age finally released — and it's everything fans hoped for",
    subreddit: "r/gaming",
    author: "u/gamer_lord_99",
    votes: 87500,
    comments: 5620,
    url: "https://reddit.com/r/gaming/1234",
    thumbnail: "/previews/r-gaming.png",
    tags: ["gaming", "favorito"],
    savedAt: "2025-06-06",
    domain: "reddit.com",
  },
  {
    id: "4",
    title: "Scientists discover new mechanism that allows CRISPR to edit genes 40x more precisely without off-target effects",
    subreddit: "r/science",
    author: "u/biotech_reader",
    votes: 62100,
    comments: 980,
    url: "https://nature.com/articles/crispr-precision",
    thumbnail: "/previews/r-science.png",
    tags: ["ciencia", "interesante", "leer después"],
    savedAt: "2025-06-05",
    domain: "nature.com",
  },
  {
    id: "5",
    title: "How I went from zero to landing a $180k data science job in 14 months — my honest breakdown",
    subreddit: "r/datascience",
    author: "u/ds_journey_2024",
    votes: 29800,
    comments: 1450,
    url: "https://medium.com/datascience-career",
    thumbnail: "/previews/r-datascience.png",
    tags: ["datos", "programación", "leer después"],
    savedAt: "2025-06-04",
    domain: "medium.com",
  },
  {
    id: "6",
    title: "Major breakthrough in solid-state battery technology achieves 900Wh/kg energy density — production ready by 2027",
    subreddit: "r/worldnews",
    author: "u/tech_news_fan",
    votes: 155300,
    comments: 7820,
    url: "https://theguardian.com/technology/battery-2027",
    thumbnail: "/previews/r-worldnews.png",
    tags: ["tecnología", "noticias", "interesante"],
    savedAt: "2025-06-03",
    domain: "theguardian.com",
  },
]
