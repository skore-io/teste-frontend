import { mount } from '@vue/test-utils'
import Mission from '@/views/Mission.vue'
import missionData from '@/data/mission.js'
import axios from 'axios'

// Mock de uma única mission.
const mockMission = missionData;

jest.mock('axios', () => ({
  get: () => Promise.resolve({data: mockMission}) 
}))

describe('Mission', () => {
  let wrapper;

  beforeEach(() => {
    // Dependência 'jest-localstorage-mock' utilizada para fazer um mock de test do localStorage
    localStorage.clear();

    wrapper = mount(Mission, {
      mocks: {
        axios
      }
    })

  })

  test('Renderização inicial e snapshot', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })

  test('Verifica se o valor do localStorage está limpo', () => {
    expect(localStorage.getItem('mode')).toBeNull();
  })
  
  test('Verifica se a função que troca o light/dark mode está funcionando', () => {
    wrapper.vm.toggleTheme()
    expect(wrapper.vm.mode).toBe('dark')
    expect(localStorage.getItem('mode')).toBe('dark');
    wrapper.vm.toggleTheme()
    expect(wrapper.vm.mode).toBe('light')
    expect(localStorage.getItem('mode')).toBe('light');
  })

  test('Verifica se a mission está sendo renderizada no component', () => {
    expect(wrapper.vm.missionDetails).toStrictEqual(mockMission)
    const missionDiv = wrapper.find('.mission__data')
    expect(missionDiv).toBeTruthy
  })

})







