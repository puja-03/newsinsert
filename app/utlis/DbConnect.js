import mongoose from 'mongoose'

const DbConnect = () => {
    if(mongoose.connection.readyState){
      return mongoose.connection
    }
  return mongoose.connect("mongodb://puja:mongo0789@localhost:27017/?authMechanism=DEFAULT")
}

export default DbConnect;