import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserChallenge = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'User required']
  },
  challengeId: {
    type: mongoose.Types.ObjectId,
    ref: 'Challenge',
    required: [true, 'Challenge required']
  },
  register: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('UserChallenge', UserChallenge);