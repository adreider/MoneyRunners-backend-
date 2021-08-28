import express from 'express';
import mongoose from 'mongoose';
import Busboy from 'busboy';
import bcrypt from 'bcrypt';
import moment from 'moment';
import aws from '../services/aws.js';

const router = express.Router();

router.post('/', async (req, res) => {

  const busboy = new Busboy({ 
    headers: req.headers,
  });

  busboy.on('finish', async () => {
    try {

      const userId = mongoose.Types.ObjectId();
      let photo = '';

      // upload da imagem
      if(req.files) {
        const file = req.files.photo;

        const nameParts = file.name.split('.');
        const fileName = `${userId}.${nameParts[nameParts.length -1]}`;
        photo = `user/${fileName}`;

        const response = await aws.uploadToS3(file, photo);

        if (response.error) {
          res.json({ 
            error: true,
            message: response.message,
          })
        }
      }

      res.json({ message: 'Upload successful'})
      // Criar usuário

    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  });

  req.pipe(busboy);  

});



export default router;

