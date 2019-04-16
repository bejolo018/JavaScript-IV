// CODE here for your Lambda Classes

//Person Class
class person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak(){
        return `Hello my name is ${this.name} I am from ${this.location}`
    };
};

//Instructor Class
class instructor extends person{
    constructor(props){ 
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`
    }

    grade(student, subject){
        return `${student} receives a perfect score on ${subject}`
    }
};

//Student Class
class student extends person{
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }

    listsSubjects(){
        return `${this.favSubjects}`
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
};

//Project Manager Class
class projectmanager extends instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel} @channel standup times!`
    }

    debugsCode(subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

//Person Object
const Ben = new person({
    name: 'Ben',
    age: 19,
    location: 'Texas',
    gender: 'Male'
});

//Instructor Object
const Josh = new instructor({
    name: 'Josh',
    age: 35,
    location: 'Wisconsin',
    gender: 'Male',
    speciality: 'Banjo',
    favLanguage: 'Javascript',
    catchPhrase: 'I cant spell today'
});

//Student Object
const Joe = new student({
    name: 'Joe',
    age: 25,
    location: 'New York',
    gender: 'Male',
    previousBackground: 'None',
    className: 'Web19',
    favSubjects: 'Javascript IV!'
})

//Project Manager Object
const Jamie = new projectmanager({
    name: 'Jamie',
    age: 27,
    location: 'Idaho',
    gender: 'female',
    gradClassName: 'Web18',
    favInstructor: 'Dan'
})

//Console.logged all methods to ensure they were functional!
console.log(Ben.speak());
console.log(Josh.demo('Javascript!'));
console.log(Josh.grade('Ben', 'Classes!'));
console.log(Joe.listsSubjects());
console.log(Joe.PRAssignment('Objects'))
console.log(Joe.sprintChallenge('Javascript Fundamentals!'))
console.log(Jamie.standUp('web_sprint'))
console.log(Jamie.debugsCode('Javascript'))