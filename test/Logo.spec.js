import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Card)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
