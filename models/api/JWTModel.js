class JWTModel {
    constructor({
        _id,
        username,
        firstname,
        lastname,
    }) {
        this._id = _id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.date = new Date();
    }
}

export default JWTModel;