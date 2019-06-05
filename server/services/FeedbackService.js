//Feedback Service class displays feedback information and saves data in json file
//Module fs and util to read file
//Using promisify from util module to read and write file - stored in vars
//Feedback Service class constructor called when new instance is created in this class 
//addEntry function - adds feedback info into json data file
//getList function - return data from json file
//getData function - read json file and return data 
//Export Feedback Service out 

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class FeedbackService {
  constructor(datafile) {
    
    this.datafile = datafile;
    
  }
//adding feedback into json data
  async addEntry(name, title, message){
    const data = await this.getData();
    console.log(data);
    data.unshift({name, title, message});
    return writeFile(this.datafile, JSON.stringify(data));
  }

  async getList() {
    const data = await this.getData();
    return data;
  }

  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    if (!data) return [];
    return JSON.parse(data);
  }
}

module.exports = FeedbackService;