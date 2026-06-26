export type Currency = 'USD' | 'EUR' | 'INR';

export type BillingCycle = 'monthly' | 'yearly';

export interface PlanBasePrice {
  base: number;
}

export interface PricingMatrix {
  Starter: PlanBasePrice;
  Pro: PlanBasePrice;
  Enterprise: PlanBasePrice;
}

export interface CalculatedPlanPrice {
  planName: string;
  originalPrice: number;
  finalPrice: number;
  currencySymbol: string;
  currencyCode: Currency;
  period: string;
}

export interface BentoCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  metric?: string;
  badgeText?: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
