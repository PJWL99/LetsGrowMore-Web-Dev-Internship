const form = document.getElementById('registration-form');
    const displayData = document.getElementById('display-data');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const website = document.getElementById('website').value;
      const imageLink = document.getElementById('image-link').value;
      const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
      const skillsInputs = document.querySelectorAll('input[name="skills"]:checked');

      let gender = "";
      let skills = [];

      genderInputs.forEach(input => {
        gender += input.value + " ";
      });

      skillsInputs.forEach(input => {
        skills.push(input.value);
      });

      const registrationData = {
        name,
        email,
        website,
        imageLink,
        gender,
        skills
      };

      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${registrationData.imageLink}" alt="User Image">
        <p><strong>Name:</strong> ${registrationData.name}</p>
        <p><strong>Email:</strong> ${registrationData.email}</p>
        <p><strong>Website:</strong> ${registrationData.website}</p>
        <p><strong>Gender:</strong> ${registrationData.gender}</p>
        <p><strong>Skills:</strong> ${registrationData.skills.join(", ")}</p>
      `;

      displayData.appendChild(card);

      form.reset();
    });