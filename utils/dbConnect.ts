import { connect, set } from 'mongoose';

const connection: any = {};

async function dbConnect() {
    // if(connection.isConnected) {
    //     return;
    // }

    // const db: any = await mongoose.connect("mongodb://localhost:27017/n_assess", {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // })

    // connection.isConnected = db?.connection[0]?.readyState;
    // console.log(connection.isConnected);


    connect("mongodb://localhost:27017/n_assess", { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => console.log("connected"))
    .catch((err) => console.log("error ", err));

console.log(true, typeof true)
set('debug', eval("true"));


}


export default dbConnect;