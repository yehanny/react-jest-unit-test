import React from "react";
import { object, func } from "prop-types";

export class ContactForm extends React.Component {
  static defaultProps = {
    data: {
      name: "",
      email: "",
      option: undefined,
      select: undefined,
      message: "Test message",
      terms: false,
    },
  };

  static propTypes = {
    onChange: func.isRequired,
    onSubmit: func.isRequired,
    data: object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  /**
   * When form is submitted forward contact data to parent
   * @param {event} DOMEvent
   */
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.props.data);
  }

  fieldChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
  }

  isSelected(key, option) {
    return this.props.data[key] === option;
  }

  options = [
    { id: 1, label: "I have question about my membership" },
    { id: 2, label: "I have technical question" },
    { id: 3, label: "I would like to change membership" },
    { id: 4, label: "Other question" },
  ];

  render() {
    let data = this.props.data;

    return (
      <form onSubmit={this.props.onSubmit}>
        <h3>Contact Form</h3>

        <div className="form-group">
          <label className="form-label">Your Name:</label>
          <input name="name" className="form-control" onChange={(e) => this.props.onChange(e)} value={data.name} />
        </div>

        <div className="form-group">
          <label className="form-label">Your Best Email:</label>
          <input name="email" className="form-control" onChange={(e) => this.props.onChange(e)} value={data.email} />
        </div>

        <label className="form-label">Select your membership option:</label>
        <div className="form-group row">
          <label className="form-label col-xs-4">
            <input type="radio" name="option" value="A" checked={data.option ? data.option : undefined} onChange={(e) => this.props.onChange(e)} /> Option A
          </label>
          <label className="form-label col-xs-4">
            <input type="radio" name="option" value="B" checked={data.option} onChange={(e) => this.props.onChange(e)} /> Option B
          </label>
          <label className="form-label col-xs-4">
            <input type="radio" name="option" value="C" checked={data.option} onChange={(e) => this.props.onChange(e)} /> Option C
          </label>
        </div>

        <hr />

        <div className="form-group">
          <label className="form-label">What can we help you with:</label>
          <select className="form-control" name="select" value={data.select} onChange={(e) => this.props.onChange(e)}>
            {/* <option value={data.select}>I have question about my membership</option> */}
            {this.options.map((value) => (
              <option key={value.id} value={value.id}>
                {value.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message:</label>
          <textarea name="message" rows="10" placeholder="Please type your question here" className="form-control" onChange={(e) => this.props.onChange(e)} value={data.message} />
        </div>

        <div className="form-group">
          <label className="form-label">
            {" "}
            <input type="checkbox" name="terms" onChange={(e) => this.props.onChange(e)} value={data.terms} /> I agree to terms and conditions{" "}
          </label>
        </div>

        <input type="submit" value="Send" className="contactform-submit" />
      </form>
    );
  }
}
