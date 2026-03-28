let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

    <div class='divide'>

		<div style='margin-top: 2vw;'>
			<br>
			<h4 class="center-text fs-20px fw-600">Bisection Method</h4>

			<div class="fs-16px">
			<p>Learning Objective: To find The Minima Using Bisection Method</p>
			</div>

			<button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
		</div>

    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
// let mat1 = get_matrix_html(3, 1, [[1], [2], [3]], 'inline-block');
// console.log(mat1);
//html for matrix inputs
let matrix_a_inputs = get_matrix_html(3, 3, [
    [
        `<input id='a1-mata-11' class='form-control' />`,
        `<input id='a1-mata-12' class='form-control' />`,
        `<input id='a1-mata-13' class='form-control' />`,
    ],
    [
        `<input id='a1-mata-21' class='form-control' />`,
        `<input id='a1-mata-22' class='form-control' />`,
        `<input id='a1-mata-23' class='form-control' />`,
    ],
    [
        `<input id='a1-mata-31' class='form-control' />`,
        `<input id='a1-mata-32' class='form-control' />`,
        `<input id='a1-mata-33' class='form-control' />`,
    ],
], 'inline-block', '60%');
let matrix_c_inputs = get_matrix_html(3, 1, [
    [`<input id='a1-matc-11' class='form-control' />`],
    [`<input id='a1-matc-21' class='form-control' />`],
    [`<input id='a1-matc-31' class='form-control' />`],
], 'inline-block', '25%');
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Define f(x)', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div>
			<h4>f(x) is defined by </h4>
			<p> 
			 $$ f(x) = \\frac{${a}}{x} + x^{${b}} $$
			</p>

			<h4>Take derivative of f(x)</h4>
			<p> 
			 $$ \\frac{df(x)}{dx} = f^{'}(x) = \\frac{-${a}}{x^{2}} + ${b}x^{${b - 1}} $$
			</p>
			
		</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='enter_values();'  id='temp-btn-12' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb1-box'), 150);
}
//--------------second part--------------------
function enter_values() {
    let btn_text = get_collapse_btn_text('First Guess', 'tb13-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb13-box'>

        <div>
			<h5>Take the initial guess <span>$$ x_1 = 2 \\space and \\space x_2 = 5 $$</span>  </h5>

			<p> 
			 $$ f^{'}(x) = \\frac{-${a}}{x^{2}} + ${b}x^{(${b - 1})} $$
			</p>

			<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
				<div class="col-lg-3">
					$$ f'(x_1) = $$
				</div>
				<div class=col-lg-3>
					<input type='number' id='f1-inp1' class='form-control fs-16px' />
				</div>
			</div>

			<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
				<div class="col-lg-3">
					$$ f'(x_2) = $$
				</div>
				<div class=col-lg-3>
					<input type='number' id='f1-inp2' class='form-control fs-16px' />
				</div>
			</div>



			
		</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_first_guess()'  id='temp-btn-12' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb13-box'), 150);
}
function calculate_f_dash(x) {
    return (-(a / (Math.pow(x, 2))) + b * (Math.pow(x, (b - 1))));
}
function verify_first_guess() {
    let inp1 = document.getElementById('f1-inp1');
    let inp2 = document.getElementById('f1-inp2');
    let f_dash_x1 = calculate_f_dash(2);
    let f_dash_x2 = calculate_f_dash(5);
    console.log(f_dash_x1, f_dash_x2);
    if (!verify_values(parseFloat(inp1.value), f_dash_x1)) {
        inp1.style.border = '1px solid red';
        alert('f\'(x1) value is Incorrect ');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), f_dash_x2)) {
        inp2.style.border = '1px solid red';
        alert('f\'(x2) value is Incorrect ');
        return;
    }
    alert('Great! You have entered correct values.');
    table_data.push([2, f_dash_x1, 5, f_dash_x2]);
    let bn = document.getElementById('temp-btn-12');
    bn && bn.remove();
    let p1 = inp1.parentElement;
    let ele1 = document.createElement('span');
    ele1.innerText = f_dash_x1.toFixed(5);
    p1.appendChild(ele1);
    inp1.remove();
    let p2 = inp2.parentElement;
    let ele2 = document.createElement('span');
    ele2.innerText = f_dash_x2.toFixed(5);
    p2.appendChild(ele2);
    inp2.remove();
    iteration_1();
}
//--------------third part--------------------
function iteration_1() {
    let btn_text = get_collapse_btn_text('First iteration', 'tb14-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb14-box'>

        <div>

			<p> 
			 $$ x_3 = \\frac{x_1 + x_2}{2} = 3.5 $$
			</p>

			<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
				<div class="col-lg-3">
					$$ x_3 = \\frac{x_1 + x_2}{2} = $$
				</div>
				<div class=col-lg-3>
					<input type='number' id='f1-inp30' class='form-control fs-16px' />
				</div>
			</div>

			<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
				<div class="col-lg-3">
					$$ f'(x_3) = $$
				</div>
				<div class=col-lg-3>
					<input type='number' id='f1-inp3' class='form-control fs-16px' />
				</div>
			</div>

			<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
				<div class="col-lg-3">
					$$ f'(x_1) \\times f'(x_3) =  $$
				</div>
				<div class=col-lg-3>
					<input type='number' id='f1-inp41' class='form-control fs-16px' />
				</div>
			</div>

			<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
				<div class="col-lg-3">
					$$ f'(x_2) \\times f'(x_3) =  $$
				</div>
				<div class=col-lg-3>
					<input type='number' id='f1-inp42' class='form-control fs-16px' />
				</div>
			</div>

			
		</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_itr_1()'  id='temp-btn-12' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb14-box'), 150);
}
function verify_itr_1() {
    let inp30 = document.getElementById('f1-inp30');
    let inp3 = document.getElementById('f1-inp3');
    let inp32 = document.getElementById('f1-inp41');
    let inp33 = document.getElementById('f1-inp42');
    const f_dash_x3 = calculate_f_dash(3.5);
    const res1 = f_dash_x3 * table_data[0][1];
    const res2 = f_dash_x3 * table_data[0][3];
    console.log(3.5, f_dash_x3, res1, res2);
    if (!verify_values(parseFloat(inp30.value), 3.5)) {
        inp30.style.border = '1px solid red';
        alert('x3 value is Incorrect ');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), f_dash_x3)) {
        inp3.style.border = '1px solid red';
        alert('f\'(x3) value is Incorrect ');
        return;
    }
    if (!verify_values(parseFloat(inp32.value), res1)) {
        inp32.style.border = '1px solid red';
        alert('Entered value is Incorrect ');
        return;
    }
    if (!verify_values(parseFloat(inp33.value), res2)) {
        inp33.style.border = '1px solid red';
        alert('Entered value is Incorrect ');
        return;
    }
    alert('Great! You have entered correct value.');
    table_data[0].push(3.5);
    table_data[0].push(f_dash_x3);
    let msg = document.getElementById('render-root-condition');
    if (res1 < 0) {
        //msg.innerHTML = "<span>Since   f'(x<sub>1</sub>) x f'(x<sub>3</sub>) < 0 <span>"
        table_data.push([2, table_data[0][1], 3.5, table_data[0][5], 2.75, calculate_f_dash(2.75)]);
    }
    else if (res2 < 0) {
        //msg.innerHTML = "<span>Since   f'(x<sub>2</sub>) x f'(x<sub>3</sub>) < 0 $$ <span>"
        table_data.push([3.5, table_data[0][5], 5, table_data[0][3], 4.25, calculate_f_dash(4.25)]);
    }
    let bn = document.getElementById('temp-btn-12');
    bn && bn.remove();
    let p1 = inp30.parentElement;
    let ele1 = document.createElement('span');
    ele1.innerText = (3.5).toFixed(5);
    p1.appendChild(ele1);
    inp30.remove();
    let p2 = inp3.parentElement;
    let ele2 = document.createElement('span');
    ele2.innerText = f_dash_x3.toFixed(5);
    p2.appendChild(ele2);
    inp3.remove();
    let p3 = inp32.parentElement;
    let ele3 = document.createElement('span');
    ele3.innerText = res1.toFixed(5);
    p3.appendChild(ele3);
    inp32.remove();
    let p4 = inp33.parentElement;
    let ele4 = document.createElement('span');
    ele4.innerText = res2.toFixed(5);
    p4.appendChild(ele4);
    inp33.remove();
    iteration_1_continue();
}
//--------------fourth part--------------------------
function iteration_1_continue() {
    let btn_text = get_collapse_btn_text('Update X1 and X2 Values', 'tb15-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb15-box'>

        <div>

			<div id='show-condition-div' >
				<h5 id='render-root-condition'></h5>

				<h5>Enter the updated values of <span>$$ x_1 \\space and \\space x_2 $$</span></h5>
				

				<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
					<div class="col-lg-3">
						$$ x_1 =  $$
					</div>
					<div class=col-lg-3>
						<input type='number' id='f1-inp51' class='form-control fs-16px' />
					</div>
				</div>

				<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
					<div class="col-lg-3">
						$$ x_2 =  $$
					</div>
					<div class=col-lg-3>
						<input type='number' id='f1-inp52' class='form-control fs-16px' />
					</div>
				</div>

				<div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_condition_1()'  id='temp-btn-13' >Next</button></div>

			</div>

			
		</div>
        <br>  
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb15-box'), 150);
}
function verify_condition_1() {
    const inp1 = document.getElementById('f1-inp51');
    const inp2 = document.getElementById('f1-inp52');
    console.log(table_data[1][0], table_data[1][2]);
    if (!verify_values(parseFloat(inp1.value), table_data[1][0])) {
        inp1.style.border = '1px solid red';
        alert('f\'(x3) value is Incorrect ');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), table_data[1][2])) {
        inp2.style.border = '1px solid red';
        alert('f\'(x3) value is Incorrect ');
        return;
    }
    alert('You have entered correct values');
    let bn = document.getElementById('temp-btn-13');
    bn && bn.remove();
    let p1 = inp1.parentElement;
    let ele1 = document.createElement('span');
    ele1.innerText = table_data[1][0].toFixed(5);
    p1.appendChild(ele1);
    inp1.remove();
    let p2 = inp2.parentElement;
    let ele2 = document.createElement('span');
    ele2.innerText = table_data[1][2].toFixed(5);
    p2.appendChild(ele2);
    inp2.remove();
    iteration_2();
}
//------------------part five------------------------
function iteration_2() {
    let btn_text = get_collapse_btn_text('Iteration 2', 'tb16-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb16-box'>

        <div>

		<h5>We know x<sub>1</sub> =  ${table_data[1][0]} and x<sub>2</sub> = ${table_data[1][2]}</h5>


			<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
				<div class="col-lg-3">
				Let's take 
					$$ x_3 = \\frac{x_1 + x_2}{2} =  $$
				</div>
				<div class=col-lg-3>
					<input type='number' id='f1-inp61' class='form-control fs-16px' />
				</div>
			</div>

			<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
				<div class="col-lg-3">
				Let's take 
					$$ f'(x_3) =   $$
				</div>
				<div class=col-lg-3>
					<input type='number' id='f1-inp62' class='form-control fs-16px' />
				</div>
			</div>

			<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
				<div class="col-lg-3">
				Let's take 
					$$ f'(x_3) * f'(x1) =   $$
				</div>
				<div class=col-lg-3>
					<input type='number' id='f1-inp63' class='form-control fs-16px' />
				</div>
			</div>

			<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
				<div class="col-lg-3">
				Let's take 
					$$ f'(x_3)*f'(x_2) =   $$
				</div>
				<div class=col-lg-3>
					<input type='number' id='f1-inp64' class='form-control fs-16px' />
				</div>
			</div>


			
			<div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_updated_x3()'  id='temp-btn-12' >Next</button></div>

			
		</div>
        <br>  
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb16-box'), 150);
}
function verify_updated_x3() {
    let inp_1 = document.getElementById('f1-inp61');
    let inp_2 = document.getElementById('f1-inp62');
    let inp_3 = document.getElementById('f1-inp63');
    let inp_4 = document.getElementById('f1-inp64');
    let x3 = (table_data[1][0] + table_data[1][2]) / 2;
    let f_dash_x3 = calculate_f_dash(x3);
    let res1 = f_dash_x3 * table_data[1][1];
    let res2 = f_dash_x3 * table_data[1][3];
    console.log(x3, f_dash_x3, res1, res2);
    if (!verify_values(parseFloat(inp_1.value), x3)) {
        inp_1.style.border = '1px solid red';
        alert('x3 value is incorrect');
        return;
    }
    if (!verify_values(parseFloat(inp_2.value), f_dash_x3)) {
        inp_2.style.border = '1px solid red';
        alert('f\'(x3) value is Incorrect ');
        return;
    }
    if (!verify_values(parseFloat(inp_3.value), res1)) {
        inp_3.style.border = '1px solid red';
        alert('f\'(x3) * f\'(x1) value is incorrect');
        return;
    }
    if (!verify_values(parseFloat(inp_4.value), res2)) {
        inp_4.style.border = '1px solid red';
        alert('f\'(x3) * f\'(x2) value is incorrect');
        return;
    }
    alert('You have entered correct values');
    if (res1 < 0) {
        table_data.push([table_data[1][0], table_data[1][1], table_data[1][4], table_data[1][5], (table_data[1][0] + table_data[1][4]) / 2, calculate_f_dash((table_data[1][0] + table_data[1][4]) / 2)]);
    }
    else if (res2 < 0) {
        table_data.push([table_data[1][4], table_data[1][5], table_data[1][2], table_data[1][3], (table_data[1][4] + table_data[1][2]) / 2, calculate_f_dash((table_data[1][4] + table_data[1][2]) / 2)]);
    }
    let bn = document.getElementById('temp-btn-13');
    bn && bn.remove();
    let p1 = inp_1.parentElement;
    let ele1 = document.createElement('span');
    ele1.innerText = (x3).toFixed(5);
    p1.appendChild(ele1);
    inp_1.remove();
    let p2 = inp_2.parentElement;
    let ele2 = document.createElement('span');
    ele2.innerText = f_dash_x3.toFixed(5);
    p2.appendChild(ele2);
    inp_2.remove();
    let p3 = inp_3.parentElement;
    let ele3 = document.createElement('span');
    ele3.innerText = res1.toFixed(5);
    p3.appendChild(ele3);
    inp_3.remove();
    let p4 = inp_4.parentElement;
    let ele4 = document.createElement('span');
    ele4.innerText = res2.toFixed(5);
    p4.appendChild(ele4);
    inp_4.remove();
    render_table();
}
//-----------------part six---------------------
function render_table() {
    let btn_text = get_collapse_btn_text('Update X1 and X2 Values', 'tb17-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb17-box'>

        <div>

		<h5>Repeating the process we can generate the data as shown in the table</h5>

		<div id='d-tab'></div>


		<br><br>


		<h5>f(x) vs x plot : </h5>

		<canvas id='myChart'></canvas>

		<br>

		<h5>Enter the lowest value of x for which you </h5>


			<div class="row justify-content-center fs-18px" style="align-items:center;" id="se-div">
				<div class="col-lg-3">
					Lowest value of x = 
				</div>
				<div class=col-lg-3>
					<input type='number' id='f1-inp81' class='form-control fs-16px' />
				</div>
			</div>


			<div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_minima()'  id='temp-btn-15' >Next</button></div>


	
		</div>
        <br>  
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb17-box'), 150);
    load_table();
}
function load_table() {
    let ele = document.getElementById('d-tab');
    for (let i = 2; i < 10; i++) {
        console.log(table_data);
        let x3 = (table_data[i][0] + table_data[i][2]) / 2;
        let f_dash_x3 = calculate_f_dash(x3);
        let res1 = f_dash_x3 * table_data[i][1];
        let res2 = f_dash_x3 * table_data[i][3];
        if (res1 < 0) {
            table_data.push([table_data[i][0], table_data[i][1], table_data[i][4], table_data[i][5], (table_data[i][0] + table_data[i][4]) / 2, calculate_f_dash((table_data[i][0] + table_data[i][4]) / 2)]);
        }
        else if (res2 < 0) {
            table_data.push([table_data[i][4], table_data[i][5], table_data[i][2], table_data[i][3], (table_data[i][4] + table_data[i][2]) / 2, calculate_f_dash((table_data[i][4] + table_data[i][2]) / 2)]);
        }
    }
    //header, num_string_data, verify_row_index, verify_col, table_title, outer_div, show_data, full_table_load, after_verify
    //header, body, outer_div, fixed
    let header = ['S No.', '$$ x_1 $$', "$$ f'(x_1) $$", '$$ x_2 $$', "$$ f'(x_2) $$", '$$ x_3 $$', "$$ f'(x_3) $$"];
    table_data.map((arr, index) => {
        return arr.unshift(index);
    });
    let tab = new Show_Table_Custom_Fixed(header, table_data, ele, 2);
    tab.load_table();
    plot();
}
// ------plot a graph------------
function calculate_fx(x) {
    return (a / x) + (Math.pow(x, b));
}
function plot() {
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = "white";
    ctx.style.marginTop = "5px";
    ctx.style.marginLeft = "10%";
    ctx.style.padding = "10px";
    ctx.style.borderRadius = "8px";
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    let x_axis = [];
    let y_axis = [];
    for (let i = 2 * 100; i <= 5 * 100; i += 0.05 * 100) {
        x_axis.push(i / 100);
        let y = calculate_fx(i / 100);
        if (y < minima) {
            minima = y;
        }
        y_axis.push(y);
    }
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: x_axis,
            datasets: [
                {
                    label: 'f(x)',
                    data: y_axis,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true
                },
            ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'f(x)',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'x',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `f(x) vs x`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
}
function verify_minima() {
    let inp_1 = document.getElementById('f1-inp81');
    console.log(minima);
    if (!verify_values(parseFloat(inp_1.value), minima)) {
        inp_1.style.border = '1px solid red';
        alert('minima value is incorrect');
        return;
    }
    alert('You have entered correct minimum value');
    let bn = document.getElementById('temp-btn-15');
    bn && bn.remove();
    let p1 = inp_1.parentElement;
    let ele1 = document.createElement('span');
    ele1.innerText = minima.toFixed(5);
    p1.appendChild(ele1);
    inp_1.remove();
}
activity1();
//# sourceMappingURL=activity1.js.map