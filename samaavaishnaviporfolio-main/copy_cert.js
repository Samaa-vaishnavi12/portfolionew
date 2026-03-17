const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, 'cert_source.pdf');
const dst = path.join(__dirname, '..', 'public', 'S_Samaa_Vaishnavi_Internship_Certificate.pdf');
fs.copyFileSync(src, dst);
console.log('Copied to', dst);
