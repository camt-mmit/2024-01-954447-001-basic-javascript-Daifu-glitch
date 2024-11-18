import readline from 'node:readline';
import { stdin, stdout} from 'node:process';

const rl = readline.createInterface(stdin, stdout);

rl.question('Input your score: ', (input) => 
{
    const score = parseFloat(input); 
    let grade;

    if (score >= 80) {
        grade = 'A';
    }
    else if (score >= 70) {
        grade = 'B'
    }
    else if (score >= 60) {
        grade = 'C'
    }
    else if (score >= 50) {
        grade = 'D'
    }
    else {
        grade = 'F';
    }
    rl.write(`Grade ${grade}\n`);
    
    rl.close();
});