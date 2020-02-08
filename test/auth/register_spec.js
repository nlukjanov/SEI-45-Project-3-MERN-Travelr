/* global describe beforeEach afterEach it */
const User = require('../../backend/models/userModel')

const incorrectRegistrationData = {
  
}

describe('testing POST to /register', () => {
  beforeEach(done => {
    User.create({
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
      organizedTrips: [],
      joinedTrips: [],
      favoriteTrips: []
    }).then(() => done())
  })
  afterEach(done => {
    User.deleteMany().then(() => done())
  })

  it('should return ')
})
