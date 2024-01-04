
  var originalFilename;

  document.getElementById('fileInput').addEventListener('change', function(evt) {
   var file = evt.target.files[0];
   var reader = new FileReader();
   reader.onload = function(e) {
       var contents = e.target.result;
       window.selectedFileContents = contents;
       originalFilename = file.name;
   };
   reader.readAsBinaryString(file);
  });
  
  window.encryptFile = function() {
   var password = prompt('Enter a password to encrypt the file:');
   var keyBytes = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
   var encryptedData = CryptoJS.AES.encrypt(window.selectedFileContents, keyBytes).toString();
   downloadFile(encryptedData, originalFilename);
  };
  
  window.decryptFile = function() {
   var password = prompt('Enter the password to decrypt the file:');
   var keyBytes = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
   var decryptedData = CryptoJS.AES.decrypt(window.selectedFileContents, keyBytes).toString(CryptoJS.enc.Utf8);
   downloadFile(decryptedData, originalFilename);
  };
  
   
   function convertWordArrayToUint8Array(wordArray) {
    var arrayOfWords = wordArray.hasOwnProperty("words") ? wordArray.words : [];
    var length = wordArray.hasOwnProperty("sigBytes") ? wordArray.sigBytes : arrayOfWords.length * 4;
    var uInt8Array = new Uint8Array(length), index=0, word, i;
    for (i=0; i<length; i++) {
      word = arrayOfWords[i];
      uInt8Array[index++] = word >> 24;
      uInt8Array[index++] = (word >> 16) & 0xff;
      uInt8Array[index++] = (word >> 8) & 0xff;
      uInt8Array[index++] = word & 0xff;
    }
    return uInt8Array;
   }
   
   function downloadFile(contents, originalFilename) {
    var blob = new Blob([contents], {type: 'application/octet-stream'});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = originalFilename;
    link.click();
   }
   
  