const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Steffen Fløttum Leistad", "location": "Brumunddal"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2015", "yearTo": "2019", "place": "Kong Arthur", "comment": "Frontend Developer"}, {"yearFrom": "2009", "yearTo": "2010", "place": "The coffee shop", "comment": "Making coffee"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "2009", "yearTo": "2012", "place": "Høgskolen i Hedmark - avd. Hamar", "comment": "Bachelor in Virtual Arts & Design"}, {"yearFrom": "2001", "yearTo": "2004", "place": "Barista academy", "comment": "Made coffee"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
