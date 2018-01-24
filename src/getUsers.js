import api from './api'

export default () => {
  const users = api.get('users')
  if (!users) return []

  const validUsers = []
  for (let x = 0; x < users.length; x++) {
    if (users[x].id) validUsers.push(users[x])
  }

  return validUsers
}
