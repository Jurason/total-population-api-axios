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
    return dataArrayRequest.data.reduce((acc, el) => {
        const {area} = el
        if (area) acc += area
        return acc
    }, 0);
}

export const borderCountries = async (country) => {
    const dataArrayRequest = await axios.get(country)
    return dataArrayRequest.data.reduce((acc, el) => {
        if (el['borders']) {
            acc.count += el['borders'].length
            acc.countries += el['borders']
        }
        return acc
    }, {countries: 0, count: 0})
}

export const showData = async (country) => {
    return await axios.get(country)
}