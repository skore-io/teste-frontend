export default function ({ $axios, redirect, store }) {
  $axios.defaults.baseURL = 'https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/';

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      console.log(401);
      store.commit('setUser', null);
      redirect('/login');
    }
  });

}
