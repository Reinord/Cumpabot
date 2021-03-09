const fetch = require('node-fetch')

// Sends messages to Telegram API
module.exports = async (body) => {
  const token = process.env.TELEGRAM_TOKEN

  // Get method optionally
  const useMethod = 'sendMessage'

  return fetch(`https://api.telegram.org/bot${token}/${useMethod}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    statusCode: 200
  })
  
}