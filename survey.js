const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let survay = () => {

let answerArr = []
rl.question(`What's your name?`, (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  answerArr.push(answer)
  rl.question(`What is your quest?`, (answer) => {
    answerArr.push(answer)
    console.log(`Thank you for your valuable feedback: ${answer}`)
    
      rl.question(`What... is your favourite color?`, (answer) => {
          answerArr.push(answer)
          console.log(`Thank you for your valuable feedback: ${answer}`)
          
          rl.question(`what is the airspeed velocity of an unladen swallow`, (answer) => {
            answerArr.push(answer)
            console.log(`Thank you for your valuable feedback: ${answer}`)
            
            rl.question(`What's that under there?`, (answer) => {
              answerArr.push(answer)
              console.log(`Thank you for your valuable feedback: ${answer}`)
              
              rl.question(`did you just say underwear?`, (answer) => {
                answerArr.push(answer)
                console.log(`Thank you for your valuable feedback: ${answer}`)
                
                rl.question(`this is not a question?`, (answer) => {
                  answerArr.push(answer)
                  console.log(`Thank you for your valuable feedback: ${answer}`)
                  
                  rl.close();

                  console.log(`your name is ${answerArr[0]}, your quest is ${answerArr[1]}, your favourite color is ${answerArr[2]}, you seem to think the airspeed velocity of an unladen swallow is ${answerArr[3]}, ${answerArr[4]}, lol did you say it ${answerArr[5]}, ${answerArr[6]} you are corect`)

            })
          })
        })
       })
     })
  })
});

}

survay()
