/*
    Gloppy - find duplicated values in data.

    ( credits to "le frog de peppa pig#6844" on Discord for the name! awesome name! )
*/

function gloppy() {
    console.log("Current Gloppy modules:\n- Gloppy.arr (accepts arrays)")
}

// Gloppy.arr module
function arr(data, allow_case_sensitive = false) {
    if (Array.isArray(data) == true) {
        console.log('\x1b[1m' , "Alright, let's scan for some duplicated values now!\n", '\x1b[0m')
        let counts = {}

        if (allow_case_sensitive == false) {
            for (let i = 0; i < data.length; i++) {
                if (counts[data[i].toString().toLowerCase()]) {
                    counts[data[i].toString().toLowerCase()] += 1
                } else {
                    counts[data[i].toString().toLowerCase()] = 1
                }
            }
        } else if (allow_case_sensitive == true) {
            for (let i = 0; i < data.length; i++) {
                if (counts[data[i]]) {
                    counts[data[i]] += 1
                } else {
                    counts[data[i]] = 1
                }
            }
        }

        for (k in counts) {
            if (counts[k] > 1) {
                console.log('\x1b[31m', `'${k}' was repeated ${counts[k]} times`, '\x1b[0m')
            }
        }
        console.log('\x1b[32m', `\nAnalysis completed! Final dictionary:\n${JSON.stringify(counts)}\n`, '\x1b[0m')
    } else {
        console.log("The Gloppy.arr module only accepts arrays!")
    }
}

module.exports = { gloppy, arr }
