// Define the configuration for the site
export const siteConfig = {
  title: "Astro Site Utils",
  description: "Astro + Tailwind CSS 4 + Daisy UI 5 project stater",
  githubRepo: "aholbreich/astrostart_TD"
};

// Feature flags examles
export const featureFlags = {
  enableBetaFeatures: false,
  enableImprint: false,
  enableDataprotection: false,
};

// Navigation menu items
export const nav = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Generate Hash",
    url: "/generate-hash",
  },
  {
    text: "404",
    url: "/404",
  },
  
];