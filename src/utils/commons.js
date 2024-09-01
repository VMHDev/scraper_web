const removeUnit = (price) => {
  if (price) {
    return price.replace(/[^0-9\.]+/g, "");
  } else {
    return "";
  }
};

const delayRequest = (ms, description) => {
  return new Promise((resolve) => {
    console.log(`\nDelay ${ms}ms (${description})`);
    setTimeout(resolve, ms);
  });
};

module.exports = { removeUnit, delayRequest };
