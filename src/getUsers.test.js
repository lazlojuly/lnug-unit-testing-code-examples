import test from 'ava'
import { spy } from 'sinon'
import { expect } from 'chai'
import api from './api'
// subject under test
import getUsers from './getUsers'

require('../helpers/chai-setup')

test('gets users from the api', t => {
  spy(api, 'get')
  getUsers()
  expect(api.get).to.be.calledWith('users')
  t.pass()
})
