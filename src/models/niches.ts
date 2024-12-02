import {model, Schema,models} from "mongoose"
const nicheSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  image_url:{
    type:String
  },
  sub_niches:{
    type:[String],
    required:true
  }
})
const Niche = models.Niche || model("Niche",nicheSchema)

export default Niche