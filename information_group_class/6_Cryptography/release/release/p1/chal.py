#!/usr/bin/env python3
import cv2      #pip install opencv-python
import random
import string

charset = string.ascii_letters + string.digits + '+='
# abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+=
print(charset)
fire, water, earth, air = [random.choice(charset) for _ in range(4)]

def combine(a, b):
    return ''.join([a,b])

def encrypt(arr):
    swamp  = combine(water, earth) # swap = water,earth
    energy = combine(fire, air) # energy = fire,air
    lava   = combine(fire, earth) # lava = fire,earth
    life   = combine(swamp, energy) #life = water,earth,fire,air
    stone  = combine(lava, air) # stone = fire,earth,air
    sand   = combine(stone, water)  # sand = fire,earth,air,water
    seed   = combine(sand, life) # seed = fire,earth,air,water,water,earth,fire,air
    random.seed(seed)
    
    h, w = arr.shape
    for i in range(h):
        for j in range(w):
            arr[i][j] ^= random.randint(0,255) # XOR with random number

for i in ['flag', 'main']:
    msg = cv2.imread(i+'.png', cv2.IMREAD_GRAYSCALE)
    encrypt(msg)
    cv2.imwrite(i+'_enc.png', msg)
    
