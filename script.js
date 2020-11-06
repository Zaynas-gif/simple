

var person = {
    firstName: "Jonas",
    lastName : "Mikutavicius",
    language : "Svenska/Engelska/Litausika",
    age: 25,
    hobbies: "Kampsport/Böcker/Datorspel",
    gatan: "Tranemansgatan 21B",
    stad: "Helsingborg",




    get namn() {
      return this.firstName;
      
    },

    get efternamn () {
        return this.lastName
    },

    get ar() {
        return this.age
    },

    get lang() {
        return this.language

    },

    get hobb() {
        return this.hobbies
    },

    get gat () {
        return this.gatan
    },

    get stan () {
        return this.stad
    }

    


  };
  
  document.getElementById("name").innerHTML = person.namn + " " + person.efternamn;
  document.getElementById("old").innerHTML = "Jag är :" + " " + person.age;
  document.getElementById("stan").innerHTML = "Plats:" + " " + person.gatan + ", " + person.stad
  document.getElementById("sprak").innerHTML = "Talar:" + " " + person.lang
  document.getElementById("hobbies").innerHTML = "Hobbies :" + " " + person.hobb

