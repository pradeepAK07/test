const obj = {
  name: "pradeep",
  details: function () {
    console.log("name " + this.name);
  },
};

const obj2 = {
  name: "pradeep",
};

const obj3 = {
  name: "law",
  age: 21,
};
const value = obj.details.bind(obj2);

value();
