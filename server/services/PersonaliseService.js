const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
 

class PersonaliseService {
    constructor(datafile) {
      
      this.datafile = datafile;
      
    }

    async getList() {
      const data = await this.getData();
      return data;
    }

    async getData() {
        const data = await readFile(this.datafile, 'utf8');
        if (!data) return [];
        return JSON.parse(data).users;
      }

    async getUsersBookmarkedEvidence(shortname){
        const data = await this.getData();
        const user = data.find((user) => {
            return user.shortname === 'Chris_Tri';
        });
    
        if(!user || !user.bookmarkedEvidence) return null;
        return user.bookmarkedEvidence; 
      };

    }
  

    module.exports = PersonaliseService;