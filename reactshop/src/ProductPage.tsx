import * as React from 'react';
import { connect } from 'react-redux';
import { Prompt, RouteComponentProps } from 'react-router-dom';
import { IApplicationState } from './Store';
import { addToBasket } from './BasketActions';
import { getProduct } from './ProductsActions';
import { IProduct } from './ProductsData';
import Product from './Product';

interface IProps extends RouteComponentProps<{id: string}> {
  addToBasket: typeof addToBasket;
  getProduct: typeof getProduct;
  loading: boolean;
  added: boolean;
  product?: IProduct;
}

class ProductPage extends React.Component<IProps> {
  public componentDidMount() {
    if (this.props.match.params.id) {
      const id: number = parseInt(this.props.match.params.id, 10);
      this.props.getProduct(id);
    }
  }

  private handleAddClick = () => {
    if (this.props.product) {
      this.props.addToBasket(this.props.product)
    }
  };

  public render() {
    const product = this.props.product;
    return (
      <div className="page-container">
        <Prompt when={!this.props.added} message={this.navAwayMessage} />
        { product || this.props.loading ? (
            <Product
                loading={this.props.loading}
                product={product}
                inBasket={this.props.added}
                onAddToBasket={this.handleAddClick}
            />
        ) : (
          <p>Product not found!</p>
        )}
      </div>
    );
  }

  private navAwayMessage = () => {
    return 'Are you sure to leave this page without product added?'
  };
}

const mapStateToProps = (state: IApplicationState) => {
  return {
    basketProducts: state.basket.products,
    loading: state.products.isLoading,
    product: state.products.currentProduct || undefined,
    added: state.basket.products.some(p => state.products.currentProduct
      ? p.id === state.products.currentProduct.id
      : false
    )
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToBasket: (product: IProduct) => dispatch(addToBasket(product)),
    getProduct: (id: string) => dispatch(getProduct(id)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductPage);
