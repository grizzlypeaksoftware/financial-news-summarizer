# Financial News Summarizer using GPT-4o-mini

![Financial News Summarizer Postman Interface](https://cortexagentwebsite.s3.us-east-1.amazonaws.com/financial-news-summarizer-postman.jpg)

## Description

This project demonstrates how to build a Financial News Summarizer and Trend Analyzer using OpenAI's GPT-4o-mini model. It's designed to help financial professionals quickly process and extract insights from large volumes of financial news articles.

## Features

- Automated summarization of financial news articles
- Trend and sentiment analysis
- RESTful API for easy integration
- Cost-effective AI processing using GPT-4o-mini

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- An OpenAI API key

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/financial-news-summarizer.git
   cd financial-news-summarizer
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the project root and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

## Usage

1. Start the server:
   ```
   node server.js
   ```

2. The server will start running on `http://localhost:3000`.

3. To summarize a news article, send a POST request to `/summarize` with a JSON body containing the article URL:
   ```
   curl -X POST -H "Content-Type: application/json" -d '{"url":"https://example.com/financial-news-article"}' http://localhost:3000/summarize
   ```

## API Reference

### POST /summarize

Summarizes a financial news article and provides trend analysis.

**Request Body**:
```json
{
  "url": "string"
}
```

**Response**:
```json
{
  "summary": "string"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- OpenAI for providing the GPT-4o-mini model
- All contributors and supporters of this project

## Contact

For any queries, please reach out to [Your Name] at [your.email@example.com].