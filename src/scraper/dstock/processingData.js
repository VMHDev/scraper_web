const processingData = (dataInfo) => {
  const dataScraper = [];

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 1,
    title: "D-Rating",
    value:
      dataInfo?.dRating === ""
        ? ""
        : dataInfo?.dRating
        ? `=${dataInfo?.dRating}/10`
        : `---`,
  });
  /////////////////////////////////////////////////

  /////////////////////////////////////////////////
  dataScraper.push({
    id: 2,
    title: "Greater D-Sector",
    value:
      dataInfo?.dRating === "" || dataInfo?.dSector === ""
        ? ""
        : dataInfo?.dRating > dataInfo?.dSector
        ? "x"
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
