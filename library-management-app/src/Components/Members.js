import React, { useState, useEffect } from 'react';
import api from '../api';
 
const Members = () => {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
 
  const fetchMembers = async () => {
    try {
      const response = await api.get('https://localhost:7247/member/list');
      setMembers(response.data);
    } catch (err) {
      setError(err.response?.data || 'Error fetching members');
    }
  };
 
  useEffect(() => {
    fetchMembers();
  }, []);
 
  const registerMember = async () => {
    if (!name || !age) {
      setError("Please provide both name and age.");
      return;
    }
    try {
await api.post('/Members/register', { name, age });
      setName('');
      setAge('');
      fetchMembers();
    } catch (err) {
      setError(err.response?.data || 'Error registering member');
    }
  };
 
  return (
    <div>
      <h2>Members</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <input
          type="text"
          placeholder="Member Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={registerMember}>Register Member</button>
      </div>
      {members.length === 0 ? (
        <p>No members found.</p>
      ) : (
        <ul>
          {members.map((member) => (
            <li key={member.memberId}>
{member.name} (Age: {member.age})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
 
export default Members;