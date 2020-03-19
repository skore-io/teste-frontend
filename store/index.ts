import { ActionTree } from 'vuex'

export const actions: ActionTree<any, any> = {
    async nuxtServerInit({dispatch}) {
        await dispatch('missions/fetchMissions')
    }
}