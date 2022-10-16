import './stylesheets/workwithus.css';

var slider_bar=document.querySelector('.slider_bar');
var slider=slider_bar.querySelector('.slider');


var toslide=false;

function progressBar(e){
  if(toslide){
  const y=e.pageX-this.offsetLeft;
  const percent=y/this.offsetWidth;
  const width=Math.round(percent *100);
  slider.style.width=width+'%';
  }else{
    return;
  }
};
//trigger only when the mouse is down on the sliderbar
slider_bar.addEventListener('mousedown',()=>toslide=true);
slider_bar.addEventListener('mousemove',progressBar);
slider_bar.addEventListener('mouseup',()=>toslide=false);

function Careers(){
    return(
<div class="container">
  <h4>Work with us <span class='txt-white'> careers  </span><span class='txt-white'>Just say hi</span> </h4>
  <h1>let's work together</h1>
  
  <div class="form">
      <div class="form_group">
        <label for="name">Name</label>
        <input type="text"  id='name'/>
      </div>

      <div class="form_group">
        <label for="title">Title</label>
        <input type="text" id='title'/>
      </div>

      <div class="form_group">
        <label for="company">Company</label>
        <input type="text" id='company'/>
      </div>

      <div class="form_group">
        <label for="email">Email</label>
        <input type="email" id='email'/>
      </div>

      <div class="form_group">
        <label for="phone">Phone Number</label>
        <input type="number" id='phone' />
      </div>

      <div class="form_group">
        <label for="start_date">Design Start Date</label>
        <input type="text" />
      </div>
    
    <div class="form_group span-2">
      <div class="slider_bar">
        <div class="slider"></div>
      </div>
    </div>
      <div class="form_group span-3">
        <label for="project_detail">Project Details</label>
        <input type="text" id='project_detail'/>
      </div>
  </div>
  
  <a href="#" class='btn btn_primary'>Submit Detail</a>
  
  <p class='shot_by'>from dribble by <a href="https://dribbble.com/shots/2485346-Contact-Form" target='_blank'>Peter Deltondo</a></p>
</div>

    );
}
export default Careers;