import api from './api'

export default () => {
  const users = api.get('users')
  if (!users) return []
  return users
}
