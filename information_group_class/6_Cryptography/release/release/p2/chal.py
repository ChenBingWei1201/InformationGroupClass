from Crypto.Util.number import bytes_to_long, getPrime
import random
import math
import os

from secret import FLAG

FLAG += os.urandom(128 - len(FLAG))
flag = bytes_to_long(FLAG)
p = getPrime(1024) # Return a random N-bit prime number.
# keys = [pow(random.randint(1, 2), 65537, p) for i in range(5)]
keys = [pow(random.randint(1000 * i + 2, 1000 * (i+1) ), 65537, p) for i in range(5)]
# choose a number bwt 2, 1000 in keys[0]
# choose a number bwt 1002, 2000 in keys[1]
# choose a number bwt 2002, 3000 in keys[2]
# choose a number bwt 3002, 4000 in keys[3]
# choose a number bwt 4002, 5000 in keys[4]

enc = flag
for i in range(5):
    enc = enc * keys[i] % p

hint = keys[0] ^ keys[1] ^ keys[2] ^ keys[3] ^ keys[4]

print('p =', p) 
print('enc =', enc)
print('hint =', hint)
# print("keys[0]", keys[1])