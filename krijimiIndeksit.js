function createIndex(words) {

    if (!Array.isArray(words)) return {};

    const index = {};

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (!index[word]) {
            index[word] = [];
        }

        index[word].push(i);
    }

    return index;