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
  Rate
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
const SelectLeadTime = () => (
  <Select defaultValue="5">
    <Select.OptGroup label="Domestic">
      <Select.Option value="3" disabled>3 days</Select.Option>
      <Select.Option value="5">5 days</Select.Option>
      <Select.Option value="7">7 days</Select.Option>
    </Select.OptGroup>
    <Select.OptGroup label="Overseas">
      <Select.Option value="7intl">7 days</Select.Option>
      <Select.Option value="12intl">12 days</Select.Option>
    </Select.OptGroup>
  </Select>
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
  unitcost: '$231.00',
  subtotal: '$6930.00',
  leadTime: 2,
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
  render: text => <Tag color="#16BC9C"><Icon type="check-circle"/>&nbsp;{text}</Tag>,
}, {
  title: 'Quantity',
  dataIndex: 'qty',
  key: 'qty',
  render: text => <InputNumber min={1} defaultValue={text}/>,
}, {
  title: 'Unit cost',
  dataIndex: 'unitcost',
  key: 'unitcost',
}, {
  title: 'Subtotal',
  dataIndex: 'subtotal',
  key: 'subtotal',
},{
  title: 'Desired lead time',
  dataIndex: 'leadTime',
  key: 'leadTime',
  render: text => <SelectLeadTime/>
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
      <Row type="flex" justify="space-between">
        <Col>
          <Breadcrumb style={{lineHeight: '60px', float: 'left', marginLeft: 24}}>
            <Breadcrumb.Item><a><Icon type="left" /> All custom quotes</a></Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col>
          <h3 style={{float: 'left', marginRight: 24}}>Quote name or default ID</h3>
          <Icon type="star" />
          <Divider type="vertical"/>
          <Icon type="setting" />
          <Divider type="vertical"/>
          <Icon type="notification" />
        </Col> 
        <Col>
          <Button type="primary" style={{float: 'right', marginRight: 8, marginTop: 14}}>Purchase quote</Button>
          <Button style={{float: 'right', marginRight: 8, marginTop: 14}}>Share</Button>
          <p style={{float: 'right', lineHeight: '60px', marginRight: 8}}>Shared with 3</p>
        </Col>
      </Row>
    </Header>
    <Content style={{marginTop: 60, backgroundColor: 'grey-2'}}>
      <div style={{width: 'auto', backgroundColor: '#ffffff85', borderBottom: '1px solid #00000015'}}>
        <Menu mode="horizontal" defaultSelectedKeys="bom" style={{marginLeft: 24, backgroundColor: '#ffffff00'}}>
          <Menu.Item key="overview">Project Overview</Menu.Item>
          <Menu.Item key="bom">Files</Menu.Item>
          <Menu.Item key="quotes">Quotes</Menu.Item>
          <Menu.Item key="logistics">Billing & Shipping</Menu.Item>
          <Menu.Item key="history">History</Menu.Item>
        </Menu>
      </div>
      <Alert style={{margin: '24px 24px 0px 24px', fontSize: '16px'}} message="Your quote is ready to be purchased" type="success" />
      <div style={{margin: 24}}>
        <Table style={{backgroundColor: 'white'}}bordered rowSelection={{}} title={() => <Button type="primary">Upload files</Button>} dataSource={dataSource} columns={columns}/>
      </div>
    </Content>
  </Layout>
)
