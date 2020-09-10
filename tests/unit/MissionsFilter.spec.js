import { mount } from '@vue/test-utils'
import MissionsFilter from '../../src/components/MissionsFilter'

describe('MissionsFilter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MissionsFilter)
  })
  
  test('Renderização inicial e snapshot', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })

  test('Verifica se o filtro está funcionando', async () => {
    expect(wrapper.vm.selectedStatus).toBe('ALL')

    await wrapper.find('#em-andamento').trigger('click')
    expect(wrapper.vm.selectedStatus).toBe('IN_PROGRESS')

    await wrapper.find('#completa').trigger('click')
    expect(wrapper.vm.selectedStatus).toBe('COMPLETED')

    await wrapper.find('#nao-iniciada').trigger('click')
    expect(wrapper.vm.selectedStatus).toBe('NOT_STARTED')

    await wrapper.find('#bloqueada').trigger('click')
    expect(wrapper.vm.selectedStatus).toBe('BLOCKED')

    await wrapper.find('#todas').trigger('click')
    expect(wrapper.vm.selectedStatus).toBe('ALL')
  })
})