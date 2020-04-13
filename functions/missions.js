const STATUS_MAP = {
  COMPLETED: {
    name: "concluída",
    pluralName: "concluídas",
  },
  IN_PROGRESS: {
    name: "em andamento",
    pluralName: "em andamento",
  },
  NOT_STARTED: {
    name: "não iniciada",
    pluralName: "não iniciadas",
  },
  BLOCKED: {
    name: "bloqueada",
    pluralName: "bloqueadas",
  },
};

const getStatusName = (status) => STATUS_MAP[status].name;
const getStatusPluralName = (status) => STATUS_MAP[status].pluralName;
const getStatuses = () => Object.keys(STATUS_MAP);
const sortByStatus = (missions) =>
  missions.sort((a, b) => (a.status > b.status ? -1 : 1));
const filterByStatus = (missions, status = "all") =>
  status === "all" ? missions : missions.filter((el) => el.status === status);

export default {
  getStatusName,
  getStatusPluralName,
  getStatuses,
  sortByStatus,
  filterByStatus,
};
