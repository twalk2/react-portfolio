import React, { Component } from "react";
import axios from "axios";

import RichTextEditor from "../forms/rich-text-editor";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: ""
    };
  }

  buildForm = () => {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);

    return formData;
  };

  handleSubmit = event => {
    axios
      .post(
        "https://trevorwalker.devcamp.space/portfolio/portfolio_blogs",
        this.buildForm(),
        { withCredentials: true }
      )
      .then(response => {
        this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog);

        this.setState({
          title: "",
          blog_status: ""
        });
      })
      .catch(error => {
        console.log("handle submit for log error", error);
      });

    event.preventDefault();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
        <div className="two-column">
          <input
            placeholder="Blog Title"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
            type="text"
          />

          <input
            placeholder="Blog Status"
            value={this.state.blog_status}
            name="blog_status"
            onChange={this.handleChange}
            type="text"
          />
        </div>

        <div className="one-column">
          <RichTextEditor />
        </div>

        <button className="btn">Save</button>
      </form>
    );
  }
}
