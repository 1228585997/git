const BUILTIN_OBJECT = {
  '[object Function]': 1,
  '[object RegExp]': 1,
  '[object Date]': 1,
  '[object Error]': 1,
  '[object CanvasGradient]': 1,
  '[object CanvasPattern]': 1,
  // For node-canvas
  '[object Image]': 1,
  '[object Canvas]': 1
}

const TYPED_ARRAY = {
  '[object Int8Array]': 1,
  '[object Uint8Array]': 1,
  '[object Uint8ClampedArray]': 1,
  '[object Int16Array]': 1,
  '[object Uint16Array]': 1,
  '[object Int32Array]': 1,
  '[object Uint32Array]': 1,
  '[object Float32Array]': 1,
  '[object Float64Array]': 1
}

const objToString = Object.prototype.toString

/**
 * 遍历方法
 * @param obj - 遍历的对象
 * @param cb - 回调函数 接受 (value,key)
 */
const each = (obj, cb) => {
  let keys
  if (obj instanceof Array) {
    return obj.forEach(cb)
  } else if (typeof obj === 'object') {
    keys = Object.keys(obj)
    return keys.forEach((k) => {
      cb(obj[k], k)
    })
  }
  return null
}
const isEmptyObject = obj => Object.keys(obj).length === 0

const clone = (source) => {
  if (source === null || typeof source !== 'object') {
    return source
  }

  let result = source
  const typeStr = objToString.call(source)
  if (typeStr === '[object Array]') {
    result = []
    for (let i = 0, len = source.length; i < len; i += 1) {
      result[i] = clone(source[i])
    }
  } else if (TYPED_ARRAY[typeStr]) {
    result = source.constructor.from(source)
  }

  return result
}

/**
 * 完全遍历，消除getter setter
 */
const copy = (source) => {
  if (source === null || typeof source !== 'object') {
    return source
  }

  let result
  const typeStr = objToString.call(source)
  if (typeStr === '[object Array]') {
    result = []
  } else if (typeStr === '[object Object]') {
    result = {}
  } else {
    result = source
  }
  each(source, (value, key) => {
    result[key] = copy(value)
  })
  return result
}

const isObject = (value) => {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  const type = typeof value
  return type === 'function' || (!!value && type === 'object')
}
const isDom = value => typeof value === 'object' && typeof value.nodeType === 'number' && typeof value.ownerDocument === 'object'

const isArray = value => objToString.call(value) === '[object Array]'

const isBuildInObject = value => !!BUILTIN_OBJECT[objToString.call(value)]

const merge = (target, source, overwrite) => {
  // We should escapse that source is string
  // and enter for ... in ...
  const $target = target
  if (!isObject(source) || !isObject(target)) {
    return overwrite ? clone(source) : target
  }

  each(source, (value, key) => {
    if (Object.hasOwnProperty.call(source, key)) {
      const targetProp = target[key]
      const sourceProp = source[key]

      if (isObject(sourceProp) &&
        isObject(targetProp) &&
        !isArray(sourceProp) &&
        !isArray(targetProp) &&
        !isDom(sourceProp) &&
        !isDom(targetProp) &&
        !isBuildInObject(sourceProp) &&
        !isBuildInObject(targetProp)
      ) {
        // 如果需要递归覆盖，就递归调用merge
        merge(targetProp, sourceProp, overwrite)
      } else if (overwrite || !(key in target)) {
        // 否则只处理overwrite为true，或者在目标对象中没有此属性的情况
        // NOTE，在 target[key] 不存在的时候也是直接覆盖
        $target[key] = clone(source[key], true)
      }
    }
  })

  return target
}
function isNumber (value) {
  const patrn = /^(-)?\d+(\.\d+)?$/
  if (patrn.exec(value) === null || value === '') {
    return false
  } else {
    return true
  }
}
export default {
  each,
  isEmptyObject,
  clone,
  copy,
  isObject,
  isArray,
  merge,
  isNumber
}
