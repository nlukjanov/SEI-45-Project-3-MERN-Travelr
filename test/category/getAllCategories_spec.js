/* global describe beforeEach afterEach it api expect*/

const Category = require('../../backend/models/categoryModel')

describe('testing categories controller get all categories GET /categories', () => {
  beforeEach(done => {
    Category.create({
      name: 'Beach'
    }).then(done())
  })

  afterEach(done => {
    Category.deleteMany()
      .then(() => done())
  })

  it('should return a 200 status', done => {
    api.get('/api/categories').end((err, res) => {
      expect(res.status).to.eq(200)
      done()
    })
  })

  it('should return an array', done => {
    api.get('/api/categories').end((err, res) => {
      expect(res.body).to.be.an('array')
      done()
    })
  })

  it('should return an array of objects', done => {
    api.get('/api/categories').end((err, res) => {
      res.body.forEach(category => {
        expect(category).to.be.an('object')
      })
      done()
    })
  })

  it('should return an array of objects with correct keys', done => {
    api.get('/api/categories').end((err, res) => {
      res.body.forEach(category => {
        expect(category).to.contains.keys('name')
      })
      done()
    })
  })

  it('should return an array of objects with correct keys and values data types', done => {
    api.get('/api/categories').end((err, res) => {
      res.body.forEach(category => {
        expect(category.name).to.be.a('string')
      })
      done()
    })
  })
})
