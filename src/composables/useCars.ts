import cars from '../../data/cars.json'

export interface ICar {
    id: number
    name: string
    price: string
    url: string
    seats: number
    miles: string
    features: string[]
    description: string
}

type TCars = ICar[]

export default (): TCars => {
    return cars
}
