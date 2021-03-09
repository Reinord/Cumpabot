// Load env config
require('dotenv').config()

// Import modules
const sendMessage = require('./send-message')
const sendDocument = require('./send-document')

// GlobalVAR
var version = process.env.VERSION

//VAR DEBUG set to 1 to print out
var debugVAR = 1

if (debugVAR==1) console.debug('Starting API')

module.exports = async (req, res) => {
	
  const currentDate = new Date()
  const currentTimeStamp = currentDate.getTime() / 1000

  if (debugVAR==1) console.debug('Got request')

  // Check if Telegram message
  if (req.body && req.body.message && req.body.message.text) {

	if (debugVAR==1) console.debug('Got request with body and message')

	if (debugVAR==1) console.debug('Printing JSON from req.body ...')
	if (debugVAR==1) console.debug(JSON.stringify(req.body, null, 2))
	if (debugVAR==1) console.debug('... JSON END')

	// Get message object and chat id
	const message = req.body.message
	const text = message.text.toLowerCase()
	const chatId = message.chat.id

	// check if message is older than 10 seconds; if yes discard it
	if (debugVAR==1) console.debug('Check TS, result will be '+(currentTimeStamp - message.date).toString())
	if ( (currentTimeStamp - message.date) > 10) {
		if (debugVAR==1) console.debug('TS check NOT passed: skiping message! END')
		//res.status = 'ok'
		//if (debugVAR==1) console.debug(res)
		return res.end('ok')
	}

	if (debugVAR==1) console.debug('TS check passed')
	if (debugVAR==1) console.debug('Message is: ' + message.text.toString())

	
    // Match text request command /version
    if (text.match('/version')) {
	  await sendMessage({
		chat_id: chatId,
		text: 'Hi, I am SpikeGifBot. This is the version '+version+'.' 
	  })
    }	
	
	// tich + bassoni + biassoni
    if ( text.match('tich') || text.match('bassoni') || text.match('biassoni') ){		
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/tich.mp4' 
	  })
    }
	
	//bug + problema
	if ( text.match('bug') || text.match('problema') ){		
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/video/tichmarmotta.mp4' 
	  })
    }
	
	//gg
	if ( text.indexOf(' gg ') >= 0 || (text.indexOf('gg') >= 0 && text.length == 2) || text.indexOf('gg ') === 0 || (text.indexOf(' gg') === text.length-3 && text.length > 2 ) ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/gg.mp4' 
	  })
	}

	//gigi
  	if ( text.match('gigi') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/gg.mp4'
	  })
	}
	
	//carrora
  	if ( text.match('carrora') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/carrora.mp4' 
	  })
	}

	//berta + bertha
  	if ( text.match('berta') || text.match('bertha') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/berta.mp4' 
	  })
	}	
	
	//anna
  	if ( text.match('anna') && !text.match('susanna')){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/anna.mp4' 
	  })
	}		
	
  	//giannone
  	if ( text.match('giannone') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/giannone.mp4'
	  })
	}	

  	//monduz
  	if ( text.match('monduz') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/monduz.mp4'
	  })
	}	

  	//ross
  	if ( text.match('ross') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/ross.mp4'
	  })
	}	

   	//vivaldi
  	if ( text.match('vivaldi') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/vivaldi.mp4'
	  })
	}
	
   	//ibm merda
  	if ( text.match('ibm merda') || text.match('ibm merda') || text.match('ibm') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/ibm_merda.mp4'
	  })
	}	

   	//ferraris
  	if ( text.match('ferraris') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/ferraris.mp4'
	  })
	}	

   	//mayer + mazer
  	if ( text.match('mayer') || text.match('mazer') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/mayer.mp4'
	  })
	}		
	
   	//berdy + bernarda
  	if ( text.match('berdy') || text.match('bernarda') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/berdy.mp4'
	  })
	}		
	
   	//cagnini
  	if ( text.match('cagnini') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/cagnini.mp4'
	  })
	}
  
   	//giulia
  	if ( text.match('giulia') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/giulia.mp4'
	  })
	}

    //white
  	if ( text.match('white') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/white.mp4'
	  })
	} 

    //germana
  	if ( text.match('germana') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/germana2.mp4'
	  })
	} 

    //gaia
  	if ( text.match('gaia') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/gaia.mp4'
	  })
	} 
	
    //cagnes
  	if ( text.match('cagnes') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/cagnes.mp4'
	  })
	} 	
	
    //manganelli
  	if ( text.match('manganelli') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/manganelli.mp4'
	  })
	} 	 
  
    //chiante
  	if ( text.match('chiante') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/chiante.mp4'
	  })
	} 	
	
    //vale + sala baganza
  	if ( text.match('vale') || text.match('sala baganza') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/vale.mp4'
	  })
	} 		
	
    //ashal abat + ashal abbat + ashal
  	if ( text.match('ashal abat') || text.match('ashal abbat') || text.match('ashal') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/AshalAbat.mp4'
	  })
	} 	
 
    //Mary
  	if ( text.match('mary') || text.match('maria') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/mary.mp4'
	  })
	} 	
 
    //cecilie
  	if ( text.match('nenov') || text.match('ceci') || text.match('cecilie') || text.match('unta') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/cecilie.mp4'
	  })
	} 
 
    //isa
  	if ( text.match('isa') || text.match('isabella') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/isa.mp4'
	  })
	} 
  
    //ale
  	if ( text.indexOf(' ale ') >= 0 || (text.indexOf('ale') >= 0 && text.length == 3) || text.indexOf('ale ') === 0 || (text.indexOf(' ale') === text.length-4 && text.length > 4 ) ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/ale.mp4'
	  })
	}   

    //gemella
  	if ( text.match('gemella') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/ale.mp4'
	  })
	}  
  
    //renio + fregno
  	if ( text.match('renio') || text.match('fregno') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/renio.mp4'
	  })
	}  
 
    //visentin
  	if ( text.match('visentin') || text.match('visintin') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/visentin.mp4'
	  })
	}  
 
    //lazzaroni + lafra + la fra
  	if ( text.match('lazzaroni') || text.match('lafra') || text.match('la fra') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/lazzaroni.mp4'
	  })
	} 

    //sonia
  	if ( text.match('sonia') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/sonia.mp4'
	  })
	}  
 
    //?b
  	if ( text.match('\\?b') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/wb.mp4'
	  })
	}  

    //cimbro
  	if ( text.match('cimbro') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/cimbro.mp4'
	  })
	}  
 
    //great opportunity
  	if ( text.match('great opportunity') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/GreatOpportunity.mp4'
	  })
	} 

    //sorella di finizio
  	if ( text.match('sorella di finizio') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/sorelladifinizio.mp4'
	  })
	} 

    //erika
  	if ( text.match('erika') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/erika.mp4'
	  })
	}

    //minora
  	if ( text.match('minora') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/minora.mp4'
	  })
	}
 
    //spike
  	if ( text.match('spike') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/spike.mp4'
	  })
	}
	
    //marta
  	if ( text.match('marta') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/marta.mp4'
	  })
	}

    //romano
  	if ( text.match('romano') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/romano.mp4'
	  })
	}
  
    //kasko
  	if ( text.match('kasko') ){
	  await sendDocument({
		chat_id: chatId,
		document: 'http://spikegifbot.altervista.org/gif/kasko.mp4'
	  })
	}

    //sara
	if ( text.match('sara') ){
		await sendDocument({
		  chat_id: chatId,
		  document: 'http://spikegifbot.altervista.org/gif/sara.mp4'
		})
	}

	if (debugVAR==1) console.debug('Message sent, END')
	return res.end('ok')
	
  } else {
	  
	if (debugVAR==1) console.debug('It seems not a valid telegram message, END')
	if (req.body) {
		if (debugVAR==1) console.debug('Printing JSON from req.body ...')
		if (debugVAR==1) console.debug(JSON.stringify(req.body, null, 2))
		if (debugVAR==1) console.debug('... JSON END')
		return res.end('The message received is: ' + JSON.stringify(req.body, null, 2))
	} else {
		return res.end('This is SpikeGifBot API')
	}
  }

}