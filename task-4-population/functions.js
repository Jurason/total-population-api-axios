import axios from "axios";

export const calcPopulation = async (region) => {
    let population = 0
    const dataArrayRequest = await axios.get(region)
    dataArrayRequest.data.map(e => population += e.population)
    return Math.round(population / 10000) / 100
}

export const calcArea = async (country) => {
    let area = 0
    const dataArrayRequest = await axios.get(country)
    dataArrayRequest.data.map(e => area += e.area)
    return `${area} km2`;
}

export const countOfBorderCountries = async (country) => {
    const dataArrayRequest = await axios.get(country)
    return dataArrayRequest.data[0].borders.length
}
