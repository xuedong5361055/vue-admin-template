import request from '@/utils/request'

export function getPeopleList(params) {
  return request({
    url: 'http://127.0.0.1:8080/vue/people/list',
    method: 'get',
    params
  })
}

export function submit(params) {
  return request({
    url: 'http://127.0.0.1:8080/vue/people/submit',
    method: 'post',
    params: params
  })
}




