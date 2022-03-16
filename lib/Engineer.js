const Employee=require("./Employee")

class Engineer extends Employee{
constructor(name, id, email, gitUsername){
    super(name, id, email);
    this.gitUsername = gitUsername;
}
rendergitUserName() {
    return this.gitUsername;
}
renderRole() {
    return "Engineer";
}
}
module.exports = Engineer