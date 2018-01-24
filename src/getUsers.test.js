import test from 'ava'
import td from 'testdouble'
import api from './api'
import testUsers from '../fixtures/test-users'
// subject under test
import getUsers from './getUsers'

test.afterEach(() => td.reset())

test('gets users from the api', t => {
  api.get = td.function()
  td.when(api.get('users')).thenReturn(testUsers)
  t.deepEqual(getUsers(), testUsers)
})
