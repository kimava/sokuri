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

export type EventDetail = Event & {
  venue: string;
  dueDate: Date;
  numOfPeople: string;
  content: string;
  position: {
    lat: number;
    lng: number;
  };
  images: string[];
  website: string;
};

export type EventDetailWithMeta = EventDetail & {
  prev: Event | null;
  next: Event | null;
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
  return readFile(filePath, 'utf-8')
    .then<Event[]>(JSON.parse)
    .then((events) =>
      events.sort((a, b) => (a.beginEvent > b.beginEvent ? -1 : 1))
    );
  // .then((events) => events.filter(filterUpcomingItems).slice(0, 5));
}

export async function getPostDetail(
  fileName: string
): Promise<EventDetailWithMeta> {
  const filePath = path.join(process.cwd(), 'data', `${fileName}.json`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.id === fileName);

  if (!post) throw new Error(`${fileName} 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filePath, 'utf-8').then<EventDetail>(
    JSON.parse
  );

  return {
    ...content,
    next,
    prev,
  };
}
