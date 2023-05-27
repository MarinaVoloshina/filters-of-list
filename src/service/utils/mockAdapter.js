import sleep from '@/utils/sleep'

export class MockAdapter {
  _mock

  constructor (mockSource) {
    this._mock = require(`../../mocks/${mockSource}.json`)
  }

  applyFilter (filter, data) {
    if (filter.operator === '=') {
      return data.filter(e => e[filter.key] === filter.value)
    }

    if (filter.operator === '>') {
      return data.filter(e => e[filter.key] > filter.value)
    }

    if (filter.operator === '<') {
      return data.filter(e => e[filter.key] < filter.value)
    }
  }

  async get (form) {
    await sleep(500)

    const data = this._mock

    return form.reduce((acc, filter) => {
      return this.applyFilter(filter, acc)
    }, data)
  }
}
