import React from "react";
import { object, func } from "prop-types";

export class ContactForm extends React.Component {
  static defaultProps = {
    data: {
      name: "",
      email: "",
      option: 1,
      select: "",
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
          <input name="name" className="form-control" onChange={(value) => this.props.onChange(value)} value={data.name} />
        </div>

        <div className="form-group">
          <label className="form-label">Your Best Email:</label>
          <input name="email" className="form-control" onChange={(value) => this.props.onChange(value)} value={data.email} />
        </div>

        <label className="form-label">Select your membership option:</label>
        <div className="form-group row">
          <label className="form-label col-xs-4">
            <input type="radio" name="option" value="A" checked={data.checked} /> Option A
          </label>
          <label className="form-label col-xs-4">
            <input type="radio" name="option" value="B" checked={data.checked} /> Option B
          </label>
          <label className="form-label col-xs-4">
            <input type="radio" name="option" value="C" checked={data.checked} /> Option C
          </label>
        </div>

        <hr />

        <div className="form-group">
          <label className="form-label">What can we help you with:</label>
          {/* <Select {...this.options} value={this.options.filter((option) => option.label === "Some label")} onChange={(value) => this.props.onChange(value)} onBlur={() => data.input.onBlur(data.input.value)} options={data.options} placeholder={data.placeholder} /> */}
          <select className="form-control" name="select" onChange={(value) => this.props.onChange(value)} onBlur={() => this.props.onBlur(data.input.value)}>
            <option value={data.select}>I have question about my membership</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message:</label>
          <textarea name="message" rows="10" placeholder="Please type your question here" className="form-control" onChange={(value) => this.props.onChange(value)} value={data.message} />
        </div>

        <div className="form-group">
          <label className="form-label">
            {" "}
            <input type="checkbox" name="terms" value={data.terms} /> I agree to terms and conditions{" "}
          </label>
        </div>

        <input type="submit" value="Send" className="contactform-submit" />
      </form>
    );
  }
}
