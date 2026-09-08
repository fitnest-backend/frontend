export function monthlyPrice(total: number, durationMonths: number): number {
  if (!Number.isFinite(total)) return 0;
  if (!durationMonths || durationMonths <= 0) return total;
  return total / durationMonths;
}

export function formatManat(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  if (Number.isInteger(rounded)) return String(rounded);
  return rounded.toFixed(2);
}
