function Encode() {
    let CryptoJS = require("crypto-js");
     this.file_mime = this.file.type;
     this.file_name = this.file.name;
     let reader = new FileReader();
     reader.onload = () => {
         let key = "1234567887654321";
         // let wordArray = CryptoJS.lib.WordArray.create(reader.result);
         // let plaintext = CryptoJS.enc.Hex.stringify(wordArray);
         let encrypted = CryptoJS.AES.encrypt(reader.result, key).toString();

         this.file2 = new Blob([encrypted], {
             type: this.file_mime
         });
         const a = document.createElement("a");
         const url = window.URL.createObjectURL(this.file2);
         const filename = this.file_name;
         a.href = url;
         a.download = filename;
         a.click();
         window.URL.revokeObjectURL(url);
     };
     reader.readAsBinaryString(this.file);
 }

 function Decode() {
    let CryptoJS = require("crypto-js");
    let reader = new FileReader();
    reader.onload = () => {
        let key = "1234567887654321";
        let decrypted = CryptoJS.AES.decrypt(reader.result, key).toString(CryptoJS.enc.Utf8)
        this.file2 = new Blob([decrypted], {type: this.file_mime});
        const a = document.createElement("a");
        const url = window.URL.createObjectURL(this.file2);
        const filename = this.file_name;
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    reader.readAsBinaryString(this.file);
}
