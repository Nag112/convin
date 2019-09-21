import React, { Component, Fragment } from "react";
import { Pie, Line, HorizontalBar } from "react-chartjs-2";
export default class Graphs extends Component {
  UNSAFE_componentWillMount() {
    if (localStorage.getItem("domain")) {
    } else this.props.history.push("/");
  }
  state = {
    dataSet1: {
      labels: [
        "Week-01",
        "Week-02",
        "Week-03",
        "Week-04",
        "Week-05",
        "Week-06",
        "Week-07",
        "Week-08",
        "Week-09",
        "Week-10",
        "Week-11",
        "Week-12",
        "Week-13",
        "Week-14",
        "Week-15",
        "Week-16",
        "Week-17",
        "Week-18",
        "Week-19",
        "Week-20",
        "Week-21"
      ],
      datasets: [
        {
          label: "Weekly percentage",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#192A56",
          borderColor: "#192A56",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#192A56",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#192A56",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          //  xAxisID:'Amount in Rupees',
          // yAxisID:'Months of 2019',
          data: [100, 95, 100, 100, 90, 80, 90, 85, 95, 100, 100]
        }
      ]
    },
    dataSet2: {
      datasets: [
        {
          data: [25, 45, 30],
          backgroundColor: ["Pink", "Red", "Blue"],
          hoverBackgroundColor: ["Pink", "Red", "Blue"]
        }
      ],
      labels: [
        // These labels appear in the legend and in the tooltips when hovering different arcs
        "Donations",
        "OTRs",
        "subscriptions"
      ]
    }, //this.state.dataSet1
    dataSet3: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }
  };
  dataGraph1() {
    return {
      labels: [
        "Week-01",
        "Week-02",
        "Week-03",
        "Week-04",
        "Week-05",
        "Week-06",
        "Week-07",
        "Week-08",
        "Week-09",
        "Week-10",
        "Week-11",
        "Week-12",
        "Week-13",
        "Week-14",
        "Week-15",
        "Week-16",
        "Week-17",
        "Week-18",
        "Week-19",
        "Week-20",
        "Week-21"
      ],
      datasets: [
        {
          label: "Weekly percentage",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#192A56",
          borderColor: "#192A56",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#192A56",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#192A56",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          //  xAxisID:'Percentage',
          // yAxisID:'weeks of 2019',
          data: this.state.dataSet1
        }
      ]
    };
  }
  dataGraph2() {
    return;
  }
  dataGraph3() {
    return {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.state.dataSet3
        }
      ]
    };
  }
  handleClick=e=>
  {
    e.preventDefault();  
    localStorage.clear();
    this.props.history.push('/');
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <button onClick={this.handleClick} className="btn btn-success ml-auto">
            <i>
              <u>Signout</u>
            </i>
          </button>{" "}
        </div>
        <div className="container">
          {" "}
          <Line data={this.state.dataSet1} />
        </div>
        <div className="container">
          <Pie data={this.state.dataSet2} />
        </div>
        <div className="container">
          <HorizontalBar data={this.state.dataSet3} />
        </div>
      </Fragment>
    );
  }
}
