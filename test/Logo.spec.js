import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Card, {
      propsData: {
        data: {
          id: '15a9LAUXCm9FkAVexH4q',
          company_id: '114',
          name: 'Desenvolvedor Backend',
          thumb_url: 'https://img.skore.io/image/upload/v1566918438/retool/c6mjszo.png',
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
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    const vm = wrapper.vm

    expect(vm.hasEnrollment).toBeTruthy()
  })
})
