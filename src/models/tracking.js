import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Tracking = new Schema({
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
  operation: {
    type: String,
    enum: ['F', 'G', 'L', 'W'], // FEE, GAIN, LOSS, WITHDRAL
    required: [true, 'Operation required'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount required'],
  },
  transactionId: {
    type: String,
    required: [function () {
      return ['F', 'W'].includes(this.operation);
    }, 'Id transaction required']
  },
  register: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Tracking', Tracking);