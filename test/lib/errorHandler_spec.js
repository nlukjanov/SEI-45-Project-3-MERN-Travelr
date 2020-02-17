/* global describe assert beforeEach afterEach it api expect */

const sinon = require('sinon')
const handleError = require('../../backend/lib/errorHandler')

const req = {}
const res = {
  data: null,
  code: null,
  status: function(status) {
    this.code = status
    return this
  },
  json: function(errorMessage) {
    this.data = errorMessage
    return this
  }
}
const next = sinon.fake()

describe('Testing errorHandler middleware', () => {
  it('should call next() once', function() {
    const nextSpy = sinon.spy()
    handleError(
      { Error: 'Something is wrong' },
      {},
      {
        status: function() {
          return this
        },
        json: function() {
          return 'something is wrong'
        }
      },
      nextSpy
    )
    expect(nextSpy.calledOnce).to.be.true
  })

  it('should return status 500 and error message if error is unknown', function(done) {
    const err = { name: 'some thing is wrong with our servers' }

    handleError(err, req, res, next)
    expect(res.code).to.be.eq(500)
    expect(res.data).to.be.an('object')
    expect(res.data.message).to.be.eq("Something's wrong with our servers")
    done()
  })

  it('should return status 422 if validation error', function(done) {
    const err = { name: 'ValidationError' }

    handleError(err, req, res, next)
    expect(res.code).to.be.eq(422)
    expect(res.data).to.be.an('object')
    expect(res.data.message).to.be.eq("Can't accept that, try again")
    expect(res.data.errors).to.be.an('object')
    done()
  })

  it('should return status 422 if profileImage error and text: please upload image', function(done) {
    const err = {
      name: 'ValidationError',
      errors: { profileImage: 'image error' }
    }

    handleError(err, req, res, next)
    expect(res.code).to.be.eq(422)
    expect(res.data).to.be.an('object')
    expect(res.data.message).to.be.eq("Can't accept that, try again")
    expect(res.data.errors).to.be.an('object')
    expect(res.data.errors.profileImage).to.be.eq('Please upload image')
    done()
  })
  it('should return status 422 if iamgeURL error and text: please upload image', function(done) {
    const err = { name: 'ValidationError', errors: { imageURL: 'image error' } }

    handleError(err, req, res, next)
    expect(res.code).to.be.eq(422)
    expect(res.data).to.be.an('object')
    expect(res.data.message).to.be.eq("Can't accept that, try again")
    expect(res.data.errors).to.be.an('object')
    expect(res.data.errors.imageURL).to.be.eq('Please upload image')
    done()
  })

  it('should return status 422 if passwordConfirmation error and text: Passwords do not match', function(done) {
    const err = {
      name: 'ValidationError',
      errors: { passwordConfirmation: 'password confirmation error' }
    }

    handleError(err, req, res, next)
    expect(res.code).to.be.eq(422)
    expect(res.data).to.be.an('object')
    expect(res.data.message).to.be.eq("Can't accept that, try again")
    expect(res.data.errors).to.be.an('object')
    expect(res.data.errors.passwordConfirmation).to.be.eq(
      'Passwords do not match'
    )
    done()
  })

  it('should return status 422 if any error except above and text: This field is required', function(done) {
    const err = { name: 'ValidationError', errors: { someKey: 'someError' } }

    handleError(err, req, res, next)
    expect(res.code).to.be.eq(422)
    expect(res.data).to.be.an('object')
    expect(res.data.message).to.be.eq("Can't accept that, try again")
    expect(res.data.errors).to.be.an('object')
    expect(res.data.errors.someKey).to.be.eq('This field is required')
    done()
  })

  it("should return status 404 and message We couldn't find what you were looking 🤷‍♂️", function(done) {
    const err = { message: 'Not found' }

    handleError(err, req, res, next)
    expect(res.code).to.be.eq(404)
    expect(res.data).to.be.an('object')
    expect(res.data.message).to.be.eq(
      "We couldn't find what you were looking 🤷‍♂️"
    )
    done()
  })

  it("should return status 401 and message You're unauthorized. GET OUT!!!", function(done) {
    const err = { message: 'Unauthorized' }

    handleError(err, req, res, next)
    expect(res.code).to.be.eq(401)
    expect(res.data).to.be.an('object')
    expect(res.data.message).to.be.eq("You're unauthorized. GET OUT!!!")
    done()
  })

  it('should return status 406 and message SOMETHING IS VERY WRONG!!!', function(done) {
    const err = { name: 'CastError', errors: { someKey: 'error' } }

    handleError(err, req, res, next)
    expect(res.code).to.be.eq(406)
    expect(res.data).to.be.an('object')
    expect(res.data.message).to.be.eq('SOMETHING IS VERY WRONG!!!')
    expect(res.data.errors).to.be.an('object')
    done()
  })
})
