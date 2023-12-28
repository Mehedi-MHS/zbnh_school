const arrageData = (data, cls) => {
  if ([6, 7, 8].includes(cls)) {
    const objA = {},
      objB = {},
      objC = {};
    const arrLen = data.length;
    for (let i = 0; i < arrLen; i++) {
      if (data[i].section == "A") {
        objA.section = "A";
        objA[data[i].category] = {};
        objA[data[i].category].boys = data[i].boys;
        objA[data[i].category].girls = data[i].girls;
      } else if (data[i].section == "B") {
        objB.section = "B";
        objB[data[i].category] = {};
        objB[data[i].category].boys = data[i].boys;
        objB[data[i].category].girls = data[i].girls;
      } else if (data[i].section == "C") {
        objC.section = "C";
        objC[data[i].category] = {};
        objC[data[i].category].boys = data[i].boys;
        objC[data[i].category].girls = data[i].girls;
      }
    }

    return [objA, objB, objC];
  }
};

module.exports = arrageData;
