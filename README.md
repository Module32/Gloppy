<img width="1376" alt="gloppy" src="https://user-images.githubusercontent.com/78182297/144726056-aa6ea4f1-b877-4581-8500-6b58c9eff5bc.png">

# Gloppy

### About
Gloppy is an easy-to-use program that finds duplicated values in data. It's quite simple and designed around basic Node.js, meaning it's dependency-less!

### Usage
#### gloppy.arr
To get started with Gloppy, copy this command into your terminal:
`npm i @module64/gloppy`
After that, you can simply pass an array into the `arr` function:
```js
const gloppy = require("@module64/gloppy");
let greetings = ["hi", "hello", "hey"]

gloppy.arr(greetings)
```
Deconstructing the module is also possible:
```js
const { arr } = require("@module64/gloppy");
let greetings = ["hi", "hello", "hey"]

arr(greetings)
```
Gloppy comes with a case-sensitive parameter that is automatically set to false. This means that no matter if multiple values are uppercase or lowercase, as long as they have the same value, they will be considered duplicates. So the values `hi` and `Hi` will be regarded as duplicates by default. If you would not like this, you can simply set the second parameter to `true`:
```js
let greetings = ["hi", "Hi", "HI"]

gloppy.arr(greetings, true) // This will regard "hi", "Hi", and "HI" as three separate, distinct values
```
We have a few more ideas planned for Gloppy, so stay tuned!

###### Gloppy, 2021 - really simple!
