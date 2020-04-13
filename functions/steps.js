const STATUS_MAP = {
  COMPLETED: {
    name: "completa",
  },
  FAILED: {
    color: "#de1a1a",
    name: "falhou",
  },
  NOT_STARTED: {
    name: "não iniciada",
    pluralName: "não iniciadas",
  },
};

const getStatusName = (status) => STATUS_MAP[status].name;

export default {
  getStatusName,
};
