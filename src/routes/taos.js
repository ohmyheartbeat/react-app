import React, { PureComponent } from 'react';
import { Table } from "antd";
import { connect} from "dva";

@connect(({taosModel})=>({
  taosModel,
}))
export default class Taos extends PureComponent{
  render() {
    const { taosModel: {databaseInfo=[]} } = this.props;
    const columns = [
      {
        title: '表名',
        dataIndex: 'db_name',
      }, {
        title: '创建时间',
        dataIndex: 'create_time',
      }, {
        title: '表的数量',
        dataIndex: 'tables',
      }, {
        title: '状态',
        dataIndex: 'status',
      },
    ];
    return (
      <Table
        dataSource={databaseInfo}
        columns={columns}
      />
    );
  }
}