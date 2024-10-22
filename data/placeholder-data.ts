const events = [
  {
    title: '2024 Plogging in Seoul',
    start_date: '2024-11-01T10:00:00Z',
    end_date: '2024-11-01T12:00:00Z',
    created_at: new Date().toISOString(),
    organizer: 'Go Green Seoul',
    images: [
      'https://picsum.photos/375',
      'https://picsum.photos/375',
      'https://picsum.photos/375',
    ],
    city: 'Seoul',
    full_address: '123 Samsung-ro Dongjak-gu Seoul',
    lat: 33.55738555220534,
    lng: 126.759488051597,
    fee: 0,
    thumbnail: 'https://picsum.photos/375',
    content:
      'Join us for a plogging event to clean up the city while enjoying a run!',
  },
  {
    title: 'Busan International Plogging',
    start_date: '2024-12-24T10:00:00Z',
    end_date: '2024-12-25T12:00:00Z',
    created_at: new Date().toISOString(),
    organizer: 'City of Busan',
    images: ['https://picsum.photos/375', 'https://picsum.photos/375'],
    city: 'Busan',
    full_address: '345 Gwangan-ro Sasang-gu Busan',
    lat: 33.55738555220534,
    lng: 126.759488051597,
    fee: 10000,
    thumbnail: 'https://picsum.photos/375',
    content: 'How about running on Christmas day?',
  },
  {
    title: 'Run! Run! Run!',
    start_date: '2024-12-01T10:00:00Z',
    end_date: '2024-12-04T12:00:00Z',
    created_at: new Date().toISOString(),
    organizer: 'I Hate Running',
    images: ['https://picsum.photos/375'],
    city: 'Ansan',
    full_address: '123 Samsung-ro Dongjak-gu Seoul',
    lat: 33.55738555220534,
    lng: 126.759488051597,
    fee: 0,
    thumbnail: 'https://picsum.photos/375',
    content: 'Emoji Test✨🤪🔥🦋',
  },
  {
    title: 'Last Example',
    start_date: '2024-11-01T10:00:00Z',
    end_date: '2024-11-01T12:00:00Z',
    created_at: new Date().toISOString(),
    organizer: 'APT',
    images: ['https://picsum.photos/375', 'https://picsum.photos/375'],
    city: 'Seoul',
    full_address: '123 Hanam-ro Gangnam-gu Seoul',
    lat: 33.55738555220534,
    lng: 126.759488051597,
    fee: 0,
    thumbnail: 'https://picsum.photos/375',
    content: `Plogging is an activity that combines jogging with picking up litter, making it a fantastic way to stay healthy while also helping the environment.

Not only does this activity provide a great workout, but it also contributes significantly to keeping our communities clean. Through plogging, we can positively impact our local areas and promote environmental awareness.

Invite your friends to join in and create fun challenges together! By plogging, you can meet new people and build valuable connections with fellow nature lovers.

For more information, check out our Instagram! 
👉 [Instagram](https://www.instagram.com/your_username_here)

We look forward to seeing many of you at our upcoming plogging events!`,
  },
];

const users = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'UserOne',
    email: 'user@somemail.com',
    password: '123456',
    avatar: 'https://picsum.photos/375',
  },
  {
    id: 'd3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Faker',
    email: 'faker@fakemail.com',
    password: '000000',
    avatar: 'https://picsum.photos/375',
  },
];

const feeds = [
  {
    user_id: 'c15353e6-5257-4d2b-9b5c-a1a976e20539',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: '3360f19a-89a9-4876-a87a-174e940ea97d',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: 'c15353e6-5257-4d2b-9b5c-a1a976e20539',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: 'c15353e6-5257-4d2b-9b5c-a1a976e20539',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: '3360f19a-89a9-4876-a87a-174e940ea97d',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: '3360f19a-89a9-4876-a87a-174e940ea97d',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: '3360f19a-89a9-4876-a87a-174e940ea97d',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: 'c15353e6-5257-4d2b-9b5c-a1a976e20539',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: 'c15353e6-5257-4d2b-9b5c-a1a976e20539',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: '3360f19a-89a9-4876-a87a-174e940ea97d',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: 'c15353e6-5257-4d2b-9b5c-a1a976e20539',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: '3360f19a-89a9-4876-a87a-174e940ea97d',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: 'c15353e6-5257-4d2b-9b5c-a1a976e20539',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: 'c15353e6-5257-4d2b-9b5c-a1a976e20539',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: '3360f19a-89a9-4876-a87a-174e940ea97d',
    feed_image: 'https://picsum.photos/168/218',
  },
  {
    user_id: 'c15353e6-5257-4d2b-9b5c-a1a976e20539',
    feed_image: 'https://picsum.photos/168/218',
  },
];

export { events, users, feeds };
