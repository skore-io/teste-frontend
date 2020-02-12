import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

const data = {
  id: '15a9LAUXCm9FkAVexH4q',
  company_id: '114',
  name: 'Desenvolvedor Backend',
  thumb_url: null,
  priority: 1,
  due_date: {
    available_at: 1572127435329
  },
  status: 'IN_PROGRESS',
  enrollment: {
    id: '114_15a9LAUXCm9FkAVexH4q_453995',
    percentage: 21
  }
}

const wrapper = mount(Card, {
  propsData: { data },
  stubs: ['b-row', 'b-progress', 'b-card', 'b-card-title']
})
const vm: Card | any = wrapper.vm

describe('Card Component', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has enrollment', () => {
    expect(vm.hasEnrollment).toBeTruthy()
  })

  test('has dueDate', () => {
    expect(vm.hasDueDate).toBeTruthy()
  })

  test('has variant and icon', () => {
    expect(vm.statusClass).toStrictEqual({ icon: 'fa-tasks', variant: 'bg-warning' })
  })

  test('has formatted available date icon', () => {
    expect(vm.formatedAvailableAt).toStrictEqual('26/10')
  })

  test('has default picture if doesnt have a thumb_url', () => {
    expect(vm.picture).toStrictEqual('https://www.fillmurray.com/150/240')
  })
})
