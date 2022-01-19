/**
 * This is a very basic example of how the Diffie-Hellman key exchange works.
 * 
 * We first create a diffieHellman instance for Alice and generate keys for her.
 * 
 * Then we create a diffieHellman instance for Bob using Alice's generator and prime number.
 * 
 * Then both Alice and Bob computes their secret individuall using each other's public key.
 * 
 * We simply assert that the secrets produced by both parties to be equal at the end.
 */
const assert = require('assert');

const { createDiffieHellman } = require('crypto');

// Generate Alice's keys...
const alice = createDiffieHellman(2048);
const aliceKey = alice.generateKeys();

// Generate Bob's keys...
const bob = createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

// Assert that bob user's keys are equal...
assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
