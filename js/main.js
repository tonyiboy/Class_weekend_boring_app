document.querySelector('#check').addEventListener('click', check)
const showAnswer = document.querySelector('#placeToSee')
function check() {

  const day = document.querySelector('#day').value.toLowerCase()
  
  
  //Conditionals go here
  if(day === "tuesday" || day === "thursday" ){
    alert('CLASS DAY!')
    showAnswer.innerText= 'CLASS DAY!'
  }else if(day === "saturday" || day === "sunday"){
    showAnswer.innerText= 'Weekend!'
    alert('Weekend!')
  }else{
    showAnswer.innerText= 'BORRRRRRINNNNNGGGGG!!!'
    alert('BORRRRRRINNNNNGGGGG!!!')
  }

}
