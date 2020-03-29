const sortByStatus = missions => missions.sort((a, b) => a.status > b.status ? -1 : 1);

export default {
  sortByStatus
};
