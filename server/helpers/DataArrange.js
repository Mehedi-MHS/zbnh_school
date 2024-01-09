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
  } else if ([9, 10].includes(cls)) {
    const sc_a = {},
      sc_b = {},
      sc_c = {},
      com_a = {},
      com_b = {},
      com_c = {},
      ar_a = {},
      ar_b = {},
      ar_c = {};

    const objectDataSetter = (event, obj, sectionValue) => {
      obj.section = sectionValue;
      obj[event.category] = {};
      obj[event.category].boys = event.boys;
      obj[event.category].girls = event.girls;
    };

    data.map((e) => {
      if (
        e.group.toLowerCase() == "science" &&
        e.section.toUpperCase() == "A"
      ) {
        objectDataSetter(e, sc_a, "A");
      } else if (
        e.group.toLowerCase() == "science" &&
        e.section.toUpperCase() == "B"
      ) {
        objectDataSetter(e, sc_b, "B");
      } else if (
        e.group.toLowerCase() == "science" &&
        e.section.toUpperCase() == "C"
      ) {
        objectDataSetter(e, sc_c, "C");
      } else if (
        e.group.toLowerCase() == "commerce" &&
        e.section.toUpperCase() == "A"
      ) {
        objectDataSetter(e, com_a, "A");
      } else if (
        e.group.toLowerCase() == "commerce" &&
        e.section.toUpperCase() == "B"
      ) {
        objectDataSetter(e, com_b, "B");
      } else if (
        e.group.toLowerCase() == "commerce" &&
        e.section.toUpperCase() == "C"
      ) {
        objectDataSetter(e, com_c, "C");
      } else if (
        e.group.toLowerCase() == "arts" &&
        e.section.toUpperCase() == "A"
      ) {
        objectDataSetter(e, ar_a, "A");
      } else if (
        e.group.toLowerCase() == "arts" &&
        e.section.toUpperCase() == "B"
      ) {
        objectDataSetter(e, ar_b, "B");
      } else if (
        e.group.toLowerCase() == "arts" &&
        e.section.toUpperCase() == "C"
      ) {
        objectDataSetter(e, ar_c, "C");
      }
    });

    const finalData = {
      science: [sc_a, sc_b, sc_c],
      commerce: [com_a, com_b, com_c],
      arts: [ar_a, ar_b, ar_c],
    };

    return finalData;
  }
};

module.exports = arrageData;
