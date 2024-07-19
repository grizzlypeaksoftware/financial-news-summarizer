require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function extractTextContent(html) {
  const $ = cheerio.load(html);
  
  // Remove script and style elements
  $('script, style').remove();
  
  // Extract text from body
  let text = $('body').text();
  
  // Remove extra whitespace and trim
  text = text.replace(/\s+/g, ' ').trim();
  
  // Limit to approximately 4000 tokens (roughly 16000 characters)
  return text.slice(0, 16000);
}

async function summarizeNews(articleUrl) {
  try {
    // Fetch the article content
    const response = await axios.get(articleUrl);
    const articleContent = extractTextContent(response.data);

    // Use GPT4-o (GPT-3.5-turbo) to summarize and analyze the article
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a financial news analyst. Summarize the following article and identify key trends and sentiments.' },
        { role: 'user', content: articleContent }
      ],
      max_tokens: 150,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error summarizing news:', error);
    return null;
  }
}

module.exports = { summarizeNews };