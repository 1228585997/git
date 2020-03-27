import fetch from '@/utils/fetch'
const test = ''; // '/mockjsdata/1',''

/**
 * 列表查询
 * @param checkId 盘库ID
 * @param checkDateStart
 * @param checkDateEnd
 * @param status
 * @param page
 * @param limit
 */
export function getList({checkId, checkDateStart, checkDateEnd, status, page, limit}) {
  const data = {
    checkId,
    checkDateStart,
    checkDateEnd,
    status,
    page,
    limit
  };
  return fetch({
    url: test + '/capital-api/warehouse_check/list',
    method: 'post',
    data
  })
}

/**
 * 状态查询
 */
export function getStatusList() {
  return fetch({
    url: test + '/capital-api/warehouse_check/status_info',
    method: 'post'
  })
}

/**
 * 明细查询
 * @param checkId
 */
export function getDetailInfo(checkId) {
  const data = {
    checkId
  };
  return fetch({
    url: test + '/capital-api/warehouse_check/detail',
    method: 'post',
    data
  })
}

/**
 * 异常明细查询
 * @param checkId
 */
export function getErrorList(checkId) {
  const data = {
    checkId
  };
  return fetch({
    url: test + '/capital-api/warehouse_check/fail_list',
    method: 'post',
    data
  })
}

/**
 * 盘库明细查询
 * @param checkId
 * @param page
 * @param limit
 */
export function getCheckList({checkId, page, limit}) {
  const data = {
    checkId,
    page,
    limit
  };
  return fetch({
    url: test + '/capital-api/warehouse_check/check_list',
    method: 'post',
    data
  })
}

export default {
  getList,
  getDetailInfo,
  getStatusList,
  getErrorList,
  getCheckList
}
