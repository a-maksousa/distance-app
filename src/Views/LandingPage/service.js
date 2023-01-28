const { cities } = require("cities");

export const GetCities = (SearchText) => async (onSuccess, onFail) => {
  try {
    const response = await SearchCityApi(SearchText);
    onSuccess(response);
  } catch (ex) {
    onFail("Unknown Error");
  }
};

const SearchCityApi = (SearchText) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (SearchText?.toLowerCase() === "fail") {
        reject();
      }
      const matchedCities = cities.filter((item) => item[0]?.toLowerCase().match(SearchText?.toLowerCase()));
      resolve(matchedCities);
    }, 500);
  });
};
