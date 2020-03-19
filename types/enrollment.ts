import { ICompletedSteps } from '~/types/steps'
export interface IEnrollment {
    id: string
    percentage: number
    completed_steps?: ICompletedSteps[]
}