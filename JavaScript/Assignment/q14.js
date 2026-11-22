let math = 40;
let science = 78;
let enlgish = 59;

let total = math + science + enlgish;

if (math < 40 || science < 40 || enlgish < 40) {
    console.log("Result : FAIL");
} else {
    let avg = total / 3;

    if (avg >= 75) {
        console.log("Distinction");
    } else if (avg >= 60) {
        console.log("First Division");
    } else if (avg >= 50) {
        console.log("Second Division");
    } else {
        console.log("Pass");
    }
}
