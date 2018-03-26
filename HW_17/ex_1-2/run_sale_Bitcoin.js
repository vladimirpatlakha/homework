//подключаем модуль request для получения текущего курса BTC/USD
var request = require('request');

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	var data = JSON.parse(body);
  	var rate = data[3].sale; //BTC to USD

  	var Currency = require('./sale_Bitcoin');
  	var currency = new Currency(rate);

  	currency.BTC_to_USD(1);      //указываем количество Bitcoin, которое хотим приобрести
  	currency.USD_to_BTC(50000);  //указываем сумму в долларах США, на которую хотим приобрести Bitcoin
  } else {
  	console.warn(error);
  }
});



