const { processText } = require('./perpunimiTekstit'); 

function encrypt(message, index) {

    const words = processText(message); 
    const result = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (index[word]) {
            const positions = index[word];
            const rand = Math.floor(Math.random() * positions.length);
            result.push(positions[rand]);
        } else {
            result.push("?");
        }
    }

    return result.join(" ");
}

module.exports = { encrypt };

