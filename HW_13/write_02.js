var fs = require("fs");
	
//fs.appendFileSync("write_02.txt", "\nAdditional text message");
//fs.appendFile("write_02.txt", "\nAdditional text message");
 
fs.appendFile("write_02.txt", "\nAdditional text message", function(error){
                if(error) throw error;
                 
                console.log("Запись файла завершена. Содержимое файла:");
                var data = fs.readFileSync("write_02.txt", "utf8");
                console.log(data);  // выводим считанные данные
});