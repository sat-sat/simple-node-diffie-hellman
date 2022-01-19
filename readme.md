# Basic Diffie-Hellman key exchange using node/crypto

This is a very basic example of how the Diffie-Hellman key exchange works.

**Workflow:**
- We first create a diffieHellman instance for Alice and generate keys for her.
- Then we create a diffieHellman instance for Bob using Alice's generator and prime number.
- Then both Alice and Bob computes their secret individuall using each other's public key.
- We simply assert that the secrets produced by both parties to be equal at the end.