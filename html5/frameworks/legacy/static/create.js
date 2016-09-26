import App from '../app/index'
import { instanceMap } from './map'
import { init as initApp } from '../app/ctrl/index'

/**
 * Create a Weex instance.
 *
 * @param  {string} id
 * @param  {string} code
 * @param  {object} [options] option `HAS_LOG` enable print log
 * @param  {object} [data]
 */
export function createInstance (id, code, options, data) {
  let instance = instanceMap[id]
  options = options || {}
  let result
  if (!instance) {
    instance = new App(id, options)
    instanceMap[id] = instance
    result = initApp(instance, code, data)
  }
  else {
    result = new Error(`invalid instance id "${id}"`)
  }
  return result
}
