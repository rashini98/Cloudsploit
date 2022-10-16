
import'./stylesheets/login.css';
import Avatar from './img/images.png'




function login(){
    return(
      <body class="main-bg">
        <div class="login-container text-c animated flipInX">
                <div>
                    <h1 class="logo-badge text-whitesmoke"><span class="fa fa-user-circle"></span></h1> 
                    <img src={Avatar} alt='' class='img'></img>
                </div>
                    <h3 class="text-whitesmoke">Welcome to DUOLC!</h3>
                    <p class="text-whitesmoke">Sign In</p>
                <div class="container-content">
                    <form class="margin-t">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username" required=""></input>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="*****" required=""></input>
                        </div>
                        <button type="submit" class="form-button button-l margin-b">Sign In</button>
        
                        <a class="text-darkyellow" href="#"><small>Forgot your password?</small></a>
                        <p class="text-whitesmoke text-center"><small>Do not have an account?</small></p>
                        <a class="text-darkyellow" href="#"><small>Sign Up</small></a>
                    </form>
                    <p class="margin-t text-whitesmoke"><small> DUOLC &copy; 2022</small> </p>
                </div>
            </div>
</body>
    )
     
}

export default login;