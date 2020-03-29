const STATUS_MAP = {
  COMPLETED: {
    color: "#29ad5b",
    name: "concluída",
    pluralName: "concluídas"
  },
  IN_PROGRESS: {
    color: "#1077f7",
    name: "em andamento",
    pluralName: "em andamento"
  },
  NOT_STARTED: {
    color: "#343434",
    name: "não iniciada",
    pluralName: "não iniciadas"
  },
  BLOCKED: {
    color: "#de1a1a",
    name: "bloqueada",
    pluralName: "bloqueadas"
  }
};

const getStatusColor = status => STATUS_MAP[status].color;
const getStatusName = status => STATUS_MAP[status].name;
const getStatusPluralName = status => STATUS_MAP[status].pluralName;
const getStatuses = () => Object.keys(STATUS_MAP);
const sortByStatus = missions =>
  missions.sort((a, b) => (a.status > b.status ? -1 : 1));
const filterByStatus = (missions, status = "all") =>
  status === "all" ? missions : missions.filter(el => el.status === status);

export default {
  getStatusColor,
  getStatusName,
  getStatusPluralName,
  getStatuses,
  sortByStatus,
  filterByStatus
};
