import React from 'react';
import { Picker,List } from "antd-mobile";
import { district } from "antd-mobile-demo-data"
const province = [
  {
    "value":"110000",
    "label":"北京市"
  },
  {
    "value":"120000",
    "label":"天津"
  },
  {
    "value":"3200000000",
    "label":"江苏"
  },
  {
    "value":"34000000000",
    "label":"安徽"
  },
  {
    "value":"310000000",
    "label":"湖北"
  }
  ]
  const cities = [
    {
      value:"3200000000",
      list:[{value:"32010000",label:"南京",
      children:[{value:"32011000",label:"鼓楼区"}
    ,{value:"32012000",label:"玄武区"},
    {value:"32013000",label:"秦淮区"},{value:"32014000",label:"建邺区"}
  ]},{value:"32020000",label:"苏州"},
      {value:"32030000",label:"无锡"},{value:"32040000",label:"常州"},
      {value:"32050000",label:"镇江"},{value:"32060000",label:"扬州"},]
    }
  ]
export default class Index extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        pickerValue:""
      }
    }
    componentDidMount(){
     const index =  province.findIndex(item=>item.value === cities[0].value);
      province[index].children = cities[0].list
    }
    render(){
       return(
        <div>
        <Picker
          title="选择地区"
          extra="请选择(可选)"
          data={province}
          value={this.state.pickerValue}
          onChange={v => this.setState({ pickerValue: v })}
          onOk={v => this.setState({ pickerValue: v })}
        >
          <List.Item key={1}>Customized children</List.Item>
        </Picker>
    </div>
       )
    }
}