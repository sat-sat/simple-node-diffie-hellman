# node/crypto Diffie-Hellman

This is a very basic example of how the Diffie-Hellman key exchange works when using node's crypto module.

**Workflow:**
- We first create a `diffieHellman` instance for Alice and generate keys for her.
- Then we create a `diffieHellman` instance for Bob using Alice's generator and prime number.
- Then both Alice and Bob computes their secrets individuall using each other's public keys.
- We simply assert that the secrets produced by both parties to be equal at the end.