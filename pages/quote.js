import {
  Collapse,
  Card,
  Tag,
  Checkbox,
  Input,
  Select,
  AutoComplete,
  Icon,
  Divider,
  Avatar,
  Button,
  Tooltip,
  Popconfirm,
  message,
  Form,
  Breadcrumb, 
  Dropdown, 
  Menu,
  Alert, 
  Layout,
  Row,
  Col,
  InputNumber, 
  Radio,
  Table,
} from "antd"
import Link from 'next/link'
const Panel = Collapse.Panel;
const {
  Header, Footer, Sider, Content,
} = Layout;
const Option = Select.Option;
const customCardStyle = {
  marginBottom: 8,
  borderRadius: 4
};
const success = () => {
  message.success("Feedback has been successfully deleted");
};
const error = () => {
  message.error("Unable to delete feedback");
};
const CardExtras = () => (
  <div>
    <Tooltip title="Edit">
      <a>
        <Icon type="edit" />
      </a>
    </Tooltip>
    <Divider type="vertical" />
    <Tooltip title="Copy">
      <a>
        <Icon type="copy" />
      </a>
    </Tooltip>
    <Divider type="vertical" />
    <Popconfirm
      title="Are you sure you want to delete this feedback?"
      placement="topRight"
      onConfirm={success}
      okText="Yes"
      cancelText="No"
      >
      <Tooltip title="Delete">
        <a>
          <Icon type="delete" style={{ color: "red" }} />
        </a>
      </Tooltip>
    </Popconfirm>
  </div>
);
const CalculatorField = (props) => (
  <div style={{ marginBottom: 8}}>
    <h5>{props.label}</h5>
    <Row gutter={16} type="flex" align="top">
      <Col span={20}>
        <Input.Group compact>
          <Input
            style={{ width: "50%" }}
            defaultValue={props.computed}
            disabled
            prefix={props.prefix}
            suffix={props.suffix}
            />
          <Input
            style={{ width: "50%" }}
            prefix={props.prefix}
            suffix={props.suffix}
            />
        </Input.Group>
      </Col>
      <Col span={4}>
        <p>$0.00 {props.value}</p>
      </Col>
    </Row>
  </div>
);
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};
const formLeadtimeItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 10 }
};
const dataSource = [{
  key: '1',
  name: 'really_long_part_name.step',
  config: 'CNC, Aluminum 6061-T6, Media Blasted, Anodized Type II, Gold',
  dwg: 'really_long_part_name_drawing.pdf',
  requirements: '2',
  qty: 30,
  price: '231',
  leadTime: '3 days',
}];
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <Link href="/index"><a>{text}</a></Link>,
}, {
  title: 'Configuration',
  dataIndex: 'config',
  key: 'config',
}, {
  title: 'Drawing',
  dataIndex: 'dwg',
  key: 'dwg',
  render: text => <a><Icon type="paper-clip" />&nbsp;{text}</a>,
}, {
  title: 'Requirements',
  dataIndex: 'requirements',
  key: 'requirements',
  render: text => <Tag color="#FAAD14"><Icon type="check-circle"/>&nbsp;{text}</Tag>,
}, {
  title: 'Quantity',
  dataIndex: 'qty',
  key: 'qty',
  render: text => <InputNumber min={1} defaultValue={text}/>,
}, {
  title: 'Price',
  dataIndex: 'price',
  key: 'price',
 render: text => <InputNumber min={0} step={0.001} defaultValue={text} formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/>,
}, {
  title: 'Lead time',
  dataIndex: 'leadTime',
  key: 'leadTime',
}, {
  title: 'Actions',
  dataIndex: 'actions',
  key: 'actions',
  render: text => <Dropdown overlay={actionMenu} placement="bottomLeft"><Icon type="ellipsis" /></Dropdown>,
}];
const actionMenu = (
  <Menu>
    <Menu.Item>
      <a>Upload revision</a>
    </Menu.Item>
    <Menu.Item>
      <a>Duplicate part</a>
    </Menu.Item>
    <Menu.Item>
      <a>Delete</a>
    </Menu.Item>
  </Menu>
);
export default () => (
  <Layout>
    <Header style={{zIndex: 2, borderBottom: '1px solid #00000015', height: '60px', position: 'fixed', width: '100%', top: 0, backgroundColor: 'white', padding: 0}}>
      <Breadcrumb style={{lineHeight: '60px', float: 'left', marginLeft: 24}}>
        <Breadcrumb.Item><a><Icon type="home" /> Admin Dashboard</a></Breadcrumb.Item>
        <Breadcrumb.Item><a>Quote ID</a></Breadcrumb.Item>
        <Breadcrumb.Item><Link href="/builderQuote"><a>Link to Customer Quote</a></Link></Breadcrumb.Item>
      </Breadcrumb>
      <Button type="primary" style={{float: 'right', marginRight: 8, marginTop: 14}}>Save and release</Button>
      <Button style={{float: 'right', marginRight: 8, marginTop: 14}}>Save</Button>
      <p style={{float: 'right', lineHeight: '60px', marginRight: 8}}>Last modified 1 day ago by <a>Firstname Lastname</a></p>
    </Header>
    <Content style={{marginTop: 60, backgroundColor: 'grey-2'}}>
      <div style={{width: 'auto', backgroundColor: '#ffffff85', borderBottom: '1px solid #00000015'}}>
        <Menu mode="horizontal" defaultSelectedKeys="overview" style={{marginLeft: 24, backgroundColor: '#ffffff00'}}>
          <Menu.Item key="overview">Project Overview</Menu.Item>
          <Menu.Item key="bom">BOM</Menu.Item>
          <Menu.Item key="quotes">Quotes</Menu.Item>
          <Menu.Item key="logistics">Billing & Shipping</Menu.Item>
          <Menu.Item key="history">History</Menu.Item>
        </Menu>
      </div>
      <div style={{padding: 24}}>
        <Row type="flex" justify="start" style={{backgroundColor: 'white', border: '1px solid #00000015', borderRadius: 4, padding: 24}}>   
          <Col span={8}>
            <table style={{marginRight: 48, lineHeight: '2em'}}>
              <tr>
                <th>Name:</th>
                <td>Dustin Newcomb</td>
              </tr>
              <tr>
                <th>E-mail:</th>
                <td><a>email@domain.com</a></td>
              </tr>
              <tr>
                <th>Phone #:</th>
                <td>(888) 867-5309</td>
              </tr>
              <tr>
                <th>Company:</th>
                <td>ACME Corporation</td>
              </tr>
              <br/>
              <tr>
                <th>Status:</th>
                <td><Tag color="orange">Requested</Tag></td>
              </tr>
              <tr>
                <th style={{paddingRight: 8}}>Sales DRI:</th>
                <td><a>Nikki Shuffler</a><Divider type="vertical"/><a>Reassign</a></td>
              </tr>
              <tr>
                <th>Mfg. DRI:</th>
                <td><a>Johanna Franklin</a><Divider type="vertical"/><a>Reassign</a></td>
              </tr>
              <tr>
                <th>Priority:</th>
                <td>
                  <Select defaultValue="urgent">
                    <Select.Option key="veryurgent"><Tag color="red">Very Urgent</Tag></Select.Option>
                    <Select.Option key="urgent"><Tag color="orange">Urgent</Tag></Select.Option>
                    <Select.Option key="low"><Tag color="blue">Normal</Tag></Select.Option>
                  </Select>
                </td>
              </tr>
            </table>
          </Col>
          <Col span={16}>
            <h3>Project requirements</h3>
            <Input.TextArea autosize rows={8} placeholder="Additional project requirements and information goes here" style={{marginBottom: 24}}/>
            <Button type="primary" style={{float: 'right'}}>Save</Button>
          </Col>        
        </Row>
      </div>
      <div style={{margin: '0px 24px 24px 24px'}}>
        <Table style={{backgroundColor: 'white'}} bordered rowSelection={{}} title={() => <Button type="primary">Upload files</Button>} dataSource={dataSource} columns={columns}/>
      </div>
    </Content>
  </Layout>
)
