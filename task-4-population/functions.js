import axios from "axios";

export const calcPopulation = async (region) => {
    const dataArrayRequest = await axios.get(region)
    const population = dataArrayRequest.data.reduce((acc, el) => {
        const { population } = el
        if(population) acc += population
        return acc
    }, 0)
    return Math.round(population / 10000) / 100
}

export const calcArea = async (country) => {
    const dataArrayRequest = await axios.get(country)
    const area = dataArrayRequest.data.reduce((acc, el) => {
        const { area } = el
        if(area) acc += area
        return acc
    }, 0)
    return area;
}

export const countOfBorderCountries = async (country) => {
    const dataArrayRequest = await axios.get(country)
    return dataArrayRequest.data[0].borders.length
}

export const showData = async (country) => {
    return await axios.get(country)
}