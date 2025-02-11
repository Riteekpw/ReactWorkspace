import { useState } from 'react';
 import './form.css';

const FunctionalForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const onSubmit = (e) => {
    e.preventDefault(); 

    let valid = true;
    let emailError = '';
    let passwordError = '';

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
      valid = false;
      emailError = 'Please enter a valid email address';
    }
    
    const passPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!password || passPattern.test(password)) {
      valid = false;
      passwordError = 'Password must be at least 6 characters';
    }

    if (!valid) {
      if (emailError) {
        alert(`Invalid email: ${emailError}`);
      } else if (passwordError) {
        alert(`Invalid password: ${passwordError}`);
      }

      return; 
    }

    
    alert(`Saved...!!
      Name: ${name}
      Email: ${email}
      Password: ${password}`);
  };

  const onCancel = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default FunctionalForm;
