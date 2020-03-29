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

const getColor = status => STATUS_MAP[status].color;
const getName = status => STATUS_MAP[status].name;
const getPluralName = status => STATUS_MAP[status].pluralName;
const getStatuses = () => Object.keys(STATUS_MAP);

export default {
  getColor,
  getName,
  getPluralName,
  getStatuses
};
