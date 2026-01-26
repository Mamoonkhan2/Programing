import fs from 'fs'
// / Note: Ensure 'packageName' is installed if you intended to use it
// const packageName = require('packageName'); 

export class ReadAndWrite { // Class names are typically PascalCase
    constructor(path) {
        this.path = path;
    }

    // Synchronously reads and parses a JSON file
    synchReader() {
        try {
            // Added 'utf8' to read as string
            const jsonString = fs.readFileSync(this.path, 'utf8');
            return JSON.parse(jsonString);
        } catch (err) {
            console.error('Error reading file:', err);
            return null;
        }
    }

    // Asynchronously writes data to a file
    asyncWritingIntoFile(obj) {
        console.log("hello from log");
        
        let data = JSON.stringify(obj, null, 4);
        fs.writeFile(this.path, data, (err) => {
            if (err) {
                console.error('Error while writing:', err);
            } else {
                console.log("Write successfully");
            }
        });
    }
}
