import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { events, users, feeds } from '../../data/placeholder-data';

// This file is for documentation purposes only.
// To use it, rename the file to `route.ts` and move it into app/seed directory.

const client = await db.connect();

// Comment out the `feeds` table creation to first create the `users` table.
// After obtaining the actual user IDs, update `data/placeholder-data.ts` accordingly,
// then uncomment the `feeds` table creation to proceed.

async function seedDatabase() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await seedEvents();
  await seedUsers();
  await seedFeeds();
}

async function seedEvents() {
  await client.sql`CREATE TABLE IF NOT EXISTS events (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    organizer VARCHAR(255) NOT NULL,
    images TEXT NOT NULL,
    city VARCHAR(255) NOT NULL,
    full_address TEXT NOT NULL,
    lat DECIMAL(9, 6) NOT NULL,
    lng DECIMAL(9, 6) NOT NULL,
    fee INTEGER NOT NULL,
    thumbnail TEXT NOT NULL,
    content TEXT NOT NULL
  )`;

  const insertedEvents = await Promise.all(
    events.map(async (event) => {
      const images =
        event.images.length > 0 ? `{${event.images.join(',')}}` : '{}';

      return client.sql`
          INSERT INTO events (
            title,
            start_date,
            end_date,
            created_at,
            organizer,
            images,
            city,
            full_address,
            lat,
            lng,
            fee,
            thumbnail,
            content
          )
          VALUES (
            ${event.title},
            ${event.start_date},
            ${event.end_date},
            ${event.created_at},
            ${event.organizer},
            ${images},
            ${event.city},
            ${event.full_address},
            ${event.lat},
            ${event.lng},
            ${event.fee},
            ${event.thumbnail},
            ${event.content}
          )
          ON CONFLICT (id) DO NOTHING;
        `;
    })
  );

  return insertedEvents;
}

async function seedUsers() {
  await client.sql`CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar TEXT
  );`;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
          INSERT INTO users (name, email, password, avatar)
          VALUES (${user.name}, ${user.email}, ${hashedPassword}, ${user.avatar})
          ON CONFLICT (id) DO NOTHING;
        `;
    })
  );

  return insertedUsers;
}

async function seedFeeds() {
  await client.sql`CREATE TABLE IF NOT EXISTS feeds (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    feed_image TEXT NOT NULL
  );`;

  const insertedFeeds = await Promise.all(
    feeds.map(async (feed) => {
      return client.sql`
          INSERT INTO feeds (user_id, feed_image)
          VALUES (${feed.user_id}, ${feed.feed_image})
          ON CONFLICT (id) DO NOTHING;
        `;
    })
  );

  return insertedFeeds;
}

// To start, uncomment below codes

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await seedDatabase();
//     await client.sql`COMMIT`;

//     return Response.json({ message: 'Database seeded successfully' });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     console.error(error);
//     return Response.json({ error }, { status: 500 });
//   } finally {
//     await client.release();
//   }
// }
