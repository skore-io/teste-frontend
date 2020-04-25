// import axios from "axios";

// export default axios.create({
//   baseURL: "https://us-central1-teste-frontend-c2dcc.cloudfunctions.net"
// });

import axios from "axios";

const instance = axios.create({});

instance.defaults.baseURL =
  "https://us-central1-teste-frontend-c2dcc.cloudfunctions.net/missions";

export default instance;
