import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from './Store';
import { getProducts } from './ProductsActions';
import { RouteComponentProps } from 'react-router-dom';
import { IProduct } from './ProductsData';
import 'url-search-params-polyfill';
import ProductsList from './ProductsList';

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
    const search = searchParams.get('search') || '';

    return (
      <div className="page-container">
        <p>
          Welcome to React Shop where you can get all your tools
          for ReactJS!
        </p>
        <ProductsList products={this.props.products} loading={this.props.loading} search={search}/>
      </div>
    );
  }
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    loading: store.products.isLoading,
    products: store.products.products,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getProducts: () => dispatch(getProducts()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsPage);
