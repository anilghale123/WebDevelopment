let keyString = "your_key_string";
let keyBytes = CryptoJS.SHA256(keyString).toString(CryptoJS.enc.Hex);

console.log(keyString);
console.log(keyBytes);

// Encrypt data
function encryptData(data, secretKey) {
let encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
return encryptedData;
}

// Decrypt data
function decryptData(encryptedData, secretKey) {
let decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);
return JSON.parse(decryptedData);
}

let data = { service: "service", password: "password" };
let encryptedData = encryptData(data, keyBytes);
console.log("Encrypted data: ", encryptedData);

let decryptedData = decryptData(encryptedData, keyBytes);
console.log("Decrypted data: ", decryptedData);