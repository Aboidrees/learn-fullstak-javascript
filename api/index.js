import express from 'express';
import Data from '../src/testData.json';

const router = express.Router();

router.get('/contests',(req, res) => {
    res.send({contests:Data.contests});
});

export default router;