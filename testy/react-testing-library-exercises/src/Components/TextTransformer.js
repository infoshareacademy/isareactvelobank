import React, { Component } from 'react';

/**
 *
 * @param {string} text
 */
const transformText = (text) => `__${text.toUpperCase()}__`;

class TextTransformer extends Component {
  state = {
    value: '',
  };

  setValue = (event) =>
    this.setState({
      value: transformText(event.currentTarget.value),
    });

  render() {
    const value =
      this.state.value || (this.props.value && transformText(this.props.value));
    return (
      <div>
        <label htmlFor='text'>Insert text</label>
        <input id='text' type='text' onChange={this.setValue} />

        {value && (
          <>
            <hr />
            <h3>Transformed text:</h3>
            <p>{value}</p>
          </>
        )}
      </div>
    );
  }
}

export default TextTransformer;
