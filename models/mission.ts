import { IDueDate } from '~/types/due_date'
import { Status } from '~/types/status'
import { IEnrollment } from '~/types/enrollment'
import { ISteps } from '~/types/steps'

export interface IMission {
    id: string
    company_id: string
    name: string
    thumb_url: string | null
    priority: number
    due_date: IDueDate | null
    status: Status
    steps?: ISteps[]
    enrollment?: IEnrollment
}
