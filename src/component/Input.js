import React, { useEffect, useRef, useState } from "react";


const initialValues = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  birth: "",
};

function Input(props) {
  const [formValue, setFormValue] = useState(initialValues);
  const [err , setErr] = useState(false)
  const [click, setClick] = useState(false);
  const inputRef = useRef()
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  useEffect(() => {
    props.print(formValue);
  }, [click]);
  const handlerSubmit = (e) => {
    e.preventDefault()
    setClick(!click);
    setTimeout(() => {
        setFormValue(initialValues);
    }, 10);
  };



  return (
    <div className="container" >
      <form className="form-items" onSubmit={handlerSubmit}>
        <input
        ref={inputRef}
          type="text"
          name="name"
          onChange={handleChange}
          value={formValue.name}
          placeholder='name'
        />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={formValue.lastName}
          placeholder='Last Name'
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formValue.email}
          placeholder='E-mail'
        />
        <input
          type="phone"
          name="phone"
          onChange={handleChange}
          value={formValue.phone}
          placeholder='Phone'
        />
        <input
          type="date"
          name="birth"
          onChange={handleChange}
          value={formValue.birth}
        />
        <button className="input-btn" onClick={(e) => handlerSubmit
            (e)}>send</button>
      </form>
    </div>
  );
}

export default Input;
