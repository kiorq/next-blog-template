interface BlogConfig {
  baseUrl: string;
  name: string;
  mainSiteUrl: string;
  siteName: string;
  siteDescription: string;
  siteKeywords: string[];
  ogImage: string;
  favicon: string;
  appleTouchIcon: string;
  mainSiteLabel: string;
  logo: string;
  showGradientBackground: boolean;
  showMainSiteLink: boolean;
  showSocialLinks: boolean;
}

export default {
  baseUrl: "https://blog.loomletter.app",
  name: "LoomLetter",
  mainSiteUrl: "https://loomletter.app",
  siteName: "LoomLetter",
  siteDescription: `LoomLetter is your go-to newsletter reader app, bringing together all yo
ur favorite newsletters in one seamless, intuitive platform. Discover, read, and enjoy a c
urated reading experience like no other.`,
  siteKeywords: ["loomletter", "newsletter reader"],
  ogImage: "/og-image.png",
  favicon: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
  logo: "/logo.svg",
  showGradientBackground: true, // Set to false to disable the gradient background
  mainSiteLabel: "Back to Site",
} as BlogConfig;
