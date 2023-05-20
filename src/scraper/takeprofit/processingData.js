const { checkIndexIsChecked } = require("./../../utils/vietstock/commons");

const TEXT_WARNINGS = "Đang bị cảnh báo";

const processingData = (dataInfo) => {
  const dataScraper = [];

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 1,
    title: "TP Score",
    value:
      dataInfo?.scoreTP === ""
        ? ""
        : dataInfo?.scoreTP !== "/10"
        ? `=${dataInfo?.scoreTP}`
        : `---`,
  });
  /////////////////////////////////////////////////

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 2,
    title: "F Score",
    value:
      dataInfo?.scoreF === ""
        ? ""
        : dataInfo?.scoreF !== "/10"
        ? `=${dataInfo?.scoreF}`
        : `---`,
  });
  /////////////////////////////////////////////////

  // Sort
  const dataSort = dataScraper.sort((a, b) => a.id - b.id);
  /////////////////////////////////////////////////

  // Remove id
  dataSort.forEach((item) => {
    delete item.id;
  });

  return dataSort;
};

module.exports = processingData;
