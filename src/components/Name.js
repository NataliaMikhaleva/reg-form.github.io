import React from 'react';
import '../index.css';

function Name(props) {
  return (
   <div className={props.isVisible ? `userInfo userInfo_type_${props.name}` : "userInfo userInfo_not-visible"}>
      <h3 className="userInfo__title">Введите данные</h3>
      <form className="userInfo__form" name={props.name} onSubmit={props.handleNextForm}>
        {props.children}
        <input type="submit" value="Далее" className="userInfo__button"></input>
      </form>    
    </div>
  );
}

export default Name;