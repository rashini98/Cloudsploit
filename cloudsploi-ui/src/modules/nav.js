import nav from './stylesheets/nav.css';

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

function NavigationBar(){
    return(

<div>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="nav.css"/>
    <title>Responsive Animated Navbar</title>
<body>
    <nav>
        <div class="logo">
            <img src="logo.svg" alt="Logo Image"/>
        </div>
        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><button class="login-button" href="#">Login</button></li>
            <li><button class="join-button" href="#">Join</button></li>
        </ul>
    </nav>
    <script src="nav.js"></script>
</body>
</div>

    );
}
export default NavigationBar;