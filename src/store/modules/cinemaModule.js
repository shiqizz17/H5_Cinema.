import http from "@/utils"

const module = {
  state: {
    cinemaList: []
  },
  mutations: {
    // 修改当前的list
    setCinemaList(state, cinemaList) {
      state.cinemaList = cinemaList
    }
  },
  actions: {
    getCinemaList({ commit }, cityId) {
      return http({
        url: `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&2500238`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(({ data }) => {
        commit('setCinemaList', data.data.cinemas)
      })
    }
  }
}

export default module