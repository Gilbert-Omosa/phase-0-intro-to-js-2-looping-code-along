// Code your solutions in this file
function writeCards(names = ["Guadalupe","Ollie","Aki"], event = "surprise") {
    const thankyoumessage = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankyoumessage.push(message);
    } 
    return thankyoumessage;
  }

function countDown(num = 10) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }