import { PricingMatrix, Currency } from '../types';

export const pricingMatrix: PricingMatrix = {
  Starter: {
    base: 49,
  },
  Pro: {
    base: 99,
  },
  Enterprise: {
    base: 199,
  },
};

export const currencyConfig: Record<Currency, { symbol: string; rate: number; regionalMultiplier: number }> = {
  USD: {
    symbol: '$',
    rate: 1.0,
    regionalMultiplier: 1.0,
  },
  EUR: {
    symbol: '€',
    rate: 0.92,
    regionalMultiplier: 1.0,
  },
  INR: {
    symbol: '₹',
    rate: 83.0,
    regionalMultiplier: 0.4, // PPP Adjustment for Indian market
  },
};

export const YEARLY_DISCOUNT = 0.2; // 20% discount
