
const ADJECTIVES = [
    'mobile',
    'phone',
    'dumbell',
    'trademill',
    'think',
    'purple',
    'sleep',
]

const OBJECTS = [
    'hand',
    'Nose',
    'lemon',
    'piano',
    'hurdle',
    'javelin',
    'window',
]

function getRandomUsername() {
    const adj = ADJECTIVES[Math.floor(Math.random()*7)]
    const obj = OBJECTS[Math.floor(Math.random()*7)]
    return `${adj}-${obj}`
}

module.exports = {
    getRandomUsername
}
