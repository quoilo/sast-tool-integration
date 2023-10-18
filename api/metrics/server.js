app.post('/api/metrics', (req, res) => {
    // Handle and store the metrics data here
    console.log('Received metrics data:', req.body);
    res.sendStatus(200); // Respond with a success status code
  });
  