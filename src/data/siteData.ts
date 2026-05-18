import { BarChart3, Building2, CheckCircle2, Globe, Mail, PenTool, Search, Settings, ShoppingCart, Wrench } from "lucide-react";

export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Overview", href: "#overview" },
    { label: "Process", href: "#process" },
    { label: "Deliverables", href: "#deliverables" },
    { label: "Contact", href: "#contact" },
];

export const heroStats = [
    { title: "SEO", label: "Keyword Research" },
    { title: "Audit", label: "Technical SEO" },
    { title: "Growth", label: "On-page Optimization" },
];

export const dashboardBars = [
    { label: "Keyword Opportunity", value: 88 },
    { label: "Technical Health", value: 76 },
    { label: "Page Optimization", value: 92 },
];

export const roadmapItems = ["Research", "Optimize", "Rank", "Grow"];

export const deliverables = [
    {
        icon: Search,
        title: "Keyword Research",
        description: "We identify keywords your customers are searching for and organize them by intent, difficulty, and business value.",
        features: ["Primary keyword research", "Competitor keyword analysis", "Buyer-intent keyword mapping"],
        button: "Get Keyword Plan",
    },
    {
        icon: Wrench,
        title: "Technical SEO Audit",
        description: "We check your website’s technical health and find issues that may stop Google from crawling, indexing, or ranking your pages.",
        features: ["Site speed review", "Indexing and crawl checks", "Broken links and structure audit"],
        button: "Request SEO Audit",
    },
    {
        icon: PenTool,
        title: "On-page Optimization",
        description: "We optimize your website pages so they are easier to understand, rank, and convert visitors into leads.",
        features: ["Title and meta optimization", "Heading and content structure", "Internal linking improvements"],
        button: "Optimize My Pages",
    },
];

export const processSteps = [
    { title: "Research", description: "We analyze your business, customers, competitors, and keyword opportunities." },
    { title: "Audit", description: "We inspect your website for technical issues, content gaps, and ranking blockers." },
    { title: "Optimize", description: "We improve page structure, metadata, headings, content, and internal links." },
    { title: "Report", description: "We provide clear progress reports and next-step recommendations." },
];

export const audiences = [
    { icon: Building2, title: "Local Businesses", description: "Improve local visibility and appear when nearby customers search for your services." },
    { icon: ShoppingCart, title: "E-commerce Brands", description: "Optimize product, category, and content pages to attract buyers organically." },
    { icon: BarChart3, title: "Service Companies", description: "Rank for high-intent service keywords and turn organic traffic into leads." },
];

export const contactItems = [
    { icon: Globe, title: "Website", value: "https://pixelroute.com/" },
    { icon: Mail, title: "Email", value: "hello@pixelroute.com" },
    { icon: Settings, title: "Service", value: "SEO, keyword research, technical audit, and on-page optimization" },
];

export const overviewPoints = [
    "Keyword research based on buyer intent",
    "Technical SEO audit to find site problems",
    "On-page optimization for better rankings",
    "Clear SEO roadmap for long-term growth",
];