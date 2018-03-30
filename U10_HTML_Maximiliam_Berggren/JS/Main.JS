// When page is scrolled call OnScroll
window.onscroll = function() {OnScroll()};
// Get the nav element
var nav = document.getElementsByTagName("nav")[0];
// Get the header element
var header = document.getElementsByTagName("header")[0];
// Get the y-offset of nav
var stickyOffset = nav.offsetTop;
console.log(stickyOffset);

// Make navbar sticky when needed
function OnScroll() {
  if (window.pageYOffset >= stickyOffset)
  {
    //Make nav sticky
    nav.classList.add("sticky")
    /* Add some margin to the header to prevent sudden movement of body contents*/
    header.style.marginBottom = getComputedStyle(document.documentElement).getPropertyValue('--nav-height');;
  }
  else
  {
    //Remove sticky from nav
    nav.classList.remove("sticky");
    //remove extra margin on page header
    header.style.marginBottom = "0";
  }
}

//Send an Email to me
function SendEmailToOwner()
{
  var _subject = document.getElementById("subjectId").value;
  var _body = document.getElementById("bodyId").value;
  window.open('mailto:iceklue@gmail.com?subject=' + _subject + '&body=' + _body);
}

//Send an Email to me with a "Searching for work" preset
function SendEmailAboutWork()
{
    var _firstName = document.getElementById("firstnameId").value;
    var _lastName = document.getElementById("lastnameId").value;
    var _age = document.getElementById("ageId").value;
    var _gender = document.getElementById("genderId").value;
    var _body = document.getElementById("bodyId").value;

    console.log(_firstName);
    console.log(_lastName);
    console.log(_age);
    console.log(_gender);
    console.log(_body);

    _body = 'Hi! I am a '+_age+' year old '+_gender+'. My name is '+_firstName+' '+_lastName+' and here is what makes me special: ' + _body;
    window.open('mailto:iceklue@gmail.com?subject=Work' + '&body=' + _body);
}

//play sound from the only video source on the site
function PlaySound()
{
  var video = document.getElementById("video");
  video.muted = false;
}
function StopSound()
{
  var video = document.getElementById("video");
  video.muted = true;
}
