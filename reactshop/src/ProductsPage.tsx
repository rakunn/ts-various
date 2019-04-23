import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from './Store';
import { getProducts } from './ProductsActions';
import { Link, RouteComponentProps } from 'react-router-dom';
import { IProduct } from './ProductsData';
import 'url-search-params-polyfill';

interface IProps extends RouteComponentProps {
  getProducts: typeof getProducts;
  loading: boolean;
  products: IProduct[];
}

class ProductsPage extends React.Component<IProps> {

  public componentDidMount() {
    this.props.getProducts();
  }

  public render() {
    const searchParams = new URLSearchParams(this.props.location.search);

    return (
      <div className="page-container">
        <p>
          Welcome to React Shop where you can get all your tools
          for ReactJS!
        </p>
        <ul className="product-list">
          {this.state.products.map(product => {
            if (
              !this.state.search ||
              (this.state.search &&
                product.name
                  .toLowerCase()
                  .indexOf(this.state.search.toLowerCase()) > -1)
            ) {
              return (
                <li key={product.id} className="product-list-item">
                  <Link to={`/products/${product.id}`}>{product.name}
                  </Link>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  }
}

export default ProductsPage;
