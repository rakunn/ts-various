import * as React from "react";

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

  public render() {
    return (
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>
          If you enter your details we'll get back to you as soon as
          we can.
        </p>
        <ContactUs />
      </div>
    );
  }
}

export default ContactUsPage;