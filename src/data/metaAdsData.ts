import {
    BarChart3,
    Building2,
    Globe,
    Image,
    Mail,
    Megaphone,
    MousePointerClick,
    Settings,
    ShoppingCart,
    Target,
} from "lucide-react";

export const metaHeroTags = [
    "Facebook Ads",
    "Instagram Ads",
    "Lead Generation",
    "Retargeting",
    "Ad Creative",
    "Conversion Tracking",
];

export const metaHeroStats = [
    { number: "01", label: "Research" },
    { number: "02", label: "Launch" },
    { number: "03", label: "Optimize" },
    { number: "04", label: "Scale" },
];

export const overviewPoints = [
    "Audience research and campaign strategy",
    "Facebook and Instagram ad setup",
    "Creative testing and copywriting",
    "Retargeting and conversion optimization",
];

export const deliverables = [
    {
        icon: Target,
        title: "Campaign Strategy",
        description: "We plan your ad campaigns based on your goals, audience, offer, and budget.",
        features: [
            "Goal-based campaign planning",
            "Audience and competitor research",
            "Funnel and offer strategy",
        ],
        button: "Get Ad Strategy",
    },
    {
        icon: Image,
        title: "Ad Creative & Copy",
        description: "We create ad ideas, visuals, and copy designed to attract attention and clicks.",
        features: [
            "Ad copywriting",
            "Creative direction",
            "A/B testing concepts",
        ],
        button: "Create My Ads",
    },
    {
        icon: BarChart3,
        title: "Tracking & Optimization",
        description: "We monitor performance and optimize campaigns for stronger results.",
        features: [
            "Pixel and event tracking review",
            "Campaign performance analysis",
            "Budget and audience optimization",
        ],
        button: "Optimize Campaigns",
    },
];

export const processSteps = [
    {
        title: "Research",
        description: "We analyze your business, audience, competitors, offer, and goals.",
    },
    {
        title: "Build",
        description: "We set up campaigns, audiences, creatives, copy, budgets, and tracking.",
    },
    {
        title: "Launch",
        description: "We publish campaigns and monitor early performance closely.",
    },
    {
        title: "Optimize",
        description: "We test new angles, improve ads, and scale what works.",
    },
];

export const audiences = [
    {
        icon: Building2,
        title: "Local Businesses",
        description: "Generate calls, bookings, and inquiries from nearby customers.",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Brands",
        description: "Promote products, recover visitors, and increase online sales.",
    },
    {
        icon: MousePointerClick,
        title: "Service Companies",
        description: "Generate qualified leads for quotes, demos, appointments, and consultations.",
    },
];

export const contactItems = [
    {
        icon: Globe,
        title: "Website",
        value: "https://metaproads.com/",
    },
    {
        icon: Mail,
        title: "Email",
        value: "hello@metaproads.com",
    },
    {
        icon: Settings,
        title: "Service",
        value: "Facebook Ads, Instagram Ads, strategy, creative, tracking, and optimization.",
    },
];

export const heroIcon = Megaphone;