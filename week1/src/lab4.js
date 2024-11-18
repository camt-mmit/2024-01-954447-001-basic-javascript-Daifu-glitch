import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface(stdin, stdout);

rl.question('Input size: ', (input) => {
    
    const size = parseInt(input); 

        for (let i = 1; i <= size; i++) {
            if (i === 1 || i === size) {
                console.log('*'.repeat(size));
            } else {
                console.log('*' + ' '.repeat(size - 2) + '*');
            }
        }

    rl.close();
});
