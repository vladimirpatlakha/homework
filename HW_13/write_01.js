var fs = require("fs");
	
//fs.writeFileSync("write_01.txt", "New text message");
//fs.writeFile("write_01.txt", "New text message");

fs.writeFile("write_01.txt", "New text message", function(error){
                if(error) throw error;

                console.log("Запись файла завершена. Содержимое файла:");
                var data = fs.readFileSync("write_01.txt", "utf8");
                console.log(data);  // выводим считанные данные
});