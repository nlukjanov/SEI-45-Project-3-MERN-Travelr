function handleError(err, req, res, next) {
  if (err.name === 'ValidationError') {
    const formattedErrors = {}

    for (const key in err.errors) {
      formattedErrors[key] = err.errors[key].message
    }

    return res.status(422).json({ message: 'Can\'t accept that, try again', errors: formattedErrors })
  }

  if (err.message === 'Not found') {
    return res.status(404).json({ message: 'We couldn\'t find what you were looking 🤷‍♂️' })
  } 

  if (err.name === 'CastError') {
    const formattedErrors = {}

    for (const key in err.errors) {
      formattedErrors[key] = err.errors[key].message
    }

    return res.status(406).json({ message: 'SOMETHING IS VERY WRONG!!!', errors: formattedErrors })
  }

  res.status(500).json({ message: 'Something\'s wrong with our servers' })
  next(err)
}

module.exports = handleError