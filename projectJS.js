//setting up elements
let planner_form = document.getElementById("meal_plan_form")
let clear_button = document.getElementById("clear_form")
let print_button = document.getElementById("print_form")
let generate_button = document.getElementById("generate")

//clear button functionality. clears all input field values
clear_button.addEventListener('click',function(){
    for(let i = 0; i < planner_form.getElementsByTagName("input").length; i++){
        let input_field = planner_form.getElementsByTagName("input")[i]
        input_field.value = ""
    }
})

//generates the website upon pressing the generate planner button
generate_button.addEventListener('click', function(){
    
    let email_field = document.getElementById("email")
    //tests if email field is syntactically correct before submitting
    //the abc will be replaced with a regex test. i need to figure out how to do regex emails
    if(email_field.value == "abc"){
        console.log("you can submit now")
        planner_form.submit()

        //build the website here
        buildPlanner()

    }else{
        alert("NO")
    }
})

function buildPlanner(){
    //creates the planner website
    new_planner = window.open('about:blank','This Week\'s Meal Plan','width=700,height=800')
    new_planner.document.write("hello world")
}