import React from "react";
import './taskform.css'

export class UserForm extends React.Component {
    constructor(props) {
        super(props);

        var userID = props.userID || '';
        var userIDIsValid = this.validateUserID(userID);
        var password = props.password || '';
        var passwordIsValid = this.validatePassword(password);
        var name = props.name || '';
        var nameIsValid = this.validateName(name);
        var address = props.address || '';
        var addressIsValid = this.validateAddress(address);
        var country = props.country || '';
        var countryIsValid = this.validateCountry(country);
        var ZIPCode = props.ZIPCode || '';
        var ZIPCodeIsValid = this.validateZIPCode(ZIPCode);
        var email = props.email || '';
        var emailIsValid = this.validateEmail(email);
        var sex = props.sex || '';
        var sexIsValid = this.validateSex(sex);
        var language = props.language || '';
        var languageIsValid = this.validateLanguage(language);
        var about = props.about || '';

        this.state = {
            userID: userID,
            name: name,
            password: password,
            address: address,
            country: country,
            ZIPCode: ZIPCode,
            email: email,
            sex: sex,
            language: language,
            about: about,
            passwordValid: passwordIsValid,
            userIDValid: userIDIsValid,
            nameValid: nameIsValid,
            addressValid: addressIsValid,
            countryValid: countryIsValid,
            ZIPCodeValid: ZIPCodeIsValid,
            emailValid: emailIsValid,
            sexValid: sexIsValid,
            languageValid: languageIsValid
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onUserIDChange = this.onUserIDChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
        this.onZIPCodeChange = this.onZIPCodeChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSexChange = this.onSexChange.bind(this);
        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateName(name) {
        return name.length > 2;
    }

    validateUserID(userID) {
        return (userID.length >= 5 && userID.length <= 7);
    }

    validatePassword(password) {
        return (password.length >= 7 && password.length <= 12);
    }

    validateAddress(address) {
        return /\d/.test(address) && /[a-zA-Z]/.test(address);
    }

    validateCountry(country) {
        return country !== '';
    }

    validateZIPCode(ZIPCode) {
        return /\d/.test(ZIPCode) && /[a-zA-Z]/.test(ZIPCode);
    }

    validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    validateSex(sex) {
        return sex !== '';
    }

    validateLanguage(language) {
        return language !== '';
    }

    onUserIDChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateUserID(val);
        this.setState({ userID: val, userIDValid: valid });
    }

    onPasswordChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validatePassword(val);
        this.setState({ password: val, passwordValid: valid });
    }

    onNameChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateName(val);
        this.setState({ name: val, nameValid: valid });
    }

    onAddressChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateAddress(val);
        this.setState({ address: val, addressValid: valid });
    }

    onCountryChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateCountry(val);
        this.setState({ country: val, countryValid: valid });
    }

    onZIPCodeChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateZIPCode(val);
        this.setState({ ZIPCode: val, ZIPCodeValid: valid });
    }

    onEmailChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateEmail(val);
        this.setState({ email: val, emailValid: valid });
    }

    onSexChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateSex(val);
        this.setState({ sex: val, sexValid: valid });
    }

    onLanguageChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateLanguage(val);
        this.setState({ language: val, languageValid: valid });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.userIDValid && this.state.passwordValid) {
            alert(`UserID: ${this.state.userID} Password: ${this.state.password}`);
        }
    }

    render() {
        var nameColor = this.state.nameValid === true ? "green" : "red";
        var userIDColor = this.state.userIDValid === true ? "green" : "red";
        var passwordColor = this.state.passwordValid === true ? "green" : "red";
        var countryColor = this.state.countryValid === true ? "green" : "red";
        var addressColor = this.state.addressValid === true ? "green" : "red";
        var ZIPCodeColor = this.state.ZIPCodeValid === true ? "green" : "red";
        var emailColor = this.state.emailValid === true ? "green" : "red";
        var sexColor = this.state.sexValid === true ? "green" : "red";
        var languageColor = this.state.languageValid === true ? "green" : "red";

        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>User ID:</label><br />
                    <input type="text" value={this.state.userID} 
                        onChange={this.onUserIDChange} style={{borderColor: userIDColor}} />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input type="password" value={this.state.password} 
                        onChange={this.onPasswordChange} style={{borderColor: passwordColor}} />
                </p>
                <p>
                    <label>Name:</label><br />
                    <input type="text" value={this.state.name} 
                        onChange={this.onNameChange} style={{borderColor: nameColor}} />
                </p>
                <p>
                    <label>Address:</label><br />
                    <input type="text" value={this.state.address} 
                        onChange={this.onAddressChange} style={{borderColor: addressColor}} />
                </p>
                <p>
                    <label>Country:</label><br />
                    <select name="select" value={this.state.country} onChange={this.onCountryChange} style={{borderColor: countryColor}}> 
                        <option value="">Select Country</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="Poland">Poland</option>
                        <option value="USA">USA</option>
                    </select>
                </p>
                <p>
                    <label>ZIP Code:</label><br />
                    <input type="text" value={this.state.ZIPCode} 
                        onChange={this.onZIPCodeChange} style={{borderColor: ZIPCodeColor}} />
                </p>
                <p>
                    <label>Email:</label><br />
                    <input type="text" value={this.state.email} 
                        onChange={this.onEmailChange} style={{borderColor: emailColor}} />
                </p>
                <p>
                    <label>Sex:</label><br />
                    <input type="radio" id="male" name="sex" value="Male" 
                        onChange={this.onSexChange} style={{borderColor: sexColor}} /> Male
                    <input type="radio" id="female" name="sex" value="Female" 
                        onChange={this.onSexChange} style={{borderColor: sexColor}} /> Female
                </p>
                <p>
                    <label>Language:</label><br />
                    <input type="checkbox" id="english" value="English" 
                        onChange={this.onLanguageChange} style={{borderColor: languageColor}} /> English
                    <input type="checkbox" id="ukrainian" value="Ukrainian" 
                        onChange={this.onLanguageChange} style={{borderColor: languageColor}} /> Ukrainian
                </p>
                <p>
                    <label>About:</label><br />
                    <input type="text" value={this.state.about} onChange={(e) => this.setState({about: e.target.value})} />
                </p>
                <div className="sub"> <input type="submit" value="Отправить" className="btnSub"/></div>
               
            </form>
        );
    }
}
