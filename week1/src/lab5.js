import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface(stdin, stdout);

rl.question('Input size: ', (input) => {
    const size = parseInt(input); 

        for (let i = 1; i <= size; i++) {
            if (i === 1) {
                console.log(' '.repeat(size - i) + '*'); 
            } else {
                console.log(' '.repeat(size - i) + '*' + ' '.repeat(2 * i - 3) + '*');
            }
        }

        for (let i = size - 1; i >= 1; i--) {
            if (i === 1) {
                console.log(' '.repeat(size - i) + '*'); 
            } else {
                console.log(' '.repeat(size - i) + '*' + ' '.repeat(2 * i - 3) + '*');
            }
        }

    rl.close();
});
