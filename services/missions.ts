import { $axios } from '~/common/api'
import { IMission } from '~/models/mission'

export async function fetch(): Promise<IMission[]> {
    return await $axios.$get('/missions')
}

export async function get(missionId: string): Promise<IMission> {
    return await $axios.$get(`/missions/${missionId}`)
}

export default { fetch, get }