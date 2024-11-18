import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface(stdin, stdout);

rl.question('Input size: ', (input) => {
    const size = parseInt(input); 

        for (let i = 1; i <= size; i++) {
            const space = ' '.repeat(size - i);
            const star = '*' .repeat(i);
            
            console.log(space + star);
        }

    rl.close();
});
