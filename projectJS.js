//setting up elements
let planner_form = document.getElementById("meal_plan_form")
let clear_button = document.getElementById("clear_form")
let print_button = document.getElementById("print_form")
let download_button = document.getElementById("download_form")
let generate_button = document.getElementById("generate")

//input fields (surprise tool that will help us later)
let breakfast = document.getElementById("breakfast")
let snack1 = document.getElementById("snack1")
let lunch = document.getElementById("lunch")
let snack2 = document.getElementById("snack2")
let dinner = document.getElementById("dinner")

//clear button functionality. clears all input field values
clear_button.addEventListener('click',function(){
    for(let i = 0; i < planner_form.getElementsByTagName("input").length; i++){
        let input_field = planner_form.getElementsByTagName("input")[i]
        input_field.value = ""
    }
})

print_button.addEventListener('click', function(){

})

download_button.addEventListener('click', function(){
    
})

//generates the website upon pressing the generate planner button
planner_form.addEventListener('submit', function(){
    //create the planner website when the form gets submitted
    buildPlanner()
})

function buildPlanner(){
    //creates the planner website
    let table_text = `
    <table border = 1>
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
    new_planner = window.open('about:blank','This Week\'s Meal Plan','width=700,height=800')
    new_planner.document.write(`hello world<br>${table_text}`)
}

// [A-Za-z0-9._-]+@+[A-Za-z0-9-]+\.+[A-Za-z0-9]{2,}
//regex that isn't working