// Implements Linear Congruential Generator pseudo number random generator
_LCG = (seed, m, a, c) => {
    const newSeed = (seed * a + c) % m;
    return newSeed;
}

_random = (seed, min, max) => {
    const modulus = Math.pow(2, 31);
    const multiplier = 1103515245;
    const constant = 12345;

    seed = _LCG(seed, modulus, multiplier, constant);
    const number = Math.round((seed / modulus) * (max - min) + min);
    return { number, seed };
}

const random = (min, max) => {
    let seed = new Date().getTime();
    return () => {
        const random = _random(seed, min, max);
        seed = random.seed;

        return random.number;
    }
};

module.exports = {
    random,
    rollDice: random(1, 6),
}