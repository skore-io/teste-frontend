export default function({ $axios, redirect, app, store }) {
  $axios.onError(error => {
    if (error.response.status === 404) {
      redirect("/error");
    }
  });
  // $axios.onResponse(response => {
  //   console.log("CONCLUIDO: ", response);
  // });
  // $axios.onRequestError(err => {
  //   console.log("REQ ERROR: ", err);
  // });
  // $axios.onResponseError(err => {
  //   console.log("RES ERROR: ", err);
  // });
}
