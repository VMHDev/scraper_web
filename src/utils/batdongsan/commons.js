const moment = require("moment");
const { TYPE_DATE } = require("./../../constants/batdongsan");

const removeUnit = (price) => {
  if (price) {
    return price.replace(/[^0-9\.]+/g, "");
  } else {
    return "";
  }
};

const processDate = (date) => {
  switch (date) {
    case TYPE_DATE.TODAY:
      return moment().format("YYYY/MM/DD");
    case TYPE_DATE.YESTERDAY:
      return moment().subtract(1, "days").format("YYYY/MM/DD");
    case TYPE_DATE.DAY_TWO:
      return moment().subtract(2, "days").format("YYYY/MM/DD");
    case TYPE_DATE.DAY_THREE:
      return moment().subtract(3, "days").format("YYYY/MM/DD");
    case TYPE_DATE.DAY_FOUR:
      return moment().subtract(4, "days").format("YYYY/MM/DD");
    default:
      return date;
  }
};

module.exports = { removeUnit, processDate };
