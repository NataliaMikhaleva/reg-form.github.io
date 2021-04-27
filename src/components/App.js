import React from 'react';
import '../index.css';
import Name from './Name';
import Greeting from './Greeting'

function App() {
  const [isUserDataVisible, setisUserDataVisible] = React.useState(true);
  const [isUserEmailVisible, setisUserEmailVisible] = React.useState(false);
  const [isUserPasswordVisible, setisPasswordVisible] = React.useState(false);
  const [isGreetingVisible, setIsGreetingVisible] = React.useState(false);
   //стейт для выводя текста ошибки при неправильном вводе пароля
   const [isErrorVisible, setIsErrorVisible] = React.useState(false);

  //стейт с введенными в форму userdata данными
  const [userDataInputsValue, setUserDataInputsValue] = React.useState({name: '', surname: '', patronymic: '', dateOfBirth: ''});
  //стейт с введенными в форму userEmail данными
  const [userEmailInputValue, setUserEmailInputValue] = React.useState({email: ''});
   //стейт с введенными в инпут password данными
   const [passwordInputValue, setPasswordInputValue] = React.useState('');
   //стейт с введенными в инпут comparedpassword данными
   const [comparedPasswordInputValue, setComparedPasswordInputValue] = React.useState('');
  

  //обновляем стейт userDataInputsValue после получения данных из компонента Name (форма username)
  function updateUserData(name, surename, patronymic, dateOfBirth) {
    const correctDate = new Date(dateOfBirth).toLocaleDateString();
    setUserDataInputsValue({name: name, surname: surename, patronymic: patronymic, dateOfBirth: correctDate});
  }

  //обновляем стейт userEmailInputValue после получения данных из компонента Name (форма useremail)
  function updateUserEmail(email) {
    setUserEmailInputValue({email: email});
  }

  // обрабатываем событие submit на форме userdata
  function handleUserDataForm(event) {
    event.preventDefault();
    const userdata = document.forms.userdata;
    setisUserDataVisible(false);
    setisUserEmailVisible(true);
    updateUserData(userdata.name.value, userdata.surname.value, userdata.patronymic.value, userdata.dateOfBirth.value,)
  }

  // обрабатываем событие submit на форме useremail
  function handleUserEmailForm(event) {
    event.preventDefault();
    const userEmail = document.forms.useremail;
    event.preventDefault();
    setisUserEmailVisible(false);
    setisPasswordVisible(true);
    updateUserEmail(userEmail.email.value);
    
  }


   //обновляем стейт passwordInputValue
   function updatePassword(event) {
    //const password = document.forms.userpassword.password.value;
    // setPasswordInputValue({
    //   ...passwordInputValue,
    //   password: password
    // });
    setPasswordInputValue(event.target.value);
    //console.log(passwordInputValue);
  }

   //обновляем стейт comparedPasswordInputValue
    function updateComparedPassword(event) {   
       //const comparedpassword = document.forms.userpassword.comparedpassword.value;
      //  setComparedPasswordInputValue({
      //    ...comparedPasswordInputValue,
      //    comparedPassword: comparedpassword
      //  });
      setComparedPasswordInputValue(event.target.value);
      //console.log(comparedPasswordInputValue);
    }

  //обрабатываем событие submit на форме userpassword
  function handleUserPasswordForm(event) {
    event.preventDefault();
    console.log('!');
    const userPassword = document.forms.userpassword;
    console.log(passwordInputValue);
    console.log(comparedPasswordInputValue);
    if(passwordInputValue !== comparedPasswordInputValue) {
      console.log('!!');
      setIsErrorVisible(true);
      //userPassword.comparedpassword.setCustomValidity('Пароли не совпадают');
      // setPasswordInputValue({});
      // setComparedPasswordInputValue({});
      
    } else{
      userPassword.comparedpassword.setCustomValidity('');
      setisPasswordVisible(false);
      setIsGreetingVisible(true);
      }
     // console.log(passwordInputValue);
      //console.log(comparedPasswordInputValue);
  }

  return (
    <div className="page">
     <Name name="userdata" handleNextForm={handleUserDataForm} isVisible={isUserDataVisible} children={
       <>        
        <input type="text" name="name" className="userInfo__input"  required placeholder="Имя" minLength="2"/>
        <input type="text" name="surname" className="userInfo__input" required placeholder="Фамилия" minLength="2" /> 
        <input type="text" name="patronymic" className="userInfo__input" required placeholder="Отчество" minLength="2" />
        <input type="date" name="dateOfBirth" className="userInfo__input"  placeholder="Дата рождения" required />               
     </>
     }/> 

     <Name name="useremail" handleNextForm={handleUserEmailForm} isVisible={isUserEmailVisible} children={
       <>        
        <input type="email" name="email" className="userInfo__input"  required placeholder="Email" pattern="[a-z](\w*[a-z]|\d?)*((-\w*[a-z])?)*@\w+(-\w+)?.\w+((.\w+)?)*"/>              
     </>
     }/> 

    <Name name="userpassword" handleNextForm={handleUserPasswordForm} isVisible={isUserPasswordVisible} children={
       <>        
        <input type="password" name="password" value={passwordInputValue} className="userInfo__input"  required placeholder="Пароль" minLength="6" onChange={updatePassword}/>
        <div className="userInfo__container">
          <input type="password" name="comparedpassword" value={comparedPasswordInputValue} className="userInfo__input" placeholder="Подтвердите пароль" onChange={updateComparedPassword} required minLength="6"/>
          <span className={isErrorVisible ? "errortext errortext_visible" : "errortext errortext_hidden"}>Пароли не совпадают</span>    
        </div>
                 
     </>
     }/>
    
    <Greeting isVisible={isGreetingVisible} name={userDataInputsValue.name} surename={userDataInputsValue.surname} patronymic={userDataInputsValue.patronymic} dateOfBirth={userDataInputsValue.dateOfBirth} email={userEmailInputValue.email}/>
    </div>
  );
}

export default App;
