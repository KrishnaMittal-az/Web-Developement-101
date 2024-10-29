// JS has 7 primitive data types
let a = null // null
let b = 34 // number
let c = true // can also be false (boolean)
let d = BigInt("1000") + BigInt("1000") // Bigint
let e = "Krishna" // string
let f = Symbol("I am a nice symbol") // symbol
let g = undefined // undefined

console.log(a, b, c, d, e, f, g)

console.log(typeof d)


// This below structure is an object

const item = {
    "Harry": true,
    "Shubh": false,
    "rohan": 67,
    "lapis": undefined
}

console.log(item["Harry"])

console.log(item["lol"]) // this undefined as this does not exist in the object
