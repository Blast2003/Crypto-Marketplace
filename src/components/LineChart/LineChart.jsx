import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historyCoinData}) => {
    const [data, setData] = useState([
        ["Date", "Prices"]
    ])

    useEffect(() =>{
        let dataCopy = [["Date", "Prices"]];     
        if(historyCoinData.prices){
            historyCoinData.prices.map((item) =>{ // 10/05/2024 => 10/05
                dataCopy.push([ `${ new Date(item[0]).toLocaleDateString().slice(0, -5) }`, item[1] ])
            })
        }

        setData(dataCopy);
    }, [historyCoinData])

  return (
    <Chart 
        chartType='LineChart'
        data={data}
        width="800px"
        height="400px"
        legendToggle
    />
  )
}

export default LineChart