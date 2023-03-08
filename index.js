console.log('hello world')

const {spawn} = require('child_process')

const ls = spawn("node", ["node_modules/puppeteer-core/install.js"]);

ls.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

ls.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
    
    const express = require('express'),
    app = express(),
    puppeteer = require('puppeteer-core');
    
    (async () => {
    
    
      const browser = await puppeteer.launch({
          args: ['--no-sandbox']
        });
      console.log('browser launched')
    //   const page = await browser.newPage();
    //   console.log('created page')
    //   await page.goto('https://now.gg/play/yostar-limited/2211/arknights');

    //   console.log('navigated')

    //   app.get("/", async (request, response) => {
    //     console.log('scre start')
    //     try {

    //       await page.screenshot({path: __dirname+'/public/puppeteer.png'});
    //       response.sendFile(__dirname+'/public/puppeteer.png');
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     console.log('scre end')
    //   });

    //   var listener = app.listen(process.env.PORT, function () {
    //     console.log('Your app is listening on port ' + listener.address().port);
    //   });
    
    
    })()
});


