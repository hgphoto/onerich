const testFolder = './jewel/49701-49800/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
    if (err) console.log(err);
    let a = 60000;
    files.forEach(file => {
        a++;
        console.log(file + a);
        fs.renameSync(testFolder + file, testFolder + a + '.jpg', () => {
            console.log(a + '.jpg');
            // List all the filenames after renaming

        });
    });
});