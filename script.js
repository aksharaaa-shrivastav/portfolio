
welcome(); 

function welcome() {
    alert("Welcome to my Portfolio 💖");
}



var startQuiz = function() {
    let m1 = parseInt(prompt("Enter marks of subject 1"));
    let m2 = parseInt(prompt("Enter marks of subject 2"));
    let m3 = parseInt(prompt("Enter marks of subject 3"));

    let total = m1 + m2 + m3;
    let avg = total / 3;

    alert("Total: " + total + " | Average: " + avg);
};



function addSkills() {
    let n = prompt("How many skills you want to enter?");
    let skills = [];

    for (let i = 0; i < n; i++) {
        let skill = prompt("Enter skill " + (i + 1));
        skills.push(skill);
    }

    alert("Your Skills: " + skills.join(", "));
}



function checkGrade() {
    let score = prompt("Enter your score");

    if (score >= 90) {
        alert("Excellent");
    } else if (score >= 75) {
        alert("Good");
    } else if (score >= 50) {
        alert("Average");
    } else {
        alert("Poor");
    }
}