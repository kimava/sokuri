import { readFile } from 'fs/promises';
import path from 'path';

export type Event = {
  id: string;
  title: string;
  beginEvent: Date;
  finishEvent: Date;
  organizer: string;
  location: string;
  dues: string;
  thumbnail: string;
};

function filterUpcomingItems(item: Event) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const finishDate = new Date(item.finishEvent);
  finishDate.setHours(0, 0, 0, 0);

  return finishDate >= today;
}

export async function getAllPosts(): Promise<Event[]> {
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  return readFile(filePath, 'utf-8').then<Event[]>(JSON.parse);
  // .then((events) =>
  //   events.sort((a, b) => (a.beginEvent > b.beginEvent ? -1 : 1))
  // )
  // .then((events) => events.filter(filterUpcomingItems).slice(0, 5));
}
