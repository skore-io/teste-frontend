import { Status } from '~/types/status'
export interface ISteps {
    id: number
    name: string
}
export interface ICompletedSteps {
    step_id: number
    status: Status
}
