import React from 'react';

const UserDashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <div>
        <h3>Purchased PDFs</h3>
        <ul>
          <li>Sample PDF 1</li>
          <li>Sample PDF 2</li>
        </ul>
      </div>
      <div>
        <h3>Account Settings</h3>
        <form>
          <label>
            Change Password:
            <input type="password" />
          </label>
          <br />
          <label>
            Update Email:
            <input type="email" />
          </label>
          <br />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default UserDashboard;
