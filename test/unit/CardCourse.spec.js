import { shallowMount } from '@vue/test-utils';
import CardCourse from '../../components/CardCourse.vue';

describe('Components > CardCourse', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CardCourse, {
        propsData: {
          props: {
            marginCourse: '25px 0px 0px 25px',
            showImage: true,
            course: {
              name: '',
              id: '',
              thumb_url: '',
              enrollment: {
                percentage: '',
              },
            }
          },
          stubs: {
            NuxtLink: true,
          },
        }
    });
  });

  it('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
