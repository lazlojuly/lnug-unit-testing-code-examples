import test from 'ava'
import { stub } from 'sinon'
import { expect } from 'chai'
import api from './api'
import testUsers from '../fixtures/test-users'
// subject under test
import getUsers from './getUsers'

require('../helpers/chai-setup')

test('gets users from the api', t => {
  stub(api, 'get').returns(testUsers)
  getUsers()
  expect(api.get).to.have.been.calledWith('users')
  expect(getUsers()).to.deep.equal(testUsers)
  t.pass()
})
