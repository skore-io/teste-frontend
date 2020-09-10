import { mount } from '@vue/test-utils'

import Header from '../../src/components/Header'

describe('Header', () => {
  const wrapper = mount(Header)

  test('Renderização inicial e snapshot', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })

  test('Verifica se o botão que troca o light/dark mode está funcionando', async () => {  
    await wrapper.find('#toggleBtn').trigger('click')
    expect(wrapper.emitted().toggle).toBeTruthy()
  })
})

