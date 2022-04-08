interface mapObj {
    id?: number,
    name?: string,
    sprites?: spriteObj
}

interface spriteObj {
    front_default?: string,
    back_shiny?: string,
}

const mapData = (data: mapObj = {}) => {
    return {
        id: data.id || null,
        name: data.name || '',
        sprites: data.sprites || {}
    }
}

export default mapData