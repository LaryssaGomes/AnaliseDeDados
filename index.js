import { dt } from "./lib/lib-decision-tree.js";
import treinamento from "./dados.js";

// Configuration
var config = {
  trainingSet: treinamento,
  categoryAttr: "irradiat",
  ignoredAttributes: ["Class"],
};

const teste = {
  Class: "recurrence events",
  age: "30 34",
  menopause: "premeno",
  tumorsize: "25 29",
  invnodes: "0 2",
  nodecaps: "no",
  degmalig: 3,
  breast: "right",
  breastquad: "left_low",
};

var decisionTree = new dt.DecisionTree(config);
var decisionTreePrediction = decisionTree.predict(teste);

console.log(decisionTreePrediction);
