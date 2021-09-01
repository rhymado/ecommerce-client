import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import { countUpAction, countDownAction } from "../redux/actionCreators/count";

class Redux extends Component {
  //   onPlusHandler = () => {
  //     // this.props.dispatch(countUpAction());
  //     this.props.countUp();
  //   };
  //   onMinusHandler = () => {
  //     // this.props.dispatch(countDownAction());
  //     this.props.countDown();
  //   };
  render() {
    const { count, countDown, countUp } = this.props;
    // console.log(count);
    return (
      <>
        <Header title="Redux" />
        <main className="mt-2 mx-1 rounded container-operator">
          <section className="d-flex justify-content-around align-items-center">
            <div className="btn operator minus" onClick={countDown}>
              -
            </div>
            <div className="number">{count.number}</div>
            <div className="btn operator plus" onClick={countUp}>
              +
            </div>
          </section>
        </main>
      </>
    );
  }
}

const mapStateToProps = ({ count }) => {
  return {
    count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countUp: () => {
      dispatch(countUpAction());
    },
    countDown: () => {
      dispatch(countDownAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
