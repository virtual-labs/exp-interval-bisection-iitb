// gaussian elimination variables ----------------------------------------------------------------
let mat_c = [
    [
        7.2038
    ],
    [
        -14.165
    ],
    [
        71.985
    ]
];
let mat_a = [
    [
        96.8874,
        -4.023,
        9.4841
    ],
    [
        -35.4831,
        -92.0509,
        4.4445
    ],
    [
        4.0625,
        55.0972,
        -51.2556
    ]
];
//3 x 1 random numbers in [-100, 100]
function initialize_mat_c() {
    mat_c = [];
    let num1 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num2 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    let num3 = parseFloat((Math.random() * 200 - 100).toFixed(4));
    mat_c.push([num1]);
    mat_c.push([num2]);
    mat_c.push([num3]);
}
//3 x 3 random numbers in [-100, 100]
function initialize_mat_a() {
    mat_a = [];
    for (let i = 0; i < 3; i++) {
        let num1 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num2 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        let num3 = parseFloat((Math.random() * 100 - 50).toFixed(4));
        mat_a.push([num1, num2, num3]);
    }
    if (Math.abs(mat_a[0][0]) < 25) {
        mat_a[0][0] = 25;
    }
    mat_a[0][0] = mat_a[0][0] * 4;
}
initialize_mat_c();
initialize_mat_a();
let mat_x = [];
// Initialise variables
let a = parseInt((Math.random() * 5 + 50).toFixed(4));
let b = parseInt((Math.random() * 2 + 2).toFixed(4));
let table_data = [];
let minima = Infinity;
//# sourceMappingURL=data.js.map