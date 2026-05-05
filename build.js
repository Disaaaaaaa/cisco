const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

const sourcePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(sourcePath, 'utf8');

const url = process.env.SUPABASE_URL || "";
const key = process.env.SUPABASE_KEY || "";

if (!url || !key) {
  console.warn("WARNING: SUPABASE_URL or SUPABASE_KEY not found in environment variables!");
}

html = html.replace('REPLACE_ME_SUPABASE_URL', url);
html = html.replace('REPLACE_ME_SUPABASE_KEY', key);

fs.writeFileSync(path.join(distPath, 'index.html'), html);
console.log("Successfully built project into 'dist' folder");
