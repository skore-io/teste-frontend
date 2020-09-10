import { mount } from '@vue/test-utils'
import Missions from '@/views/Missions.vue'
import missionsData from '@/data/missions.js'
import axios from 'axios'

// Mock da lista de missions do endpoint. Length: 6 
const mockMissions = missionsData;

jest.mock('axios', () => ({
  get: () => Promise.resolve({data: mockMissions}) 
}))

describe('Missions', () => {
  let wrapper;

  beforeEach(() => {
    // Dependência 'jest-localstorage-mock' utilizada para fazer um mock de test do localStorage
    localStorage.clear();

    wrapper = mount(Missions, {
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

  test('Verifica se as missions estão sendo renderizadas no component', () => {
    expect(wrapper.vm.missions.length).toBe(6)
    const missionDiv = wrapper.findAll('.mission-template')
    expect(missionDiv.length).toBe(6)
  })

})







