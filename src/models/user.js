import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    required: [true, 'Nome required'],
  },
  email: {
    type: String,
    required: [true, 'E-mail required'],
  },
  password: {
    type: String,
    required: [true, 'Password required'],
  },
  photo: {
    type: String,
    required: [true, 'Photo required'],
  },
  cpf: {
    type: String,
    required: [true, 'CPF required'],
  },
  birthday: {
    type: String,
    required: [true, 'Birthday required'],
  },
  costumerId: {
    type: String,
  },
  status: {
    type: String,
    enum: ['A', 'I', 'P'],
    default: 'P'
  },
  register: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('User', User);