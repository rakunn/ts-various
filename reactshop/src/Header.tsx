import * as React from 'react';
import 'url-search-params-polyfill';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { IApplicationState } from './Store';
import BasketSummary from './BasketSummary';

import logo from './logo.svg';

interface IProps extends RouteComponentProps {
  basketCount: number;
}

const Header: React.FunctionComponent<IProps> = props => {
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    const searchParams = new URLSearchParams(props.location.search);
    setSearch(searchParams.get('search') || '');
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleSearchKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.history.push(`/products?search=${search}`);
    }
  };

  return (
    <header className="header">
      <div className="search-container">
        <input
          type="search"
          placeholder="search"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeydown}
        />
        <BasketSummary count={props.basketCount} />
      </div>
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title">React Shop</h1>
      <nav>
        <NavLink
          to="/products"
          className="header-link"
          activeClassName="header-link-active"
        >
          Products
        </NavLink>
        <NavLink
          to="/contactus"
          className="header-link"
          activeClassName="header-link-active"
        >
          Contact us
        </NavLink>
        <NavLink
          to="/admin"
          className="header-link"
          activeClassName="header-link-active"
        >
          Admin
        </NavLink>
      </nav>
    </header>
  );
};

const mapStateToProps = (store: IApplicationState) => {
  return {
    basketCount: store.basket.products.length,
  };
};

export default connect(mapStateToProps)(withRouter(Header));
