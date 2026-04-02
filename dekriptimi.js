function decrypt(cipher, bookWords) {
  
    const parts = cipher.split(" ");
    const result = [];

    for (let i = 0; i < parts.length; i++) {
        const p = parts[i];

        if (p === "?") {
            result.push("?");
        } else {
            const word = bookWords[parseInt(p)];
            result.push(word);
        }
    }

    return result.join(" ");
}

module.exports = { decrypt };