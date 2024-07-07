import {
  PageContainer,
} from '@ant-design/pro-components';
import '@umijs/max';
import React, {useEffect, useState} from 'react';
import ReactECharts from 'echarts-for-react';
import {listTopInvokeInterfaceInfoUsingGet} from "@/services/xhapi-backend/analysisController";

const InterfaceInfoAnalysis: React.FC = () => {
  //存储数据的状态
  const [data, setData] = useState([]);
  useEffect(() => {
    // 从远程获取数据
    try {
      listTopInvokeInterfaceInfoUsingGet().then(res => {
        if (res.data) {
          setData(res.data);
        }
      })
    } catch (e: any) {
    }
  }, [])

  const chartData = data.map(item => {
    return {
      value: item.totalNum,
      name: item.name,
    }
  })

  //图表配置
  const option = {
    title: {
      text: '调用次数最多的接口TOP5',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: chartData,
        label: {
          show: true,
          formatter(param) {
            return param.name + ' (' + param.percent + '%)';
          }
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  return (
    <PageContainer>
      <ReactECharts option={option}/>
    </PageContainer>
  );
};
export default InterfaceInfoAnalysis;
