// Deep clone an object.

Input: 

const input = {
    a: {
        b: "c",
        d: 1,
        e: {
            f: "h"
        }
    }
}

Sol: const b = JSON.parse(JSON.stringify({ ...input }));
Sol: Object.freeze({ ...input  });


(function() {var a = b = 5; console.log(a) })(); // undefined y 5
