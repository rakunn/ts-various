import * as React from 'react';
import {Prompt, RouteComponentProps } from 'react-router-dom';
import { IProduct, products } from './ProductsData';

type Props = RouteComponentProps<{id: string}>;

interface IState {
  product?: IProduct;
  added: boolean;
}

class ProductPage extends React.Component<Props, IState> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      added: false,
    }
  }

  public componentDidMount() {
    if (this.props.match.params.id) {
      const id: number = parseInt(this.props.match.params.id, 10);
      const product = products.filter(p => p.id === id)[0];
      this.setState({ product });
    }
  }

  public render() {
    const product = this.state.product;
    return (
      <div className="page-container">
        <Prompt when={!this.state.added} message={this.navAwayMessage} />
        {product ? (
          <React.Fragment>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p className="product-price">
              {new Intl.NumberFormat("en-US", {
                currency: "USD",
                style: "currency"
              }).format(product.price)}
            </p>
            {!this.state.added && (
              <button onClick={this.handleAddClick}>
                Add to basket
              </button>
            )}
          </React.Fragment>
        ) : (
          <p>Product not found!</p>
        )}
      </div>
    );
  }

  private navAwayMessage = () => {
    return 'Are you sure to leave this page without product added?'
  };

  private handleAddClick = () => {
    this.setState({ added: true });
  };
}

export default ProductPage;
