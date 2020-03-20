import {Status, StatusColor} from '~/types/status'

export function getStatusColors (status: Status): StatusColor {
    return StatusColor[status]
}
