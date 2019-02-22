import * as React from "react";

import { IValues, ISubmitResult } from "./Form";
import ContactUs from './ContactUs';

interface IState {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

class ContactUsPage extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      reason: "",
      notes: "",
    };
  }

  private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {

    const wait = (ms: number): Promise<void> => {
      return new Promise(resolve => setTimeout(resolve, ms));
    };

    await wait(1000); // simulate asynchronous web API call

    return {
      success: true
    };
  };

  public render() {
    return (
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>
          If you enter your details we'll get back to you as soon as
          we can.
        </p>
        <ContactUs onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default ContactUsPage;