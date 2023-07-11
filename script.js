const heading = document.querySelector("#info");
const submitButton = document.querySelector("#submitall");
const boxDetails = document.querySelector(".box");
const inputDetails = document.querySelectorAll(".details");




submitButton.addEventListener("click", () => {
    if (inputDetails.value == '') {
        alert("Please fill the required details")
    }
    else {
        heading.style.display = "block";
        boxDetails.style.display = "block";
    }
});

function displayData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var gender = document.getElementById("gender").value;
    var skills = document.querySelectorAll("input[name='skill']:checked");
    var skillsarray = Array.from(skills).map(function (element) {
        return element.value;
    });
    var avatar = document.getElementById("avatar").value;
    // var bio = document.getElementById("bio").value;
    output.innerHTML =
        "<h3>Registered Information:</h3>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Gender:</strong> " + gender + "</p>"
        + "<p><strong>Avatar:</strong> " + avatar + "</p>" +
        "<p><strong>Skills:</strong> " + skillsarray.join(", ") + "</p>";
}

