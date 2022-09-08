function riyazFunction(){
    // document.querySelector(".bigBox").style.border="none";
    // document.querySelector(".box").style.border="2px solid white";
    // document.querySelector(".btn").style.display="none";
    // document.querySelector(".aaroh").style.display="block";
    // document.querySelector(".avroh").style.display="block";
    // document.querySelector(".heading").innerHTML= "<h1>Today's riyaz is:</h1>";
    // document.querySelector(".heading").style.fontSize="2rem";

    // document.querySelector(".chooseAgainBtn").style.display="block";
    randomRiyazPicker();
}
function randomRiyazPicker(){
    let riyaz = [
        [["sa re ga ma pa dha ni sa"],["sa ni dha pa ma ga re sa"]],
        [["sa re ga, re ga ma, ga ma pa, ma pa dha,...."],["sa ni dha, ni dha pa, dha pa ma, pa ma ga,..."]],
        [["sa re ga ma, re ga ma pa, ga ma pa dha, ma pa dha ni,..."],["sa ni dha pa, ni dha pa ma, dha pa ma ga, pa ma ga re,...."]],
        [["sa re ga ma pa, re ga ma pa dha, ga ma pa dha ni,..."],["sa ni dha pa ma, ni dha pa ma ga, dha pa ma ga re,..."]],
        [["sa re ga ma pa dha, re ga ma pa dha ni, ga ma pa dha ni sa"],["sa ni dha pa ma ga, ni dha pa ma ga re, dha pa ma ga re sa"]],
        [["sa re ga ma pa dha ni, re ga ma pa dha ni sa"],["sa ni dha pa ma ga re, ni dha pa ma ga re sa"]],
        [["sa sa, re re, ga ga, ma ma, pa pa, dha dha, ni ni, sa sa"],["sa sa, ni ni, dha dha, pa pa, ma ma, ga ga, re re, sa sa"]],
        [["sa re, re ga, ga ma, ma pa, pa dha, dha ni, ni sa"],["sa ni, ni dha, dha pa, pa ma, ma ga, ga re, re sa"]],
        [["sa sa, ga ga, re re, ma ma, ga ga, pa pa, ma ma, dha dha, pa pa, ni ni, dha dha, sa sa"],["sa sa, dha dha, ni ni, pa pa, dha dha, ma ma, pa pa, ga ga, ma ma, re re, ga ga, sa sa"]],
        [["sa re sa re ga, re ga re ga ma, ga ma ga ma pa, ma pa ma pa dha, pa dha pa dha ni, dha ni dha ni sa"],["sa ni sa ni dha, ni dha ni dha pa, dha pa dha pa ma, pa ma pa ma ga, ma ga ma ga re, ga re ga re sa"]],
        [["sa re re sa, re ga ga re, ga ma ma ga, ma pa pa ma, pa dha dha pa, dha ni ni dha, ni sa sa ni, sa re re sa"],["sa re re sa, ni sa sa ni, dha ni ni dha, pa dha dha pa, ma pa pa ma, ga ma ma ga, re ga ga re, sa re re sa"]],
        [["sa re sa sa re sa, re ga re re ga re, ga ma ga ga ma ga, ma pa ma ma pa ma, pa dha pa pa dha pa,..."],["sa re sa sa re sa, ni sa ni ni sa ni, dha ni dha dha ni dha, pa dha pa pa dha pa..."]],
        [["sa re sa sa, re ga re re, ga ma ga ga, ma pa ma ma, pa dha pa pa, dha ni dha dha,..."],["sa re sa sa, ni sa ni ni, dha ni dha dha, pa dha pa pa..."]],
        [["sa re sa re sa re ga ma, re ga re ga re ga ma pa, ga ma ga ma ga ma pa dha, ma pa ma pa ma pa dha ni...."],["sa ni sa ni sa ni dha pa, ni dha ni dha ni dha pa ma, dha pa dha pa dha pa ma ga, pa ma pa ma pa ma ga re..."]],
        [["sa re ga ma  re ga ma sa  ga ma sa re  ma sa re ga, re ga ma pa  ga ma pa re  ma pa re ga  pa re ga ma, ga ma pa dha  ma pa dha ga  pa dha ga ma  dha ga ma pa..."],["sa ni dha pa  ni dha pa sa  dha pa sa ni  pa sa ni dha, ni dha pa ma  dha pa ma ni  pa ma ni dha  ma ni dha pa, dha pa ma ga  pa ma ga dha  ma ga dha pa  ga dha pa ma..."]],
    ]; 
    var num = Math.floor(Math.random()* riyaz.length);
    document.querySelector(".aaroh-riyaz").innerHTML = "<h3>" + riyaz[num][0] + "</h3>";
    document.querySelector(".avroh-riyaz").innerHTML = "<h3>" + riyaz[num][1] + "</h3>";
 
    // document.querySelector(".aaroh-riyaz").style.color="yellow";
    // document.querySelector(".avroh-riyaz").style.color="yellow";
          
}