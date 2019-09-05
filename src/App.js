import React, { Component } from 'react';
import './App.css';
// import Expanse from './Expanse';
// import Incomes from './Incomes';
// import moment from 'moment';
// import styled from 'styled-components';

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     date: moment(),
  //     navSelected: 'expanse'
  //   }
  // }

  // handleAddDay = () => {
  //   this.setState({ date: this.state.date.add(1, 'day') });
  // };

  // handleSubtractDay = () => {
  //   this.setState({ date: this.state.date.subtract(1, 'day') });
  // };

  // handleNavClick = event => {
  //   this.setState({ navSelected: event.target.getAttribute('name') });
  // };

  render() {
    // const { date, navSelected } = this.state
    return (
      <section>
        <header>
          <h1>Budget calculation</h1>
          {/* <div className="dataLine">
            <p>{date.format('DD.MM.YYYY')}</p>
            <DateButton onClick={this.handleSubtractDay}>-</DateButton>
            <DateButton onClick={this.handleAddDay}>+</DateButton>
          </div>
          <p>На сегодня: 1000 грн.</p> */}
        </header>
        {/* <main>
          <Nav>
            <Link
              name="expanse"
              onClick={this.handleNavClick}
              selected={navSelected === 'expanse'}
            >
              Расходы сегодня
            </Link>

            <Link
              name="incomes"
              onClick={this.handleNavClick}
              selected={navSelected === 'incomes'}
            >
              Доходы
            </Link>
          </Nav>

          {navSelected === 'expanse' ? (
            <Expanse onSubmit={this.handleSubmitTransaction} />
          ) : (
              <Incomes onSubmit={this.handleSubmitTransaction} />
            )}

          <Table>
            <tbody>

            </tbody>
          </Table>
        </main> */}
      </section>
    );
  }
}

// const DateButton = styled.button`
//   color: white;
//   border: 1px solid white;
//   border-radius: 50%;
//   background-color: transparent;
//   width: 32px;
//   height: 32px;
//   margin: 3px;
//   cursor: pointer;
//   text-align: center;
// `;

// const Link = styled.span`
//   font-family: 'Marmelad';
//   cursor: pointer;
//   color: white;
//   margin: 0 8px;
//   border-bottom: ${({ selected }) =>
//     selected ? '2px solid white' : 'none'};
// `;

// const Nav = styled.nav`
//   display: flex;
//   justify-content: center;
//   font-size: 25px;
//   padding: 40px 0 15px;
// `;

// const Table = styled.table`
//   width: 450px;
//   text-align: right;
//   padding-top: 30px;
//   margin: 0 auto;
// `;

export default App;
