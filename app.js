const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const phonenum = document.getElementById("phonenum").value;
    const email = document.getElementById("email").value;
   

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('PhoneNumber', phonenum);
    localStorage.setItem('Email', email);
   /*
    {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
    {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},
    {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},
    {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"}
    ,{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}
    
    */
    if ((fname == "George" && lname == "Bluth" && email == "george.bluth@reqres.in") || (fname == "Janet" && lname == "Weaver" && email == "janet.weaver@reqres.in") || (fname == "Emma" && lname == "Wong" && email == "emma.wong@reqres.in") || (fname == "Eve" && lname == "Holt" && email == "eve.holt@reqres.in") || (fname == "Charles" && lname == "Morris" && email == "charles.morris@reqres.in") || (fname == "Tracy" && lname == "Ramos" && email == "tracey.ramos@reqres.in")) {
        alert("sucessful");
        setTimeout(()=>{
            location.href='homepage.html';
            },5000)
     } else {
        alert("unsucessful");
     }
    }

    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
        Swal.fire(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    else
    {
        if(pass.length >= 6 && pass.length <= 20 && phonenum.length>=1)
    {
        if( pass !== cpass){
            Swal.fire(
                'Opps..!',
                'Password not matching!',
                'error'
            );
        }
        else
        {
            Swal.fire(
                'Good job!',
                'Register successful!',
                'success'
            );
            setTimeout(()=>{
                    location.href='login.html';
                    },5000)
        }
    }
    
    else
    {
        Swal.fire(
            'Opps..!',
            'Input mim six digit password!',
            'error'
        );
    }
    }

const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();
    // cautch the valu which is type user login page
    const emailAddress = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;


    // let's get value in localstorage which store user in registration field
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if( emailAddress == "" && passWord == ""){
        Swal.fire(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    else
    {
        if(emailAddress == Email && passWord == Password){
            Swal.fire(
                'Good job!',
                'login successful!',
                'success'
            );
            setTimeout(()=>{
                location.href='homepage.html';
                },1000)
        }else
        {
            Swal.fire(
                'Opps..!',
                'Something is wrong!',
                'error'
            );
        }
    };

};