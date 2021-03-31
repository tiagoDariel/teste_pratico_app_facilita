import { routes as medirAltura } from '../modules/medirAltura'
import { routes as biblioteca } from '../modules/biblioteca'
import { routes as matriz } from '../modules/matriz'
import { routes as fibonacci } from '../modules/fibonacci'

export default [
  ...medirAltura,
  ...biblioteca,
  ...matriz,
  ...fibonacci
]
