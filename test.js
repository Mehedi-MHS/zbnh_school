const data = [
  { category: "total", boys: "0", girls: "0", section: "A" },
  { category: "muslim", boys: "0", girls: "0", section: "A" },
  { category: "hindu", boys: "0", girls: "0", section: "A" },
  { category: "stipend", boys: "0", girls: "0", section: "A" },
  { category: "merit_stipend", boys: "0", girls: "0", section: "A" },
  { category: "repeater", boys: "0", girls: "0", section: "A" },
  { category: "transfer_in", boys: "0", girls: "0", section: "A" },
  { category: "transfer_out", boys: "0", girls: "0", section: "A" },
  { category: "final_attendence", boys: "0", girls: "0", section: "A" },
  { category: "final_promotion", boys: "0", girls: "0", section: "A" },
  { category: "total", boys: "0", girls: "0", section: "B" },
  { category: "muslim", boys: "0", girls: "0", section: "B" },
  { category: "hindu", boys: "0", girls: "0", section: "B" },
  { category: "stipend", boys: "0", girls: "0", section: "B" },
  { category: "merit_stipend", boys: "0", girls: "0", section: "B" },
  { category: "repeater", boys: "0", girls: "0", section: "B" },
  { category: "transfer_in", boys: "0", girls: "0", section: "B" },
  { category: "transfer_out", boys: "0", girls: "0", section: "B" },
  { category: "final_attendence", boys: "0", girls: "0", section: "B" },
  { category: "final_promotion", boys: "0", girls: "0", section: "B" },
  { category: "total", boys: "0", girls: "0", section: "C" },
  { category: "muslim", boys: "0", girls: "0", section: "C" },
  { category: "hindu", boys: "0", girls: "0", section: "C" },
  { category: "stipend", boys: "0", girls: "0", section: "C" },
  { category: "merit_stipend", boys: "0", girls: "0", section: "C" },
  { category: "repeater", boys: "0", girls: "0", section: "C" },
  { category: "transfer_in", boys: "0", girls: "0", section: "C" },
  { category: "transfer_out", boys: "0", girls: "0", section: "C" },
  { category: "final_attendence", boys: "0", girls: "0", section: "C" },
  { category: "final_promotion", boys: "0", girls: "0", section: "C" },
];
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
console.log(objA);
console.log(objB);
console.log(objC);
