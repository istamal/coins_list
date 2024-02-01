import React from "react";
import { AxisOptions, Chart } from "react-charts";

import "./Drawer.css";
import Table from "../Table/Table";

export type DailyStars = {
    id: string,
    provider: string,
    amount: number,
    currency: string,
    meta: null,
    status: string,
    type: string,
    plan_id: null,
    user_id: string,
    referral_id: null,
    created_at: string,
    external_id: null
}
  
export type Series = {
    label: string,
    data: DailyStars[]
};

type DrawerProps = {
    data: Array<Series>;
    onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ data, onClose }) => {
    const primaryAxis = React.useMemo(
      (): AxisOptions<DailyStars> => ({
        getValue: datum => new Date(datum.created_at),
      }),
      []
    )
  
    const secondaryAxes = React.useMemo(
      (): AxisOptions<DailyStars>[] => [
        {
          getValue: datum => datum.amount,
          stacked: true,
        },
      ],
      []
    )
  
    return (
        <div className="drawer">
            <button onClick={onClose}>Close</button>
            <div className="chart">
                <Chart
                    options={{
                        initialWidth: 400,
                        initialHeight: 200,
                        data,
                        primaryAxis,
                        secondaryAxes,
                        dark: true,
                    }}
                />
            </div>
            <table className="table">
            <tr className="table__header">
                <th>Тип</th>
                <th>Сумма</th>
                <th>Дата</th>
            </tr>
            {data[0].data.length && data[0].data.map((person: DailyStars) => (
                <tr key={person?.id}>
                    <td>{person?.type === "WRITE_OFF" ? "Списание" : "Пополнение"}</td>
                    <td className={person.status.toLocaleLowerCase()}>{person?.amount}</td>
                    <td>{person?.created_at}</td>
                </tr>
            ))}
        </table>
        </div>
    )
  }

export default Drawer;
  