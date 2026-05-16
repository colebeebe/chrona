import express, { Router } from 'express';

const routes = Router();

routes.get('/api', (req, res) => {
  res.send('Primary api endpoint');
});

export default routes;
