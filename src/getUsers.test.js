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

test('returns empty array when api result is falsy', t => {
  const falsies = [false, 0, '', null, undefined]
  t.plan(falsies.length)
  falsies.forEach(falsy => {
    api.get = td.function()
    td.when(api.get('users')).thenReturn(falsy)
    t.deepEqual(getUsers(), [])
  })
})
