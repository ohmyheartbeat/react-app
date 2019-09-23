import React, { PureComponent } from 'react';
import { Table, Button } from "antd";
import { connect } from "dva";
import { Bind } from "lodash-decorators";


@connect(({taosModel})=>({
  taosModel,
}))
export default class Taos extends PureComponent{

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'taosModel/fetchDatabaseInfo',
      payload: {

      }
    }).then(res=>{
      console.log(res);
    })
  }

  @Bind()
  queryDatabaseInfo(){
    const { dispatch } = this.props;
    dispatch({
      type: 'taosModel/fetchDatabaseInfo',
      payload: {

      }
    }).then(res=>{
      console.log(res);
    })
  }

  render() {
    const { taosModel: {databaseInfo=[]} } = this.props;
    const columns = [
      {
        title: '表名',
        dataIndex: 'db_name',
        width: 80,
      }, {
        title: '创建时间',
        dataIndex: 'create_time',
        width: 160,
      }, {
        title: '表的数量',
        dataIndex: 'tables',
        width: 80,
      }, {
        title: '状态',
        dataIndex: 'status',
        width: 80,
      },
    ];
    return (
      <div style={{width: '60%'}}>
        <Table
          bordered
          dataSource={databaseInfo}
          columns={columns}
        />
        <Button type="primary" title="你好" onClick={this.queryDatabaseInfo}>
          点击
        </Button>
      </div>
    );
  }
}