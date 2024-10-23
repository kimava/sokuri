export function countDDay(targetDate: string | Date): number {
  const today = new Date().setHours(0, 0, 0, 0);
  const date = new Date(targetDate).setHours(0, 0, 0, 0);
  return Math.ceil((date - today) / (1000 * 60 * 60 * 24));
}

export function formatDate(inputDateStr: Date): string {
  const inputDate = new Date(inputDateStr);
  const day = inputDate.getDate().toString().padStart(2, '0');
  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
  const year = inputDate.getFullYear().toString().slice(-2);
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][
    inputDate.getDay()
  ];

  return `${year}.${month}.${day}(${dayOfWeek})`;
}

export const isActivePath = (pathName: string, href: string): boolean =>
  pathName.startsWith(href);
