const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ListSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    no_of_likes: {
        type: Number
    },
    favorite:{
        type: Boolean
    },
    price:{
        type: Number
    },
    image:{
        type: String
    },
    profile: {
        type: String
    },
    no_of_comments: {
        type: Number
    },
    postDesc: {
        type: String
    },
    hashtag: {
        type: String
    },
},{
    timestamps:true
});
export default mongoose.models.List || mongoose.model('List', ListSchema);



