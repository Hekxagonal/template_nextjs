import mapData from './map-data'

describe('map-data', () => {

    const data = {
        id: 123,
        name: 'eevee',
        sprites: {
            front_default: 'url',
            back_shiny: 'url2'
        }
    }
    it('should map even if there is no data', () => {
        const pagesData = mapData()
        expect(pagesData.id).toBe(null)
        expect(pagesData.name).toBe('')
        expect(pagesData.sprites).toEqual({})
    })

    it('should map data if there are data', () => {
        const pagesData = mapData(data)
        expect(pagesData.id).toBe(data.id)
        expect(pagesData.name).toBe(data.name)
        expect(pagesData.sprites).toEqual(data.sprites)
    })
    it('should map data from API', async () => {
       const response = await fetch('https://pokeapi.co/api/v2/pokemon/eevee')
       const json = await response.json()

       expect(json.id).toBe(133)
       expect(json.name).toBe('eevee')
    })
})