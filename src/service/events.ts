import { readFile } from 'fs/promises';
import path from 'path';

export type Event = {
  title: string;
  beginEvent: Date;
  finishEvent: Date;
  organizer: string;
  location: string;
  dues: string;
};

export async function getAllPosts(): Promise<Event[]> {
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  return readFile(filePath, 'utf-8')
    .then<Event[]>(JSON.parse)
    .then((events) =>
      events.sort((a, b) => (a.beginEvent > b.beginEvent ? -1 : 1))
    );
}
