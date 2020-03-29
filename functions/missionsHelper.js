const sortByStatus = missions =>
  missions.sort((a, b) => (a.status > b.status ? -1 : 1));
const filterByStatus = (missions, status = "all") =>
  status === "all" ? missions : missions.filter(el => el.status === status);

export default {
  sortByStatus,
  filterByStatus
};
