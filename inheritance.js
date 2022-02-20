class Support {
    name ;
    address = "BD";
    role = 'web dev';
    constructor (name){
        this.name = name;
    }
}

const amir = new Support('amir khan');
const sobhan = new Support('sobhan')


class StudentCare{
    name;
    address = "BD";
    constructor(name,address) {
        this.name = name ;
        this.address = address
    }

    buildARoutine (student){
        console.log(this.name ,'build a routine' , student);

    }
}

const alia = new StudentCare ('alia bhat','mumbai');
console.log(alia);
