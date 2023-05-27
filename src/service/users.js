import { MockAdapter } from '@/service/utils/mockAdapter'

export class UserService {
  mockAdapter = new MockAdapter('users')
  url = 'users'
  qs = require('qs')

  getFilters (form) {
    const filledFilters = Object.fromEntries(Object.entries(form).filter(([_, v]) => v != null))

    return Object.values(filledFilters).filter(e => !!e).map((e, index) => ({ key: Object.keys(filledFilters)[index], ...e }))
  }

  getFiltersForRequest (form) {
    const qs = this.qs.stringify(this.getFilters(form))

    if (qs) return '?' + qs

    return ''
  }

  get isProduction () {
    return process.env.NODE_ENV === 'production'
  }

  async get (form) {
    if (this.isProduction) {
      return fetch(process.env.VUE_APP_BASE_URL + this.url + '/' + this.getFiltersForRequest(form), {
        method: 'GET'
      }).then(res => res.json())
    } else {
      return this.mockAdapter.get(this.getFilters(form))
    }
  }
}
