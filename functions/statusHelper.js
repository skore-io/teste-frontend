const STATUS_MAP = {
  COMPLETED: {
    color: "#29ad5b",
    name: "concluído"
  },
  IN_PROGRESS: {
    color: "#1077f7",
    name: "em andamento"
  },
  NOT_STARTED: {
    color: "#343434",
    name: "não iniciado"
  },
  BLOCKED: {
    color: "#de1a1a",
    name: "bloqueado"
  }
};

const getColor = status => STATUS_MAP[status].color;
const getName = status => STATUS_MAP[status].name;

export default {
  getColor,
  getName
};
