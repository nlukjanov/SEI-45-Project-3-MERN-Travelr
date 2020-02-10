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
    dob: new Date(),
    country: 'South Africa',
    city: 'Johannesburg',
    gender: 'Male',
    languages: 'Sotho',
    profileImage: 'my-image.jpg',
    favoriteTrips: []
  },
  {
    name: 'Nik',
    email: 'nik@email.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    dob: new Date(),
    country: 'Russia',
    city: 'Moscow',
    gender: 'Male',
    languages: 'Russian',
    profileImage: 'image.jpg',
    travel_group: 'The Web Pack',
    favoriteTrips: []
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
    languages: 'Turkish',
    profileImage: 'image-2.jpg',
    travel_group: 'The Web Pack',
    favoriteTrips: []
  }
]

const tripObjs = [
  {
    name: 'An English summer on the beach',
    organizer: 'Bheki',
    country: 'United Kingdom',
    startingDate: new Date(),
    endingDate: new Date(),
    category: 'Beach',
    description: 'desciprion',
    participants: [],
    budget: 'lots of money'
  },
  {
    name: 'Jungle Trek',
    organizer: 'Bheki',
    country: 'India',
    startingDate: new Date(),
    endingDate: new Date(),
    category: 'Safari',
    description: 'desciprion',
    participants: [],
    budget: 'lots of money'
  },
  {
    name: 'Skiing in the Alps',
    organizer: 'Nik',
    country: 'France',
    startingDate: new Date(),
    endingDate: new Date(),
    category: 'Skiing',
    description: 'desciprion',
    participants: [],
    budget: 'lots of money'
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
  }
]

module.exports = { userObjs, tripObjs, categoryObjs, groupObjs }