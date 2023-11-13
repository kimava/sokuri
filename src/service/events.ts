import { API_ENDPOINT } from '@/app/constant';

export type Event = {
  id: string;
  title: string;
  beginEvent: Date;
  finishEvent: Date;
  organizer: string;
  location: string;
  dues: string;
  thumbnail: string;
  images: string[];
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

async function getData() {
  const res = await fetch(`${API_ENDPOINT}/event`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getAllPosts(): Promise<Event[]> {
  const res = await fetch(`${API_ENDPOINT}/event`);
  console.log(res.json());
  return fetch(`${API_ENDPOINT}/event`)
    .then<Event[]>((res) => res.json())
    .then((events) =>
      events.sort((a, b) => (a.beginEvent > b.beginEvent ? -1 : 1))
    );
  // .then((events) => events.filter(filterUpcomingItems).slice(0, 5));
}

export async function getPostDetail(id: string) {
  const posts = await getAllPosts();
  const post = posts.find((post) => post.id === id);

  if (!post) throw new Error(`${id} 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await fetch(`${API_ENDPOINT}/event/${id}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json());

  return {
    ...content,
    next,
    prev,
  };
}
