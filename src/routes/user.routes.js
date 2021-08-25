import express from 'express';
import mongoose from 'mongoose';
import Busboy from 'busboy';
import bcrypt from 'bcrypt';
import moment from 'moment';

const router = express.Router();

router.post('/', async (req, res) => {

  const busboy = new Busboy({ 
    headers: req.headers,
  });

  busboy.on('finish', async () => {
    try {
      // upload da imagem
      if(req.files) {
        const file = req.files.photo;
      }

      // Criar usuário

    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  });

  req.pipe(busboy);  

});



export default router;

