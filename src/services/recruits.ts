import { API_ENDPOINT } from '@/app/constant';
import { readFile } from 'fs/promises';
import path from 'path';

export type Recruit = {
  id: string;
  title: string;
  createdAt: Date;
  location: string;
  images: string[];
  currentParticipants: number;
  maxParticipants: number;
};

export type RecruitDetail = Recruit & {
  beginEvent: Date;
  finishEvent: Date;
  venue: string;
  dueDate: Date;
  numOfPeople: string;
  content: string;
  website: string;
  position: {
    lat: number;
    lng: number;
  };
};

export async function getAllRecruitPosts(): Promise<Recruit[]> {
  // const res = await fetch(`${API_ENDPOINT}/community`);
  const filePath = path.join(process.cwd(), 'data', 'recruits.json');

  return readFile(filePath, 'utf-8')
    .then<Recruit[]>(JSON.parse)
    .then((events) =>
      events.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
    );

  // return fetch(`${API_ENDPOINT}/community`, { next: { revalidate: 3600 } })
  //   .then<Recruit[]>((res) => res.json())
  //   .then((events) =>
  //     events.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
  //   )
  //   .then((events) => events.slice(0, 10));
}

export async function getTopRecruitPosts(): Promise<Recruit[]> {
  // const res = await fetch(`${API_ENDPOINT}/community`);
  const filePath = path.join(process.cwd(), 'data', 'recruits.json');

  return readFile(filePath, 'utf-8')
    .then<Recruit[]>(JSON.parse)
    .then((events) =>
      events.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
    )
    .then((events) => events.slice(0, 10));

  // return fetch(`${API_ENDPOINT}/community`, { next: { revalidate: 3600 } })
  //   .then<Recruit[]>((res) => res.json())
  //   .then((events) =>
  //     events.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
  //   )
  //   .then((events) => events.slice(0, 10));
}

export async function getRecruitDetail(id: string): Promise<RecruitDetail> {
  const filePath = path.join(process.cwd(), 'data', 'recruitDetail.json');

  return readFile(filePath, 'utf-8').then<RecruitDetail>(JSON.parse);
}
