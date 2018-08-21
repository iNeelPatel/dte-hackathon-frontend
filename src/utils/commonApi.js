import Parse from "parse";

export const checkRole = (role, user) => {
  const adminRoleQuery = new Parse.Query(Parse.Role);
  adminRoleQuery.equalTo("name", role);
  adminRoleQuery.equalTo("users", user);
  return adminRoleQuery.first();
};

export const getRole = role => {
  const adminRoleQuery = new Parse.Query(Parse.Role);
  adminRoleQuery.equalTo("name", role);
  return adminRoleQuery.first();
};

export const getUserRoles = user => {
  const roleQuery = new Parse.Query(Parse.Role);
  roleQuery.equalTo("users", user);
  return roleQuery.find();
};

const slotMap = [
  "-",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "#"
];

export const getSlots = () => {
  return slotMap;
};
export const getSlot = (type, define) => {
  if (type === "slot") {
    return slotMap.indexOf(define);
  } else {
    return slotMap[define];
  }
};
