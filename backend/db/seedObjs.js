const groupObjs = [
  {
    name: 'The Web Pack',
    description: 'something',
    imageURL: 'some-image.jpg',
    isPrivate: true
  },
  {
    name: 'Travellin Crew',
    description: 'something',
    imageURL: 'some-image.jpg',
    isPrivate: true
  },
  {
    name: 'Phoebe\'s Flybies',
    description: 'something',
    imageURL: 'some-image.jpg',
    isPrivate: true
  }
]

const userObjs = [
  {
    name: 'Bheki',
    email: 'bheki@email.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dob: new Date('2000-02-20'),
    country: 'South Africa',
    city: 'Johannesburg',
    gender: 'Male',
    languages: ['Sotho', 'English'],
    profileImage: 'my-image.jpg'
  },
  {
    name: 'Nik',
    email: 'nik@email.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dob: new Date('1988-01-01'),
    country: 'Russia',
    city: 'Moscow',
    gender: 'Male',
    languages: ['Russian', 'English'],
    profileImage: 'image.jpg'
  },
  {
    name: 'Can',
    email: 'can@email.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dob: new Date('1996-01-31'),
    country: 'Turkey',
    city: 'Istanbul',
    gender: 'Male',
    languages: ['Turkish', 'English'],
    profileImage: 'image-2.jpg'
  }
]

const tripObjs = [
  {
    name: 'An English summer on the beach',
    organizer: 'Bheki',
    countries: ['United Kingdom'],
    startingDate: new Date('2020-03-01'),
    endingDate: new Date('2020-03-05'),
    category: 'Beach',
    description: 'Let us go by the see and have some fun! The weather should be nice!',
    participants: [],
    interested: [],
    budget: ['$0 - $100', '$100 - $300']
  },
  {
    name: 'Jungle Trek',
    organizer: 'Bheki',
    countries: ['India', 'Thailand', 'Indonesia'],
    startingDate: new Date('2020-06-10'),
    endingDate: new Date('2020-06-20'),
    category: 'Beach',
    description: 'Multi country trip in Asia. Starting in India and then going to Thailand and Indonesia. Main goal is to enjoy the nature and trek the jungles',
    participants: [],
    interested: [],
    budget: ['$300 - $500', '$500 - $1000']
  },
  {
    name: 'Skiing in the Alps',
    organizer: 'Nik',
    countries: ['France', 'Italy'],
    startingDate: new Date('2020-03-15'),
    endingDate: new Date('2020-03-30'),
    category: 'Skiing',
    description: 'Two weeks trip in Alps! Starting in France in 3 Valleys then going to Italian Dolomites.',
    participants: [],
    interested: [],
    budget: ['$500 - $1000']
  },
  {
    name: 'Skiing in France',
    organizer: 'Nik',
    countries: ['France'],
    startingDate: new Date('2020-01-10'),
    endingDate: new Date('2020-01-20'),
    category: 'Skiing',
    description: 'description',
    participants: [],
    interested: [],
    budget: ['$500 - $1000']
  },
  {
    name: 'Skiing in Italy',
    organizer: 'Nik',
    countries: ['Italy'],
    startingDate: new Date('2020-02-01'),
    endingDate: new Date('2020-02-10'),
    category: 'Skiing',
    description: 'description',
    participants: [],
    interested: [],
    budget: ['$500 - $1000']
  }
]

const categoryObjs = [
  {
    name: 'Beach'
  },
  {
    name: 'Skiing'
  },
  {
    name: 'Safari'
  },
  {
    name: 'Other'
  }
]

module.exports = { userObjs, tripObjs, categoryObjs, groupObjs }
