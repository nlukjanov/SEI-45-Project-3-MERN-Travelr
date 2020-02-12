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
    name: "Phoebe's Flybies",
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
    dob: new Date(),
    country: 'South Africa',
    city: 'Johannesburg',
    gender: 'Male',
    languages: ['Sotho'],
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
    languages: ['Russian'],
    profileImage: 'image.jpg',
  },
  {
    name: 'Jean',
    email: 'jean@email.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dob: new Date(),
    country: 'Turkey',
    city: 'Istanbul',
    gender: 'Male',
    languages: ['Turkish'],
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
    description: 'description',
    participants: [],
    interested: [],
    budget: ['$0 - $100']
  },
  {
    name: 'Jungle Trek',
    organizer: 'Bheki',
    countries: ['India', 'Thailand', 'Indonesia'],
    startingDate: new Date('2020-06-10'),
    endingDate: new Date('2020-06-20'),
    category: 'Beach',
    description: 'description',
    participants: [],
    interested: [],
    budget: ['$500 - $1000']
  },
  {
    name: 'Skiing in the Alps',
    organizer: 'Nik',
    countries: ['France', 'Italy'],
    startingDate: new Date('2020-03-25'),
    endingDate: new Date('2020-03-30'),
    category: 'Skiing',
    description: 'description',
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
