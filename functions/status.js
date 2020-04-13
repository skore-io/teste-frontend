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

const getName = (status) => STATUS_MAP[status].name;
const getPluralName = (status) => STATUS_MAP[status].pluralName;
const getStatuses = () => Object.keys(STATUS_MAP);

export default {
  getName,
  getPluralName,
  getStatuses,
};
