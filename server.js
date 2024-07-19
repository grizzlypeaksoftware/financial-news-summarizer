const express = require('express');
const { summarizeNews } = require('./summarizer');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/summarize', async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const summary = await summarizeNews(url);
  if (summary) {
    res.json({ summary });
  } else {
    res.status(500).json({ error: 'Failed to summarize the article' });
  }
});

app.listen(port, () => {
  console.log(`Financial News Summarizer running on http://localhost:${port}`);
});