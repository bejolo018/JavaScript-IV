// CODE here for your Lambda Classes


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


class instructor extends person{
    constructor(props){
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${this.subject}`
    }

    grade(student, subject){
        `${student.name} receives a perfect score on ${this.subject}`
    }
};


class students extends person{
    constructor(props){
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }

    listsSubjects(){
        return `${favSubjects}`
    }

    PRAssignment(subject){
        `${student.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(){
        return `${student.name} has begin sprint challenge on ${subject}`
    }
};

class projectmanagers extends instructors{
    constructor(props){
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${this.channel} @channel standy times!`
    }

    debugsCode(){
        return `${this.name} debugs ${student.name}'s code on ${this.subject}`
    }
}