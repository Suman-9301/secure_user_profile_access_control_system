const { encrypt, decrypt } = require("./encryption");

test("Encrypt and decrypt Aadhaar correctly", () => {
  const aadhaar = "123456789012";
  const encrypted = encrypt(aadhaar);
  const decrypted = decrypt(encrypted);
  expect(decrypted).toBe(aadhaar);
});
