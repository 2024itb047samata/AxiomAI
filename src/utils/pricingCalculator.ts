import { Currency, BillingCycle, CalculatedPlanPrice } from '../types';
import { pricingMatrix, currencyConfig, YEARLY_DISCOUNT } from '../config/pricingMatrix';

/**
 * Calculates the computed price for a given plan, currency, and billing cycle.
 * Formula: Final Price = Base Price * Currency Rate * Regional Multiplier * Billing Multiplier
 * If billing cycle is yearly, we apply the 20% yearly discount multiplier (0.8).
 */
export function calculatePlanPrice(
  planName: keyof typeof pricingMatrix,
  currency: Currency,
  billingCycle: BillingCycle
): CalculatedPlanPrice {
  const plan = pricingMatrix[planName];
  const config = currencyConfig[currency];

  const basePrice = plan.base;
  const rate = config.rate;
  const regionalMultiplier = config.regionalMultiplier;
  
  // Billing multiplier: 1 for monthly, 0.8 for yearly (20% discount)
  const billingMultiplier = billingCycle === 'yearly' ? (1 - YEARLY_DISCOUNT) : 1;

  // Let's compute the monthly-equivalent rate
  const originalMonthlyPrice = basePrice * rate * regionalMultiplier;
  const finalPricePerMonth = originalMonthlyPrice * billingMultiplier;

  // Let's round the prices to nearest whole number for USD/EUR, or nearest 10 for INR for a premium look
  const formatAndRound = (val: number, curr: Currency): number => {
    if (curr === 'INR') {
      return Math.round(val / 10) * 10;
    }
    return Math.round(val);
  };

  const roundedOriginal = formatAndRound(originalMonthlyPrice, currency);
  const roundedFinal = formatAndRound(finalPricePerMonth, currency);

  return {
    planName: planName as string,
    originalPrice: roundedOriginal,
    finalPrice: roundedFinal,
    currencySymbol: config.symbol,
    currencyCode: currency,
    period: billingCycle === 'yearly' ? 'mo' : 'mo',
  };
}
