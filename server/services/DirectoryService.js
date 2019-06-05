//Directory Service class reads and interact with data from descriptions.json
//Modules used to load files - node file module, node utility module. Promise ready read file function made
//Class constructor - first function called when a new instance is created of this class. When call will require data file to be passed in. Data file is saved in a property 
//Async getData function - using readFile to grab and store returned relevant data.  
//Async getNames function - gets name and shortname 
//Async getCharacter function - finds shortname, if there is will return character name, information and shortname
//Module is exported to be used in other files

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile)

class DirectoryService {

    constructor(datafile){
        this.datafile = datafile;
    }

    async getData(){
        const data = await readFile(this.datafile, 'utf8');
        if(!data) return [];
        return JSON.parse(data).descriptions;
    }

    async getNames(){
        const data = await this.getData();
        return data.map((directory) => {
            return {name:directory.name, shortname: directory.shortname};
        });

    }

    async getCharacter(shortname){
        const data = await this.getData();
        const character = data.find((character)=> {
            return character.shortname === shortname;
        });
        if(!character) return null;

        return {
            name: character.name,
            shortname: character.shortname,
            information: character.information,
    }  
}

    async getImagesforCharacter(shortname){
        const data = await this.getData();
        const character = data.find((character)=> {
            return character.shortname === shortname;
        });
        
        if(!character || !character.photo) return null;
        return {
            photo:character.photo,
        };        
    }

    async getAllImages(){
        const data = await this.getData();
        const photos = data.map((character) => {
            return character.photo;
        })
        var allImages = [];
        photos.forEach(function(element){
            allImages.push(...element);
        });

        return allImages;
}  

    async getEvidenceforCharacter(shortname){
        const data = await this.getData();
        const character = data.find((character)=> {
            return character.shortname === shortname;
        });

        if(!character || !character.evidence) return null;
        return character.evidence;   

    }

    async getAllEvidence(){
        const data = await this.getData();
        const evidence = data.map((character) => {
            return character.evidence;
        })
        var allEvidence = [];
        evidence.forEach(function(element){
            allEvidence.push(...element);
        });

        return allEvidence;
}  




    
}

module.exports = DirectoryService;
