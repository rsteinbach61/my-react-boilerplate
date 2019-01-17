import App from '../src/components/App'
import React from 'react'
import { shallow } from 'enzyme'

describe('App'), () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find('h1').text()).tobe('Welcome to My Starter App')
  expect(wrapper).toMatchSnapshot
