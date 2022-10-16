import signup from './stylesheets/signup.css';


  function signUpPage(){
    return(
<div>
  <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"></link>
  <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"></link>
  <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"></link>
  <link rel="manifest" href="favicon/site.webmanifest"></link>
  <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5"></link>
  <link rel="shortcut icon" href="favicon/favicon.ico"></link>
  <meta name="msapplication-TileColor" content="#da532c"></meta>
  <meta name="msapplication-config" content="favicon/browserconfig.xml"></meta>
  <meta name="theme-color" content="#ffffff"></meta>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/notie/dist/notie.min.css"></link>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
    crossorigin="anonymous"></link>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
    crossorigin="anonymous"></link>
  <link rel="stylesheet" href="css/registerstyle.css"></link>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

<body>

  <div class="container">
    <div class="inner">
      <h1 class= 'top1'> Lets Start Your Journey with Us</h1>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><i class="fas fa-users"></i></span>
        </div>
        <input type="text" class="form-control" placeholder="Username" id="username" aria-label="Username"
          aria-describedby="basic-addon1"></input>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><i class="fas fa-sort-numeric-up"></i></span>
        </div>
        <input type="text" class="form-control" placeholder="Company Name" id="Company Name" aria-label="Company Name" aria-describedby="Company Name"></input>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><i class="fas fa-key"></i></span>
        </div>
        <input type="password" class="form-control" placeholder="Password" id="password" aria-label="Password"
          aria-describedby="basic-addon1"></input>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><i class="fas fa-key"></i></span>
        </div>
        <input type="password" class="form-control" placeholder="Password Confirm" id="passwordc" aria-label="Password Confirm"
          aria-describedby="basic-addon1"></input>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
        </div>
        <input type="email" class="form-control" placeholder="Email" id="email" aria-label="Email" aria-describedby="basic-addon1"></input>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
        </div>
        <input type="email" class="form-control" placeholder="Email Confirm" id="emailc" aria-label="Email Confirm"
          aria-describedby="basic-addon1"></input>
      </div>

    
      <div class="radio">
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" name="gender" id="male" value="male" class="custom-control-input"></input>
          <label class="custom-control-label" for="male">Male</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" name="gender" id="female" value="female" class="custom-control-input"></input>
          <label class="custom-control-label" for="female">Female</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" name="gender" id="other" value="other" class="custom-control-input"></input>
          <label class="custom-control-label" for="other">Other</label>
        </div>
      
      </div>
      <div class="button">
        <div class="outputs mt-4">
          <button type="button" class="btn btn-primary" id="desktop-register-bttn">Lets Start</button>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" id="mobile-register-bttn">Lets</button>
  
  </div>
 

  <script src="https://unpkg.com/notie"></script>
  <script src="register-script.js"></script>
  
</body>

</div>
    );
  }
  export default signUpPage;