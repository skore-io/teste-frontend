import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    containerTitle: ''
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
    setContainerTitle(state, title) {
        state.containerTitle = title
    }
}

export const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit({dispatch}) {
        await dispatch('missions/fetchMissions')
    }
}