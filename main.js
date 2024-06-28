
const idname = document.querySelector("#name");
const gender = document.querySelector("#gender");
const dateOfBirth = document.querySelector("#dob");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const image = document.querySelector("#image");
const apiUrl = 'https://randomuser.me/api/?gender=female';


fetch(apiUrl)
  .then(response => {
    // console.log(response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    let femaleData = userData.results.filter(function(n) { return n.gender === "female"; });
    const  femaleDataName= femaleData[0].name.title+". " + femaleData[0].name.first+" " +femaleData[0].name.last ;
    idname.textContent=  femaleDataName;
    const femaleDataGender = femaleData[0].gender;    
    gender.textContent= femaleDataGender;
    const femaleDatadateofBirth=femaleData[0].dob.date;
    dateOfBirth.textContent=femaleDatadateofBirth;
    const femaleDataEmail=femaleData[0].email;
    email.textContent=femaleDataEmail;
    const femaleDataAddress= femaleData[0].location.street.name+", "+femaleData[0].location.city+", "+femaleData[0].location.state+", "+femaleData[0].location.country+", "+femaleData[0].location.postcode;
    address.textContent=femaleDataAddress;
    const femaledataPicture= femaleData[0].picture.thumbnail;
    console.log(femaleData[0].picture.large);
    image.src= femaledataPicture;
      
  })
  
  .catch(error => {
    console.error('Error:', error);
  });
  $table->string('first_name');
  $table->string('last_name');
  $table->string('email')->primary();
  $table->string('crm_owner_id');
  $table->timestamps(); 


  