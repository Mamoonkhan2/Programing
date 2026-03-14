const { count } = require('console');

const fs = require('fs').promises; // Import the promises API

async function compressfile(filePath = './pixels.txt') {
    try {
        // Specify 'utf8' encoding to get a string, otherwise a Buffer is returned
        const data = await fs.readFile(filePath, 'utf8'); 
        const word = data.split(' ');
        let wordcount = 0;
        const array = [];
           for (let i = 0; i <= word.length; i++) { // 0 1 2 3 4
              wordcount++;
              if (word[i] !== word[i + 1]) {
                array.push(word[i], String(wordcount));
                wordcount = 0; // reset
              }
          }
          const content = array.join(' ');
          await fs.writeFile(`compressFrom${filePath.split('.')[0].toLocaleUpperCase()}.txt`, content, 'utf8');
          console.log('Data saved successfully!');
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

// Call the function with the path to your file
decompressfile('compressFromPIXELS.txt');
// console.log(array)

async function decompressfile(filePath = './output.txt'){ 
        try {
            // Specify 'utf8' encoding to get a string, otherwise a Buffer is returned
            const data = await fs.readFile(filePath, 'utf8'); 
            const word = data.split(' ');
            const array = [];
              for (let i = 0; i <= word.length; i+=2) { // 0 1 2 3 4
                 let words = word[i];
                 let count = Number(word[i+1]);
                  for (let j = 0; j < count; j++) {
                    array.push(words);
                  }
                }
            console.log(array)
            const content = array.join(' ');
            await fs.writeFile(`decompressFrom${filePath.split('.')[0].toLocaleUpperCase()}.txt`, content, 'utf8');
            console.log('Data saved successfully!');
            }
            catch (error) {
                console.error(`Got an error trying to read the file: ${error.message}`);
            }
          }

        
