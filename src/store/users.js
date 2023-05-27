import { defineStore } from 'pinia'

import { UserService } from '@/service/users'

const service = new UserService()

export const useUsersStore = defineStore('users', {
  state: () => ({
    isLoading: false,
    items: [],
    filters: {
      country: null,
      score: null
    }
  }),

  actions: {
    setFilters (v) {
      this.filters = v
    },

    async fetchUsers () {
      try {
        this.isLoading = true
        this.items = await service.get(this.filters)
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    }
  }
})
