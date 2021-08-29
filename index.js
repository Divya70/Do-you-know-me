
var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

console.log('Hello Friends :)');
var userName = readlineSync.question('Tell me your name and then we will play this quiz : ');

console.log('Hello '+userName+',\n');
console.log('Welcome to '+chalk.yellowBright.bold(' DO YOU KNOW ME Quiz\n'));
console.log('Let\'s see how much you know about '+ chalk.yellow.bold(' Divya Namdev ')+'?\n');
 console.log(chalk.yellowBright('-----------------------------------------------'));
console.log(chalk.green('Guide'));
console.log(chalk.magenta('> There are multiple choice questions'));
console.log(chalk.magenta('> Choose the options given below by selecting any of the key a,b,c,d\n'));
 console.log(chalk.yellowBright('-----------------------------------------------')); 



function play(question,answer){
  var userAnswer =readlineSync.question(question);
  if (userAnswer === answer){
    console.log( chalk.green("You are right!"))
    score = score + 1
    console.log("Your score: " + chalk.green(score ))
  }else{
    console.log(chalk.redBright("You are wrong!"))
    score = score - 1
    console.log("Your score: " + chalk.red(score ))
  }
  
  console.log("\n----------------------\n")
}
play(chalk.cyanBright("1.Which game i love most ?") +("\na.Kabaddi\nb.Basketball\nc.Kho-kho\nd.cricket\n"),"a")

play(chalk.cyanBright("2.Where is my Hometown ?")+("\na.Kanpur\nb.Rath\nc.Mahoba\nd.Faizabad\n"),"b")

play(chalk.cyanBright("3.Which course i am doing in my Graduation ?")+("\na.B.Tech\nb.BSC\nc.B.com \nd.BCA\n"), "a")

play(chalk.cyanBright("4.What is my majors during my graduation ?")+("\na.Computer Science\nb.Information Technology\nc.Electronics and Communication\nd.Electrical\n"),"a")

play(chalk.cyanBright("5.What is my favourite Food?")+("\na.Burger\nb.Chow mein\nc.Chilli potato\nd.Pizza\n"), "d")

play(chalk.cyanBright("6.Who is my favourite Actor?")+("\na.Akshay kumar\nb.Amitabh Bachchan\nc.Varun Dhavan\nd.Salman Khan\n"), "b")

play(chalk.cyanBright("7.Can you guess my favourite television series ?")+("\na.Friends\nb.Money Hiest\nc.Game Of Thrones\nd.The Bold Type\n"), "a")

console.log("Your score: " + score + "\n")

console.log( chalk.red("Divya ")+("scored:") +chalk.green("6"))
console.log( chalk.red("Harsh ")+("scored:") + chalk.green("5"))
console.log( chalk.red("Arya  ")+("scored:") +chalk.green("4\n" ))

if(score > 6){
  console.log("You scored 7 That's Great.\n You have beated Divya.\nSend me screen shot I will Updated Your score\n")
}else if(score > 5){
  console.log(chalk.cyan("You scored: ") + chalk.green(score) +("You have beaten Harsh. \nSend me screen shot I will Updated Your score " ))
}else if(score >4){
  console.log(chalk.cyan("You scored: ") + chalk.green(score) + (" You have beaten Arya. Send me screen shot I will Updated Your score"))
}else{
  console.log(chalk.cyan("You scored: ") +chalk.green(score) + (" Better Luck Next Time "))
}
 
if(score>4){
  console.log(("Congratulation! ") +chalk.cyan(userName) + (" You know me well"))
}else{
  console.log(("Don't feel bad ") + chalk.green(userName) +(" Try it again"))
}








console.log("Thank you for Trying this quiz\n")


