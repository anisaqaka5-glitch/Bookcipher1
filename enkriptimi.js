

function encrypt(message, index) {
let encrypted = [];


message = message.toLowerCase();

for (let i = 0; i < message.length; i++) {
let char = message[i];

if (char === " ") {
encrypted.push(" ");
continue;
}


if (index[char] && index[char].length > 0) {
let positions = index[char];


let randomIndex = Math.floor(Math.random() * positions.length);
let [line, word, letter] = positions[randomIndex];

encrypted.push(`(${line},${word},${letter})`);
} else {

encrypted.push("(?)");
}
}

return encrypted.join(" ");
}

export { encrypt };