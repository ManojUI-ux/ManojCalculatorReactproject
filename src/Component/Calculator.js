import React, { Component } from "react";
import "./Calculator.css";

export default class Calculator extends Component {
  state = {
    themeIndex: 0,
    themes: [
      "theme-dark-mode",
      "theme-modern-minimalist",
      "theme-classic-retro",
      "theme-soft-pastels",
      "theme-monochrome-elegance",
    ],
    inputValue: "",
  };

  handleThemeChange = () => {
    this.setState((prevState) => ({
      themeIndex: (prevState.themeIndex + 1) % prevState.themes.length,
    }));
  };
  handleButtonClick = (value) => {
    const {inputValue} = this.state;

    switch(value){
        case "AC":
        this.setState({ inputValue: "" });
        break;
      case "DEL":
        this.setState({ inputValue: inputValue.slice(0, -1) });
        break;
      case "=":
        try {
          this.setState({ inputValue: eval(inputValue).toString() });
        } catch (error) {
          this.setState({ inputValue: "Error" });
        }
        break;

      default:
        this.setState({ inputValue: inputValue + value });
        break;
    }
  };
  render() {
    const { themes, themeIndex, inputValue } = this.state;
    const currentTheme = themes[themeIndex];
    return (
      <>
        <div className={`main ${currentTheme}`} >
          <div className="main">
            <div className="main11">
              <p>CALCULATOR</p>
              <div className="input">
                <input type="text" className="input" value={inputValue} />
              </div>
              <div className="main1">
                <button className="Button" onClick={this.handleThemeChange}>☀️</button>
                <button className="Button" onClick={() => this.handleButtonClick("AC")}>AC</button>
                <button className="Button" onClick={() => this.handleButtonClick("DEL")}>DEL</button>
                <button className="Button bt1" onClick={() => this.handleButtonClick("/")}>/</button>
              </div>
              <div className="main1">
                <button className="Button" onClick={() => this.handleButtonClick("7")}>7</button>
                <button className="Button" onClick={() => this.handleButtonClick("8")}>8</button>
                <button className="Button"onClick={() => this.handleButtonClick("9")}>9</button>
                <button className="Button bt1" onClick={() => this.handleButtonClick("*")}>*</button>
              </div>
              <div className="main1">
                <button className="Button" onClick={() => this.handleButtonClick("4")}>4</button>
                <button className="Button" onClick={() => this.handleButtonClick("5")}>5</button>
                <button className="Button" onClick={() => this.handleButtonClick("6")}>6</button>
                <button className="Button bt1" onClick={() => this.handleButtonClick("-")}>-</button>
              </div>
              <div className="main1">
                <button className="Button" onClick={() => this.handleButtonClick("1")}>1</button>
                <button className="Button" onClick={() => this.handleButtonClick("2")}>2</button>
                <button className="Button" onClick={() => this.handleButtonClick("3")}>3</button>
                <button className="Button bt1" onClick={() => this.handleButtonClick("+")}>+</button>
              </div>
              <div className="main1">
                <button className="Button" onClick={() => this.handleButtonClick("%")}>%</button>
                <button className="Button" onClick={() => this.handleButtonClick("0")}>0</button>
                <button className="Button" onClick={() => this.handleButtonClick(".")}>.</button>
                <button className="Button bt1" onClick={() => this.handleButtonClick("=")}>=</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
