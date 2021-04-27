import React from 'react';
import '../index.css';

function Greeting(props) {
    return (
     <div className={props.isVisible ? `userInfo userInfo_type_${props.name}` : "userInfo userInfo_not-visible"}>
        <h3 className="userInfo__title">Поздравляем с успешным вводом данных!</h3>
        <p>Имя: {props.name}</p>
        <p>Фамилия: {props.surename}</p> 
        <p>Отчество: {props.patronymic}</p> 
        <p>Дата рождения: {props.dateOfBirth}</p>
        <p>Email: {props.email}</p>
            
      </div>
    );
  }
  
  export default Greeting;