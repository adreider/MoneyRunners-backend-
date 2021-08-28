import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Challenge = new Schema({
  title: {
    type: String,
    required: [true, 'Title required'],
  },
  description: {
    type: String,
    required: [true, 'description required'],
  },
  fee: {
    type: Number,
    required: [true, 'Fee required'],
  },
  distance: {
    type: Number,
    required: [true, 'Distance required'],
  },
  date: {
    start: {
      type: String,
      required: [true, 'Start date is mandatory'],
    },
    end: {
      type: String,
      required: [true, 'End date is mandatory'],
    },
  },
  time: {
    start: {
      type: String,
      required: [true, 'Start time is mandatory'],
    },
    end: {
      type: String,
      required: [true, 'End time is mandatory'],
    },
  },
  ytVideoId: {
    type: String,
    required: [true, ' ID Video required'],
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

export default mongoose.model('Challenge', Challenge);