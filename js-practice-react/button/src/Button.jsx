import React, { Component } from 'react';
import styled from 'styled-components';
const ButtonContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Button = styled.button`
  background-color: darkorange;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
`;

class ToggleButton extends Component {
    state = {
        buttonText: 'Show'
    };

    toggleButtonText = () => {
        this.setState(prevState => ({
            buttonText: prevState.buttonText === 'Show' ? 'Hide' : 'Show'
        }));
    };

    render() {
        return (
            <ButtonContainer>
                {this.state.buttonText!=='Show'?<p>Hello, world!</p>:''}
                <Button onClick={this.toggleButtonText}>
                    {this.state.buttonText}
                </Button>
            </ButtonContainer>
        );
    }
}

export default ToggleButton;