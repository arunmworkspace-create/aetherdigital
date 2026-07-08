import { ServiceItem, TeamMember, Testimonial, BentoItem } from './types';

export const ASSETS = {
  kochiWorkspace: '/src/assets/images/kochi_workspace_1783436590801.jpg',
  arjunNair: '/src/assets/images/arjun_nair_1783436611430.jpg',
  meeraJoseph: '/src/assets/images/meera_joseph_1783436626173.jpg',
  kiranVarma: '/src/assets/images/kiran_varma_1783436643551.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    shortDescription: 'Engineered for conversion, scaled through mathematical rigor.',
    fullDescription: 'Our Performance Marketing service is built on quantitative analytics. We do not run ads simply to get clicks; we design complete conversion architectures that drive high-value client acquisitions and massive ROAS.',
    iconName: 'TrendingUp',
    metrics: {
      value: '+142%',
      label: 'Average ROAS Increase',
    },
    features: [
      'Multi-channel ad architectures (Meta, Google, LinkedIn)',
      'Custom audience segmentation & predictive funnel mapping',
      'Systematic split-testing of ad creatives & landing page UX',
      'Real-time attribution modeling and data pipelines',
    ],
  },
  {
    id: 'search-mastery',
    title: 'SEO & Search Mastery',
    shortDescription: 'Dominating rankings through advanced semantic mapping.',
    fullDescription: 'Dominate organic search result pages. We go beyond simple keyword density to map intent clusters, design deep semantic content hubs, and build high-quality domain authority that search engine algorithms naturally reward.',
    iconName: 'Search',
    metrics: {
      value: '3.4M+',
      label: 'Organic Traffic Generated',
    },
    features: [
      'Technical SEO audits, Schema markup & Core Web Vitals profiling',
      'Semantic keyword clustering & high-authority topical siloing',
      'Ethical, high-impact editorial link acquisition',
      'Hyper-localized SEO strategies for Kerala, Middle East, and beyond',
    ],
  },
  {
    id: 'creative-strategy',
    title: 'Creative Strategy & Visuals',
    shortDescription: 'Attention-grabbing creative backed by deep behavioral insights.',
    fullDescription: 'Aesthetic visual design that drives measurable real-world action. We merge high-end digital design with performance copywriting to craft scroll-stopping social ads, landing pages, and cinematic brand assets.',
    iconName: 'Sparkles',
    metrics: {
      value: '15M+',
      label: 'Ad Impressions Delivered',
    },
    features: [
      'Performance-driven ad design and high-click copy suites',
      'High-converting landing page UI/UX engineered for response',
      'Short-form video assets, custom animations & static graphics',
      'Cohesive design systems ensuring brand consistency across channels',
    ],
  },
  {
    id: 'social-ecosystems',
    title: 'Social Ecosystems',
    shortDescription: 'Unifying organic presence and paid scaling into one system.',
    fullDescription: 'Social media is not just about posting; it is about building a cohesive client ecosystem. We coordinate organic social storytelling with sophisticated paid ad amplification to keep your brand top-of-mind.',
    iconName: 'Share2',
    metrics: {
      value: '+84%',
      label: 'Average Engagement Lift',
    },
    features: [
      'Social-first narrative development & episodic content planning',
      'Community building, active monitoring & brand sentiment analysis',
      'Smart amplification models for high-performing organic posts',
      'Collaborative creator/influencer identification & alignment',
    ],
  },
];

export const BENTO_ITEMS: BentoItem[] = [
  {
    title: 'Data-Driven Precision',
    description: 'We replace guesswork with rigorous testing. Every single rupee of your media budget is tracked, measured, and optimized for actual business revenue, not empty vanity metrics.',
    tag: 'No Fluff',
    iconName: 'BarChart3',
    className: 'md:col-span-2',
  },
  {
    title: 'Local Roots, Global Standards',
    description: 'Based out of Kochi, we understand the cultural nuances and market dynamics of Kerala, while maintaining the precise execution quality demanded by global partners.',
    tag: 'Kerala Advantage',
    iconName: 'MapPin',
    className: 'md:col-span-1',
  },
  {
    title: 'Velocity-First Execution',
    description: 'Speed is our defining competitive advantage. We draft creative copy, build high-converting landing pages, and launch search campaigns in days, not months.',
    tag: 'Hyper-Speed',
    iconName: 'Zap',
    className: 'md:col-span-1',
  },
  {
    title: 'Guaranteed Growth Focus',
    description: 'We align our interests completely with yours. Our scope is purely focused on the metrics that shift your bottom line: qualified pipelines, robust leads, and active revenue.',
    tag: 'ROI Focused',
    iconName: 'ShieldCheck',
    className: 'md:col-span-2',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Arjun Nair',
    role: 'Co-founder & Managing Partner',
    bio: 'Arjun has scaled multiple brands to 8-figures using quantitative, data-first media buying strategies. He leads media strategy and growth modeling at AetherDigital.',
    avatarUrl: ASSETS.arjunNair,
    linkedinUrl: '#',
  },
  {
    name: 'Meera Joseph',
    role: 'Creative Director',
    bio: 'Meera is a designer and visual storyteller who merges modern minimalistic design structures with deep, narrative-driven copy. She heads creative production.',
    avatarUrl: ASSETS.meeraJoseph,
    linkedinUrl: '#',
  },
  {
    name: 'Kiran Varma',
    role: 'Director of Search & Analytics',
    bio: 'Kiran is an organic search architect with over 12 years of experience. He deciphers search engine algorithm updates to design unbeatable topical authority structures.',
    avatarUrl: ASSETS.kiranVarma,
    linkedinUrl: '#',
  },
];

export const MAIN_TESTIMONIAL: Testimonial = {
  quote: "AetherDigital did not just run ads for us; they fundamentally re-architected our customer acquisition pipeline. Their deep understanding of both local Kerala dynamics and global scaling frameworks is peerless. Our digital presence has never been this strong.",
  author: "Ananthakrishnan R.",
  role: "Chief Executive Officer",
  company: "Malabar Tech Solutions",
  stats: {
    value: '+84%',
    label: 'Increase in Qualified Pipeline',
  },
};
