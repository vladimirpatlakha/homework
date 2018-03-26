//подключаем модуль cli-color
var color = require('cli-color');

var Currency = function (rate) {
	this.rate = rate;
};

//корректное округление
Currency.prototype.roundTwoDecimals = function (amount) {
	return Math.round(amount * 100) / 100;
};

//конвертация из Bitcoin в доллары США
Currency.prototype.BTC_to_USD = function (currency) {
	console.log(color.green('Стоимость указанного Вами количества Bitcoin: ' + this.roundTwoDecimals(currency * this.rate) + ' usd'));

	return this;
};

//конвертация из долларов США в Bitcoin
Currency.prototype.USD_to_BTC = function (currency) {
	console.log(color.cyan('За указанную Вами сумму в долларах США Вы можете приобрести: ' + this.roundTwoDecimals(currency / this.rate) + ' Bitcoin'));
	return this;
};

module.exports = Currency;