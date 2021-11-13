import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValues = props.financeData.map((data) => data.value); // gets just the values from chartDataPoints so we can plug into Math.max since Math.max takes only numbers not objects
  const maximum = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.financeData.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={maximum}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
