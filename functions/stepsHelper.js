const STATUS_MAP = {
  COMPLETED: {
    color: "#29ad5b",
    name: "completa"
  },
  FAILED: {
    color: "#de1a1a",
    name: "falhou"
  },
  NOT_STARTED: {
    color: "#343434",
    name: "não iniciada",
    pluralName: "não iniciadas"
  }
};

const getStatusColor = status => STATUS_MAP[status].color;
const getStatusName = status => STATUS_MAP[status].name;

export default {
  getStatusColor,
  getStatusName
};
