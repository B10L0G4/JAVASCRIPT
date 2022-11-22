// Person Constructor 

function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calcaulateAge = function (){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }
    const myName = new Person('Vanessa', '06-28-1984');
    console.log(myName.calcaulateAge());
}