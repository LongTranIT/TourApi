const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const Admin=new Schema({
    ho_ten: String,
    gioi_tinh:String,
    sdt:String,
    email:String,
    dia_chi:String,
    id_tai_khoan:{ type: Schema.Types.ObjectId, ref: 'tai_khoan' },
},{
    timestamps:true
})

module.exports=mongoose.model('admin',Admin);

