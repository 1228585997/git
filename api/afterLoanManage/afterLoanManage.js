import fetch from '@/utils/fetch'

const test = ''; // '/mockjsdata/1',''

/**
 * 列表查询
 * @param feedbackId 记录ID
 * @param enterpriseName
 * @param linkMan
 * @param linkPhone
 * @param noticeDate
 * @param status
 * @param page
 * @param limit
 */
export function getList({feedbackId, enterpriseName, linkMan, linkPhone, noticeDateStart, noticeDateEnd, status, page, limit}) {
  const data = {
    feedbackId,
    enterpriseName,
    linkMan,
    linkPhone,
    noticeDateStart,
    noticeDateEnd,
    status,
    page,
    limit
  };
  return fetch({
    url: test + '/capital-api/feed_back/list',
    method: 'post',
    data
  })
}

/**
 * 状态查询
 */
export function getStatusList() {
  return fetch({
    url: test + '/capital-api/feed_back/feedback_status',
    method: 'post'
  })
}

/**
 * 明细查询
 * @param feedbackId 记录ID
 */
export function getDetailInfo(feedbackId) {
  const data = {
    feedbackId
  };
  return fetch({
    url: test + '/capital-api/feed_back/detail',
    method: 'post',
    data
  })
}


export default {
  getList,
  getDetailInfo,
  getStatusList
}
