let scrollAfstand;
let sectie2 = document.getElementsByClassName('sectie--2')[0];

window.addEventListener('scroll', (e)=>{
    scrollAfstand = window.pageYOffset;
    // console.log(scrollAfstand);
    corrSection2(scrollAfstand);
});

// Sectie 2 wordt hier gestyled wanneer er gescrolled word
const corrSection2 = (gescrolled) => {
    sectie2.style.backgroundPositionY = -gescrolled/8 + "px";
};