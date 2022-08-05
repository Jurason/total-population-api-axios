import axios from "axios";

export const calcPopulation = async (region) => {
    const dataArrayRequest = await axios.get(region)
    const population = dataArrayRequest.data.reduce((acc, curr) => {
        if(curr.population) return acc + curr.population
        return acc
    }, 0)
    return Math.round(population / 10000) / 100
}

export const calcArea = async (country) => {
    const dataArrayRequest = await axios.get(country)
    const area = dataArrayRequest.data.reduce((acc, curr) => {
        if(curr.area) return acc + curr.area
        return acc
    }, 0)
    return `${area} km2`;
}

export const countOfBorderCountries = async (country) => {
    const dataArrayRequest = await axios.get(country)
    return dataArrayRequest.data[0].borders.length
}

export const showData = async (country) => {
    return await axios.get(country)
}