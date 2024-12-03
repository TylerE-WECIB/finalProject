//setting up elements
let planner_form = document.getElementById("meal_plan_form")
let clear_button = document.getElementById("clear_form")
let generate_button = document.getElementById("generate")

//input fields (surprise tool that will help us later)
let breakfast = document.getElementById("breakfast")
let snack1 = document.getElementById("snack1")
let lunch = document.getElementById("lunch")
let snack2 = document.getElementById("snack2")
let dinner = document.getElementById("dinner")
let username = document.getElementById("username")
let email = document.getElementById("email")
let goal = document.getElementById("goal")

//clear button functionality. clears all input field values
clear_button.addEventListener('click',function(){
    for(let i = 0; i < planner_form.getElementsByTagName("input").length; i++){
        let input_field = planner_form.getElementsByTagName("input")[i]
        input_field.value = ""
    }
})

//generates the website upon pressing the generate planner button
planner_form.addEventListener('submit', function(){
    //create the planner website when the form gets submitted
    buildPlanner()
})

function buildPlanner(){
    //creates the planner website
    
    //table where the values from the form get displayed
    let table_text = `
    <table border = 2 style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
        <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
        </tr>
        <tr id="breakfast">
            <th>Breakfast</th>
            <td>${breakfast.value}</td>
            <td>${breakfast.value}</td>
            <td>${breakfast.value}</td>
            <td>${breakfast.value}</td>
            <td>${breakfast.value}</td>
            <td>${breakfast.value}</td>
            <td>${breakfast.value}</td>
        </tr>
        <tr id="snack 1">
            <th>Snack 1</th>
            <td>${snack1.value}</td>
            <td>${snack1.value}</td>
            <td>${snack1.value}</td>
            <td>${snack1.value}</td>
            <td>${snack1.value}</td>
            <td>${snack1.value}</td>
            <td>${snack1.value}</td>
        </tr>
        <tr id="lunch">
            <th>Lunch</th>
            <td>${lunch.value}</td>
            <td>${lunch.value}</td>
            <td>${lunch.value}</td>
            <td>${lunch.value}</td>
            <td>${lunch.value}</td>
            <td>${lunch.value}</td>
            <td>${lunch.value}</td>
        </tr>
        <tr id="snack 2">
            <th>Snack 2</th>
            <td>${snack2.value}</td>
            <td>${snack2.value}</td>
            <td>${snack2.value}</td>
            <td>${snack2.value}</td>
            <td>${snack2.value}</td>
            <td>${snack2.value}</td>
            <td>${snack2.value}</td>
        </tr>
        <tr id="dinner">
            <th>Dinner</th>
            <td>${dinner.value}</td>
            <td>${dinner.value}</td>
            <td>${dinner.value}</td>
            <td>${dinner.value}</td>
            <td>${dinner.value}</td>
            <td>${dinner.value}</td>
            <td>${dinner.value}</td>
        </tr>
    </table>
    `
    //window that gets opened to contain the table
    new_planner = window.open('about:blank',"Your Meal Plan",'width=700 height=800')
    new_planner.document.write(`
        <html>
        <head><title>Your Meal Plan</title></head>
        <body>
        <h1 style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">Meal Plan</h1><br>${table_text}<br><br>
        <div id="print_button"></div>
        <p style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Username: ${username.value}</p>
        <p style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Email Address: ${email.value}</p>
        <p style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Goal: ${goal.value}</p>
        </body>
        </html>`)
    
    //button that prints the table window upon being clicked
    let print_button = new_planner.document.createElement("button")
    print_button.id = "print"
    print_button.textContent = "Print / Download"
    print_button.setAttribute("onclick", "print()")
    new_planner.document.getElementById("print_button").appendChild(print_button)
    

}

