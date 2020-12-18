import React from 'react';
import "./style.css";

export default function UsernameInput({username, setUsername}) {
  return (
    <div className="username-input-wrapper">
      <label className="user-label">Username</label>
      <input className="user-input" value={username} onChange={(e) => { setUsername(e.currentTarget.value) }}/>
    </div>
  )
}
