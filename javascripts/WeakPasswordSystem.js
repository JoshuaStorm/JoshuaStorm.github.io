function WeakPasswordDecode(content, password) {
    if (password.length === 0) return "";
    var encoder = new TextEncoder();
    var encodedContent = encoder.encode(decodeURI(content));
    var encodedPassword = encoder.encode(password);

    var xored = [];
    for (var i = 0; i < encodedContent.length; i++) {
      var xor = encodedContent[i] ^ encodedPassword[i % encodedPassword.length];
      xored.push(xor);
    }
    var xoredArrayBuffer = new Uint8Array(xored).buffer;
    var decoder = new TextDecoder();
    var decodedContent = decoder.decode(xoredArrayBuffer);
    console.log(encodeURI(decodedContent));

    console.log("Yes, I am aware this password scheme is weak. It is susceptible to many attacks. I simply wanted to have a serverless password scheme that would avoid SEO picking up on my plaintext and associating it with my professional website. Feel free to crack it if you're bored :)")

    return decodedContent;
  }
