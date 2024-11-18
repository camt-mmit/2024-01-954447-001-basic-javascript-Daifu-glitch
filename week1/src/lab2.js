import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface(stdin, stdout);

rl.question('Input size: ', (input) => {
    const size = parseInt(input); 

        for (let i = 1; i <= size; i++) {
            console.log('*'.repeat(i)); 
        }

    rl.close();
});
