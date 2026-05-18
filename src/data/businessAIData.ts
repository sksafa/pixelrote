import {
  Bot,
  Brain,
  BriefcaseBusiness,
  Building2,
  Globe,
  Mail,
  Rocket,
  Settings,
  Workflow,
  Zap,
} from "lucide-react";

export const businessAIHeroTags = [
  "AI Chatbots",
  "Workflow Automation",
  "CRM Automation",
  "Lead Management",
  "AI Assistants",
  "System Integration",
];

export const businessAIHeroStats = [
  { number: "01", label: "Audit" },
  { number: "02", label: "Map" },
  { number: "03", label: "Build" },
  { number: "04", label: "Automate" },
];

export const overviewPoints = [
  "Business workflow audit and automation planning",
  "AI chatbot and assistant setup",
  "CRM, lead, and follow-up automation",
  "Tool integrations, reporting, and process optimization",
];

export const deliverables = [
  {
    icon: Brain,
    title: "AI Workflow Strategy",
    description:
      "We review your current processes and identify where AI and automation can save the most time.",
    features: [
      "Workflow and task audit",
      "Automation opportunity map",
      "Tool and system recommendations",
    ],
    button: "Get AI Strategy",
  },
  {
    icon: Workflow,
    title: "Automation Setup",
    description:
      "We build automated workflows that connect your apps, forms, CRM, email, and internal systems.",
    features: [
      "Lead capture automation",
      "Email and follow-up workflows",
      "CRM and task automation",
    ],
    button: "Build Automation",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description:
      "We create AI-powered assistants that help answer questions, collect leads, and support customers.",
    features: [
      "Website chatbot setup",
      "FAQ and lead qualification flows",
      "Internal AI assistant setup",
    ],
    button: "Create AI Assistant",
  },
];

export const processSteps = [
  {
    title: "Audit",
    description:
      "We review your current workflows, tools, repetitive tasks, and bottlenecks.",
  },
  {
    title: "Map",
    description:
      "We design automation flows and choose the best AI tools and integrations.",
  },
  {
    title: "Build",
    description:
      "We create automations, chatbot flows, CRM updates, forms, and system connections.",
  },
  {
    title: "Improve",
    description:
      "We test the system, fix issues, train your team, and improve workflows over time.",
  },
];

export const audiences = [
  {
    icon: Building2,
    title: "Local Businesses",
    description:
      "Automate inquiries, bookings, follow-ups, reminders, and customer communication.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Service Companies",
    description:
      "Capture leads, qualify prospects, update CRMs, and automate sales follow-ups.",
  },
  {
    icon: Rocket,
    title: "Growing Teams",
    description:
      "Reduce admin work, connect tools, improve reporting, and create smoother operations.",
  },
];

export const contactItems = [
  {
    icon: Globe,
    title: "Website",
    value: "https://aiautomatepro.com/",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@aiautomatepro.com",
  },
  {
    icon: Settings,
    title: "Service",
    value:
      "Business AI, workflow automation, AI chatbots, CRM automation, lead routing, and system integrations.",
  },
];

export const heroIcon = Zap;
