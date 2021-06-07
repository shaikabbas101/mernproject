const mongoose = require('mongoose');

const DB = process.env.DATABASE; 

mongoose.connect(process.env.MONGODB_URI || DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`connection successful`);
}).catch((err)=> console.log(`no connection`));
