import {
  BarChart3,
  Building2,
  Globe,
  KeyRound,
  Mail,
  Megaphone,
  MousePointerClick,
  Search,
  Settings,
  ShoppingCart,
} from "lucide-react";

export const googleHeroTags = [
  "Search Ads",
  "Display Ads",
  "Performance Max",
  "Lead Generation",
  "Keyword Targeting",
  "Conversion Tracking",
];

export const googleHeroStats = [
  { number: "01", label: "Research" },
  { number: "02", label: "Build" },
  { number: "03", label: "Launch" },
  { number: "04", label: "Optimize" },
];

export const overviewPoints = [
  "Keyword research based on buyer intent",
  "Google Search Ads campaign setup",
  "Ad copywriting and extension setup",
  "Conversion tracking and campaign optimization",
];

export const deliverables = [
  {
    icon: KeyRound,
    title: "Keyword Strategy",
    description: "We find high-intent search terms your customers use when they are ready to take action.",
    features: ["Buyer-intent keyword research", "Negative keyword planning", "Competitor keyword analysis"],
    button: "Get Keyword Plan",
  },
  {
    icon: Megaphone,
    title: "Campaign Setup",
    description: "We build structured Google Ads campaigns designed for relevance, clicks, and conversions.",
    features: ["Search campaign setup", "Ad group structure", "Ad copy and extensions"],
    button: "Build My Campaign",
  },
  {
    icon: BarChart3,
    title: "Tracking & Optimization",
    description: "We monitor performance, improve bids, reduce waste, and optimize campaigns for better ROI.",
    features: ["Conversion tracking review", "Search term analysis", "Budget and bid optimization"],
    button: "Optimize My Ads",
  },
];

export const processSteps = [
  { title: "Research", description: "We analyze your business, market, competitors, keywords, and advertising goals." },
  { title: "Build", description: "We create campaigns, ad groups, keywords, ads, extensions, and tracking setup." },
  { title: "Launch", description: "We publish campaigns and monitor early performance to reduce wasted spend." },
  { title: "Optimize", description: "We refine search terms, bids, budgets, ads, and targeting to improve results." },
];

export const audiences = [
  { icon: Building2, title: "Local Businesses", description: "Generate calls, bookings, and inquiries from people searching nearby." },
  { icon: ShoppingCart, title: "E-commerce Brands", description: "Promote products, improve shopping visibility, and increase online sales." },
  { icon: MousePointerClick, title: "Service Companies", description: "Capture high-intent leads for quotes, consultations, demos, and appointments." },
];

export const contactItems = [
  { icon: Globe, title: "Website", value: "https://googlegrowthads.com/" },
  { icon: Mail, title: "Email", value: "hello@googlegrowthads.com" },
  { icon: Settings, title: "Service", value: "Google Ads, Search Ads, Performance Max, keyword strategy, tracking, and optimization." },
];

export const heroIcon = Search;
