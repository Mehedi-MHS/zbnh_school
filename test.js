const data = [
  { group: "science", section: "A", category: "total", boys: "0", girls: "0" },
  { group: "science", section: "A", category: "muslim", boys: "0", girls: "0" },
  { group: "science", section: "A", category: "hindu", boys: "0", girls: "0" },
  {
    group: "science",
    section: "A",
    category: "stipend",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "A",
    category: "merit_stipend",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "A",
    category: "repeater",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "A",
    category: "transfer_in",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "A",
    category: "transfer_out",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "A",
    category: "final_attendence",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "A",
    category: "final_promotion",
    boys: "0",
    girls: "0",
  },
  { group: "science", section: "B", category: "total", boys: "0", girls: "0" },
  { group: "science", section: "B", category: "muslim", boys: "0", girls: "0" },
  { group: "science", section: "B", category: "hindu", boys: "0", girls: "0" },
  {
    group: "science",
    section: "B",
    category: "stipend",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "B",
    category: "merit_stipend",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "B",
    category: "repeater",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "B",
    category: "transfer_in",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "B",
    category: "transfer_out",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "B",
    category: "final_attendence",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "B",
    category: "final_promotion",
    boys: "0",
    girls: "0",
  },
  { group: "science", section: "c", category: "total", boys: "0", girls: "0" },
  { group: "science", section: "c", category: "muslim", boys: "0", girls: "0" },
  { group: "science", section: "c", category: "hindu", boys: "0", girls: "0" },
  {
    group: "science",
    section: "c",
    category: "stipend",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "c",
    category: "merit_stipend",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "c",
    category: "repeater",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "c",
    category: "transfer_in",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "c",
    category: "transfer_out",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "c",
    category: "final_attendence",
    boys: "0",
    girls: "0",
  },
  {
    group: "science",
    section: "c",
    category: "final_promotion",
    boys: "0",
    girls: "0",
  },
  { group: "commerce", section: "A", category: "total", boys: "0", girls: "0" },
  {
    group: "commerce",
    section: "A",
    category: "muslim",
    boys: "0",
    girls: "0",
  },
  { group: "commerce", section: "A", category: "hindu", boys: "0", girls: "0" },
  {
    group: "commerce",
    section: "A",
    category: "stipend",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "A",
    category: "merit_stipend",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "A",
    category: "repeater",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "A",
    category: "transfer_in",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "A",
    category: "transfer_out",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "A",
    category: "final_attendence",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "A",
    category: "final_promotion",
    boys: "0",
    girls: "0",
  },
  { group: "commerce", section: "B", category: "total", boys: "0", girls: "0" },
  {
    group: "commerce",
    section: "B",
    category: "muslim",
    boys: "0",
    girls: "0",
  },
  { group: "commerce", section: "B", category: "hindu", boys: "0", girls: "0" },
  {
    group: "commerce",
    section: "B",
    category: "stipend",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "B",
    category: "merit_stipend",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "B",
    category: "repeater",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "B",
    category: "transfer_in",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "B",
    category: "transfer_out",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "B",
    category: "final_attendence",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "B",
    category: "final_promotion",
    boys: "0",
    girls: "0",
  },
  { group: "commerce", section: "C", category: "total", boys: "0", girls: "0" },
  {
    group: "commerce",
    section: "C",
    category: "muslim",
    boys: "0",
    girls: "0",
  },
  { group: "commerce", section: "C", category: "hindu", boys: "0", girls: "0" },
  {
    group: "commerce",
    section: "C",
    category: "stipend",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "C",
    category: "merit_stipend",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "C",
    category: "repeater",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "C",
    category: "transfer_in",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "C",
    category: "transfer_out",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "C",
    category: "final_attendence",
    boys: "0",
    girls: "0",
  },
  {
    group: "commerce",
    section: "C",
    category: "final_promotion",
    boys: "0",
    girls: "0",
  },
  { group: "arts", section: "A", category: "total", boys: "0", girls: "0" },
  { group: "arts", section: "A", category: "muslim", boys: "0", girls: "0" },
  { group: "arts", section: "A", category: "hindu", boys: "0", girls: "0" },
  { group: "arts", section: "A", category: "stipend", boys: "0", girls: "0" },
  {
    group: "arts",
    section: "A",
    category: "merit_stipend",
    boys: "0",
    girls: "0",
  },
  { group: "arts", section: "A", category: "repeater", boys: "0", girls: "0" },
  {
    group: "arts",
    section: "A",
    category: "transfer_in",
    boys: "0",
    girls: "0",
  },
  {
    group: "arts",
    section: "A",
    category: "transfer_out",
    boys: "0",
    girls: "0",
  },
  {
    group: "arts",
    section: "A",
    category: "final_attendence",
    boys: "0",
    girls: "0",
  },
  {
    group: "arts",
    section: "A",
    category: "final_promotion",
    boys: "0",
    girls: "0",
  },
  { group: "arts", section: "B", category: "total", boys: "0", girls: "0" },
  { group: "arts", section: "B", category: "muslim", boys: "0", girls: "0" },
  { group: "arts", section: "B", category: "hindu", boys: "0", girls: "0" },
  { group: "arts", section: "B", category: "stipend", boys: "0", girls: "0" },
  {
    group: "arts",
    section: "B",
    category: "merit_stipend",
    boys: "0",
    girls: "0",
  },
  { group: "arts", section: "B", category: "repeater", boys: "0", girls: "0" },
  {
    group: "arts",
    section: "B",
    category: "transfer_in",
    boys: "0",
    girls: "0",
  },
  {
    group: "arts",
    section: "B",
    category: "transfer_out",
    boys: "0",
    girls: "0",
  },
  {
    group: "arts",
    section: "B",
    category: "final_attendence",
    boys: "0",
    girls: "0",
  },
  {
    group: "arts",
    section: "B",
    category: "final_promotion",
    boys: "0",
    girls: "0",
  },
  { group: "arts", section: "C", category: "total", boys: "0", girls: "0" },
  { group: "arts", section: "C", category: "muslim", boys: "0", girls: "0" },
  { group: "arts", section: "C", category: "hindu", boys: "0", girls: "0" },
  { group: "arts", section: "C", category: "stipend", boys: "0", girls: "0" },
  {
    group: "arts",
    section: "C",
    category: "merit_stipend",
    boys: "0",
    girls: "0",
  },
  { group: "arts", section: "C", category: "repeater", boys: "0", girls: "0" },
  {
    group: "arts",
    section: "C",
    category: "transfer_in",
    boys: "0",
    girls: "0",
  },
  {
    group: "arts",
    section: "C",
    category: "transfer_out",
    boys: "0",
    girls: "0",
  },
  {
    group: "arts",
    section: "C",
    category: "final_attendence",
    boys: "0",
    girls: "0",
  },
  {
    group: "arts",
    section: "C",
    category: "final_promotion",
    boys: "0",
    girls: "0",
  },
];

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
  if (e.group.toLowerCase() == "science" && e.section.toUpperCase() == "A") {
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

console.log(JSON.stringify(finalData.science[2]));
