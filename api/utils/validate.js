/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername (str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

/* 合法uri */
export function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validatAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* 大写字母和数字两位 */
export function validPlatformCode (str) {
  const reg = /^[A-Z0-9]{2}$/
  return reg.test(str)
}

/* 大写字母和数字两位 */
export function validIp (str) {
  const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return reg.test(str)
}

/* QQ */
export function validQQ (str) {
  const reg = /^[1-9]\d{4,11}$/
  return reg.test(str)
}

/* 银行卡号 */
export function validBankCode (str) {
  const reg = /^([1-9]{1})(\d{14}|\d{18})$/
  return reg.test(str)
}

/* 邀请码 */
export function validInviteCode (str) {
  const reg = /^^([a-z]{1})(\d{6})$/
  return reg.test(str)
}

/* 合法uri */
export function validateHttpURL (textval) {
  const urlregex = /^(https?):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 手机号 */
export function validatePhone (phone) {
  const regex = /^1[34578]\d{9}$/
  return regex.test(phone)
}

/* 密码 */
export function validatePassword (password) {
  const regex = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+){1,30}$/
  return regex.test(password)
}

/* 昵称 */
export function validateNickname (data) {
  const regex = /^([\u4e00-\u9fa5A-Za-z0-9-_!@#$%^&*]+){1,50}$/
  return regex.test(data)
}

/* 是否空格 */
export function validContent (data) {
  if (data) {
    const validData = data.trim()
    if (validData.length === 0) {
      return false
    }
    return true
  }
  return false
}

/* 金额 */
export function validAmount(data) {
  const regex = /^([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?)$/
  return regex.test(data)
}
