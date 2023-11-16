function validateForm() {
  //important date
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  //not inmortant
  var dob = document.getElementById("dob").value;
  // var gender = document.querySelector('input[name="gender"]:checked').value;
  var genderElement = document.querySelector('input[name="gender"]:checked');
  var gender = genderElement ? genderElement.value : "";
  var aboutHotel = document.getElementById("about_hotel").value;
 
  // Масив для зберігання назв незаповнених полів
  var emptyFields = [];

  // Перевірка на заповненість поля name
  if (name === "") {
    emptyFields.push("Name");
  }

  // Перевірка на заповненість поля surname
  if (surname === "") {
    emptyFields.push("Surname");
  }

  // Перевірка на заповненість поля email
  if (email === "") {
    emptyFields.push("Email");
  }

  // Формування повідомлення про порожні поля
  if (emptyFields.length > 0) {
    var message = "Please fill in the field";
    if (emptyFields.length === 1) {
      message += ` "${emptyFields[0]}"`;
    } else {
      message += "s";
      for (var i = 0; i < emptyFields.length; i++) {
        message += ` "${emptyFields[i]}"`;
        if (i < emptyFields.length - 1) {
          message += " and";
        }
      }
    }
    alert(message);
    return false;
  }

  //displayUserInfo(name, surname, email);
  displayUserInfo(name, surname, email, dob, gender, aboutHotel);

  // Додайте інші перевірки, якщо необхідно

  return true;
}

//function displayUserInfo(name, surname, email)
function displayUserInfo(name, surname, email, dob, gender, aboutHotel) {
  // Генерація нового вікна з отриманою інформацією
  var userInfoWindow = window.open("", "_blank", "width=400,height=300");
  userInfoWindow.document.write("<h2>User Information</h2>");
  userInfoWindow.document.write("<p><strong>Name:</strong> " + name + "</p>");
  userInfoWindow.document.write("<p><strong>Surname:</strong> " + surname + "</p>");
  userInfoWindow.document.write("<p><strong>Email:</strong> " + email + "</p>");
  //
  if (dob !== "") {
    userInfoWindow.document.write("<p><strong>Date of Birth:</strong> " + dob + "</p>");
  }
  if (gender !== "") {
    userInfoWindow.document.write("<p><strong>Gender:</strong> " + gender + "</p>");
  }
  if (aboutHotel !== "") {
    userInfoWindow.document.write("<p><strong>How did you find out about our hotel?</strong> " + aboutHotel + "</p>");
  }

  
  // Додайте інші дані форми, якщо необхідно
  userInfoWindow.document.close();
}
