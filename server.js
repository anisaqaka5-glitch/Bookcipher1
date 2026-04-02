const { processText } = require('./perpunimiTekstit');
const { createIndex } = require('./krijimiIndeksit');
const { encrypt } = require('./enkriptimi');
const { decrypt } = require('./dekriptimi');

const bookText = `Kriptografia eshte shkenca e shkrimit te fshehte dhe mbrojtjes se informacionit ne kete projekt. 
                Nje liber mund te sherbeje si nje celes unik per te enkriptuar mesazhe te ndryshme. 
                Kur perdorim nje tekst te gjate, siguria rritet sepse cdo fjale shfaqet shume here 
                ne pozicione te ndryshme. Ky projekt tregon se si JavaScript mund te ndertoje 
                nje sistem te thjeshte por efikas te kodimit. 
                Siguria rritet vetem kur ne perdorim kete projekt me kujdes.`; 

const bookWords = processText(bookText); 
const index = createIndex(bookWords); 

const message = "siguria rritet ne kete projekt";

const encrypted = encrypt(message, index);
const decrypted = decrypt(encrypted, bookWords);

console.log("KODI I ENKRIPTUAR: ", encrypted);
console.log("MESAZHI I DEKRIPTUAR:", decrypted);
