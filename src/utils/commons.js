const removeUnit = (price) => {
  if (price) {
    return price.replace(/[^0-9\.]+/g, "");
  } else {
    return "";
  }
};

module.exports = { removeUnit };
