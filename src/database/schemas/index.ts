import * as user from './userProfile'
import * as business from './business'
const schemas = {
  ...user,
  ...business
}
export { schemas }