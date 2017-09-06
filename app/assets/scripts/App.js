var Person = require('./modules/Person');/*import the person class*/

var John = new Person("John Doe", "blue");
John.greet();

var Jane = new Person("Jane Smith", "green");
Jane.greet();