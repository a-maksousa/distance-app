import { cities } from "cities";
import haversine from "haversine-distance";

export const MeasureAllDistances = (origin, intermediate, destination) => async (onSuccess, onFail) => {
  try {
    const originLines = await SearchCityApi(origin);
    const destinationLines = await SearchCityApi(destination);

    if (intermediate.length === 0) {
      const distance = await calculateDistance(originLines, destinationLines);
      onSuccess([{ name: destination, distance }]);
    } else {
      const lstDistances = [];
      for (const [index, City] of intermediate?.entries()) {
        const cityLines = await SearchCityApi(City);
        let distance = 0;
        if (index === 0) {
          distance = await calculateDistance(cityLines, originLines);
        } else {
          const prevCLines = await SearchCityApi(intermediate[index - 1]);
          distance = await calculateDistance(cityLines, prevCLines);
        }
        lstDistances.push({ name: City, distance });
      }
      const lastIntCityLines = await SearchCityApi(intermediate[intermediate.length - 1]);
      const lastDistance = await calculateDistance(lastIntCityLines, destinationLines);
      lstDistances.push({ name: destination, distance: lastDistance });
      onSuccess(lstDistances);
    }
  } catch (ex) {
    onFail("Unknown Error");
  }
};

const SearchCityApi = (SearchText) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const matchedCity = cities.find((item) => item[0]?.toLowerCase() === SearchText?.toLowerCase());
      if (matchedCity) {
        resolve(matchedCity);
      }
      reject();
    }, 100);
  });
};

const calculateDistance = (origin, destination) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ([origin[0], destination[0]].includes("Dijon")) {
        reject();
      }
      resolve(
        Math.round(haversine({ lat: origin[1], lng: origin[2] }, { lat: destination[1], lng: destination[2] }) / 1000)
      );
    }, 100);
  });
};
