const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('MONGO_URI not set in backend/.env');
  process.exit(1);
}

function hostFromUri(u){
  try{ const m = u.match(/@([^/]+)/); return m?m[1]:u }catch(e){return u}
}

console.log('Testing MongoDB connection to host:', hostFromUri(uri));

mongoose.connect(uri, { connectTimeoutMS: 10000, serverSelectionTimeoutMS: 10000 })
  .then(()=>{ console.log('Connection successful'); process.exit(0); })
  .catch(err=>{ console.error('Connection failed:', err.stack || err.message || err); process.exit(1); });
