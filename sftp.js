const ftp = require('ftp');
const fs = require('fs')
const client = new ftp(); 


const config = {
  host: '192.168.1.6',
  port: 21,
username:'anonymous',
password:'anonymous',
};

const localFilePath = 'E:/IEC/1st-Project-JavaScript/Csv-file.csv';
const remoteFilePath = 'E:/Centaurus/myfile';
client.connect(config)

// When connected
client.on("ready", () => {
  console.log("Connected to FTP server");

  // Upload the local file to the remote FTP server
  client.put(fs.createReadStream(localFilePath), remoteFilePath.toString,(err) => {
    if (err) {
      console.error("Error uploading file:", err);
    } else {
      console.log("File uploaded successfully");
    }
        
})
client.end();
});

// Handle errors
client.on("error", (err) => {
  console.error("FTP connection error:", err);
});
