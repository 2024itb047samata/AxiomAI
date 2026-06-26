import { BentoCard, Testimonial, FAQItem } from '../types';

export const COMPANIES = [
  { name: 'Aether', logo: 'Aether' },
  { name: 'Stripe', logo: 'Stripe' },
  { name: 'Vercel', logo: 'Vercel' },
  { name: 'Linear', logo: 'Linear' },
  { name: 'Retool', logo: 'Retool' },
  { name: 'Supabase', logo: 'Supabase' },
];

export const BENTO_FEATURES: BentoCard[] = [
  {
    id: 'feature-1',
    title: 'Cognitive Ingestion',
    subtitle: 'Zero-schema setup',
    description: 'Instantly ingest unstructured files, logs, and APIs. Our model automatically maps data fields, formats types, and flags anomalies in micro-seconds.',
    tag: 'Ingest',
    metric: '99.98% Acc.',
    badgeText: 'Instant',
    iconName: 'DatabaseZap',
  },
  {
    id: 'feature-2',
    title: 'Neural Transform',
    subtitle: 'No-code pipeline building',
    description: 'Build robust data transformation flows using natural language commands. Simply write "Join stream and mask PII" to deploy resilient production microservices.',
    tag: 'Transform',
    metric: '<1.2ms Latency',
    badgeText: 'AI Powered',
    iconName: 'Cpu',
  },
  {
    id: 'feature-3',
    title: 'Autonomous Quality',
    subtitle: 'Real-time drift detection',
    description: 'Continuous validation against data drift, skew, and missing values. Automatically rolls back schemas or notifies Slack before downstream pipelines break.',
    tag: 'Validate',
    metric: 'Auto-Recover',
    badgeText: 'Self Healing',
    iconName: 'ShieldAlert',
  },
  {
    id: 'feature-4',
    title: 'Elastic Orchestration',
    subtitle: 'Auto-scaling workflows',
    description: 'Serverless execution of DAG pipelines that dynamically scales resources based on volume spikes. Never pay for idle cloud compute nodes.',
    tag: 'Deploy',
    metric: '75% Cost Reduction',
    badgeText: 'Scale-to-Zero',
    iconName: 'Workflow',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'VP of Data Engineering',
    company: 'FinSphere',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    quote: 'Axiom AI eliminated 90% of our manual ETL writing. Our data engineers now build complex transformation logic in seconds using natural language.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Aris Thorne',
    role: 'Principal Architect',
    company: 'LogixFlow',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    quote: 'The bento-to-accordion layout and state persistence is clean, but the autonomous quality agent is the real hero. It detected an API payload change and self-healed our schema instantly.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Chief Technology Officer',
    company: 'Aetheris',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    quote: 'Running multi-region pipelines with local-currency pricing in INR and EUR is incredible. We halved our infrastructure spend while boosting speed by 4x.',
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does the AI understand our schema without training?',
    answer: 'Axiom AI utilizes our proprietary foundation models trained specifically on semi-structured and structural data dialects. It performs semantic type inference in real-time to generate self-documenting catalog schemas without human intervention.',
  },
  {
    id: 'faq-2',
    question: 'Is my data secure and compliant?',
    answer: 'Yes, fully. Axiom AI is SOC 2 Type II, HIPAA, and GDPR compliant. By default, pipelines can run inside your private cloud (VPC) via our hybrid agent architecture. We never store or train on your proprietary raw datasets.',
  },
  {
    id: 'faq-3',
    question: 'How does the billing multiplier and regional PPP pricing work?',
    answer: 'We compute prices dynamically based on your country and billing cycle. Customers in markets like India (INR) receive adjusted regional pricing (PPP multiplier) to align with local market scales. Choosing yearly billing locks in an additional 20% discount on all plans.',
  },
  {
    id: 'faq-4',
    question: 'Can we build custom data connectors?',
    answer: 'Absolutely. Axiom AI supports importing raw Swagger/OpenAPI files or DB connectors. Our platform auto-generates custom parser nodes and ingestion drivers immediately.',
  },
];
