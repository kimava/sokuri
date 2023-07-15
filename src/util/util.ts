export function countDDay(targetDate: string | Date): number {
  const today = new Date().setHours(0, 0, 0, 0);
  const date = new Date(targetDate).setHours(0, 0, 0, 0);
  return Math.ceil((date - today) / (1000 * 60 * 60 * 24));
}
