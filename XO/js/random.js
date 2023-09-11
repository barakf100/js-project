const getRandomIntInclusive = (min, max) => {
    /*
        generate random number between min and max
        example generate random number between 1 to 10
      */
    min = Math.ceil(min); // round up
    max = Math.floor(max); // round down
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

export { getRandomIntInclusive };
