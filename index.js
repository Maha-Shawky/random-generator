// Implements Linear Congruential Generator pseudo number random generator
//https://www.upwork.com/ab/proposals/job/~016bf99211be9dd9c4/apply/#/
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

const rollDice = random(1, 6);
module.exports = {
    random,
    rollDice
}