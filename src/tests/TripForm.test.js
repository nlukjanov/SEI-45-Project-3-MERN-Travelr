/* global it expect*/

import { shallow } from 'enzyme'
import React from 'react'
import TripForm from '../components/TripForm'

it('expect to render TripForm', () => {
  expect(shallow(<TripForm />)).toMatchSnapshot()
})
