import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/common/api'

const accessor: Plugin = ({ $axios }) => {
    initializeAxios($axios)
}
export default accessor