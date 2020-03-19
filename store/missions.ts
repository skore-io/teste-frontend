import { ActionTree, MutationTree } from 'vuex'
import { IMission } from '~/models/mission'
import MISSION_API from '~/services/missions'

export const state = () => ({
    missions: [] as IMission[]
})

export type ModuleState = ReturnType<typeof state>

export const mutations: MutationTree<ModuleState> = {
    setMissions(state, missions) {
        state.missions = missions
    }
}

export const actions: ActionTree<ModuleState, ModuleState> = {
    async fetchMissions({commit}) {
        const missions = await MISSION_API.fetch()
        debugger
        commit('setMissions', missions)
    }
}