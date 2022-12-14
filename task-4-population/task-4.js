import { apiEndpoints } from "./api-endpoints.js";
import { calcPopulation, calcArea, borderCountries} from "./functions.js";

console.log('*************************************CALCULATE POPULATION*************************************')

const earthPopulation = await calcPopulation(apiEndpoints.WORLD)
const euPopulation = await calcPopulation(apiEndpoints.EUROPEAN_UNION)
const eeuPopulation = await calcPopulation(apiEndpoints.EURASIAN_ECONOMIC_UNION)
const usanPopulation = await calcPopulation(apiEndpoints.UNION_OF_SOUTH_AMERICAN_NATIONS)

console.log(`World population is ${earthPopulation} mln people`);
console.log(`European Union population is ${euPopulation} mln people`);
console.log(`Eurasian Economic Union population is ${eeuPopulation} mln people`);
console.log(`Union of South American Nations population is ${usanPopulation} mln people`);

console.log('*************************************CALCULATE AREA******************************************')

const swedenArea = await calcArea(apiEndpoints.SWEDEN)
const ukraineArea = await calcArea(apiEndpoints.UKRAINE)

console.log(`Area of Sweden is ${swedenArea} km2`);
console.log(`Area of Ukraine is ${ukraineArea} km2, yet`);

console.log('*************************************CALCULATE BORDER COUNTRIES******************************')

const pakistanBorders = await borderCountries(apiEndpoints.PAKISTAN)

console.log(`Pakistan has ${pakistanBorders.count} border countries: ${pakistanBorders.countries}`);
