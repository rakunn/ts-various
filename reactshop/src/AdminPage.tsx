import * as React from "react";
import { NavLink, Route, RouteComponentProps } from "react-router-dom";

const AdminPage: React.FunctionComponent = () => {
  return (
      <div className="page-container">
          <h1>Admin Panel</h1>
          <ul className="admin-sections">
            <li key="users">
              <NavLink to={`/admin/users`} activeClassName="admin-link-active">
                  Users
              </NavLink>
            </li>
            <li key="products">
              <NavLink to={`/admin/products`} activeClassName="admin-link-active">
                  Products
              </NavLink>
            </li>
          </ul>

          <Route path={`/admin/users`} component={AdminUsers}/>
          <Route path={`/admin/users/:id`} component={AdminUser} />
          <Route path={`/admin/products`} component={AdminProducts} />

      </div>
  );
};

const AdminProducts: React.FunctionComponent = () => {
  return (
      <div>
          Some Admin products options.
      </div>
  );
};


interface IUser {
    id: number;
    name: string;
    isAdmin: boolean;
}

const adminUsersData: IUser[] = [
    { id: 1, name: "Fred", isAdmin: true },
    { id: 2, name: "Bob", isAdmin: false },
    { id: 3, name: "Jane", isAdmin: true }
];

const AdminUsers: React.FunctionComponent = () => {
    return (
        <div>
            <ul className="admin-sections">
                { adminUsersData.map(user => (
                    <li>
                        <NavLink to={`/admin/users/${user.id}`} activeClassName="admin-link-active">
                            { user.name }
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const AdminUser: React.FunctionComponent<RouteComponentProps<{ id: string }>> = (props) => {
    let user: IUser;
    if (props.match.params.id) {
        const id: number = parseInt(props.match.params.id, 10);
        user = adminUsersData.filter(u => u.id === id)[0];
    } else {
        return null;
    }
  return (
      <div>
          <div>
              <b>Id </b>
              <span>{user.id.toString()}</span>
          </div>
          <div>
              <b>is Admin? </b>
              <span>{user.isAdmin.toString()}</span>
          </div>
      </div>
  )
};

export default AdminPage;
