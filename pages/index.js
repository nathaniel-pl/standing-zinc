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
  Radio
} from "antd";
import Link from 'next/link'
import React from 'react'
const Panel = Collapse.Panel;
const {
  Header, Footer, Sider, Content,
} = Layout;
const Option = Select.Option;
const customCardStyle = {
  marginBottom: 8,
  borderRadius: 4
};
const issueTypes = [
  "Thin wall",
  "Unreachable",
  "Cosmetic threads",
  "Sharp internal corner",
  "Multiple bodies",
  "Drawing discrepancy",
  "Stock size selection",
  "Warpage",
  "Tight tolerance",
  "Engraving",
  "Uncertain lead time]",
  "Adding fillets",
  "Removing fillets",
  "Blending fillets",
  "Drill point",
  "Fillets increased",
  "Quote for machining only",
  "No drawing provided",
  "Mating part required",
  "GD&T",
  "Stock thickness"
];
const dfmCardDeleteSuccess = () => {
  message.success("Feedback has been successfully deleted");
};
const error = () => {
  message.error("Unable to delete feedback");
};
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};
const formLeadtimeItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 10 }
};

class DFMCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      autoDFM: false,
      severity: 'warning', 
      issue: [],
      
    };
  }

  render() {
      const CardExtras = () => (
      <div>
        <Tooltip title="Edit">
          <a>
            <Icon type="edit" onClick={() => {this.setState({editing: !this.state.editing})}}/>
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
          onConfirm={dfmCardDeleteSuccess}
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
    const SelectRestrictions = () => (
      <React.Fragment>
        <Select mode="multiple">
          <Select.OptGroup label="Materials">
            <Select.Option key="requestedMaterial">
              Requested Material
            </Select.Option>
            <Select.Option key="metals">Metals</Select.Option>
            <Select.Option key="hardMetals">Hard Metals</Select.Option>
            <Select.Option key="softMetals">Soft Metals</Select.Option>
            <Select.Option key="plastics">Plastics</Select.Option>
            <Select.Option key="rubbers">Soft Plastics</Select.Option>
          </Select.OptGroup>
          <Select.OptGroup label="Processes">
            <Select.Option key="3dp">3DP</Select.Option>
            <Select.Option key="cncMill">CNC Milling</Select.Option>
            <Select.Option key="cncLathe">CNC Lathe</Select.Option>
            <Select.Option key="im">Injection Molding</Select.Option>
            <Select.Option key="sheet">Sheet Metal</Select.Option>
            <Select.Option key="urethane">Urethane Casting</Select.Option>
          </Select.OptGroup>
        </Select>
      </React.Fragment>
    );
    const InputDFM = () => (
      <div>
        <Input.Group compact>
          <Select defaultValue="warning">
            <Option value="warning">Warning</Option>
            <Option value="revision">Required</Option>
            <Option value="cost">Cost Driver</Option>
            <Option value="recommendation">Recommendation</Option>
            <Option value="archive">Archive</Option>
          </Select>
          <AutoComplete
            placeholder="Issue"
            dataSource={issueTypes}
            filterOption="true"
            allowClear="true"
            />
        </Input.Group>
      </div>
    );
    return (
      <Card
        title={
          <React.Fragment>
            {
              this.state.editing ? 
                <InputDFM/> : 
              (<div>
                  <Tag color="orange">Warning</Tag>
                  <Tag>Auto DFM</Tag>
                  <Tag>Pending</Tag>
                  <Tag>Draft</Tag>
                </div>)
            }
          </React.Fragment>
        }
        extra={      <div>
            <Tooltip title="Edit">
              <a>
                <Icon type="edit" onClick={() => {this.setState({editing: !this.state.editing})}}/>
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
              onConfirm={dfmCardDeleteSuccess}
              okText="Yes"
              cancelText="No"
              >
              <Tooltip title="Delete">
                <a>
                  <Icon type="delete" style={{ color: "red" }} />
                </a>
              </Tooltip>
            </Popconfirm>
          </div>}
        style={customCardStyle}
        hoverable="true"
        >
        <h3>Thin wall</h3>
        <p>
          This area is less than our minimum thickness for metals (0.5mm) and
          it may not hold up to machining. Please modify the model so all
          features are above this minimum if this is a concern.
        </p>
        <span style={{ paddingRight: 8, color: "#00000065" }}>
          Restricted to:
        </span>
        <Tag color="red">Soft metals</Tag>
        <Tag color="red">Plastics</Tag>
      </Card>
    );
    
  }
}

export default class extends React.Component {
  constructor() {
    super();
    this.state = {editing: false};
  }
  render() {
    const CardExtras = () => (
      <div>
        <Tooltip title="Edit">
          <a>
            <Icon type="edit" onClick={() => {this.setState({editing: !this.state.editing})}}/>
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
          onConfirm={dfmCardDeleteSuccess}
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
    const SelectRestrictions = () => (
      <React.Fragment>
        <Select mode="multiple">
          <Select.OptGroup label="Materials">
            <Select.Option key="requestedMaterial">
              Requested Material
            </Select.Option>
            <Select.Option key="metals">Metals</Select.Option>
            <Select.Option key="hardMetals">Hard Metals</Select.Option>
            <Select.Option key="softMetals">Soft Metals</Select.Option>
            <Select.Option key="plastics">Plastics</Select.Option>
            <Select.Option key="rubbers">Soft Plastics</Select.Option>
          </Select.OptGroup>
          <Select.OptGroup label="Processes">
            <Select.Option key="3dp">3DP</Select.Option>
            <Select.Option key="cncMill">CNC Milling</Select.Option>
            <Select.Option key="cncLathe">CNC Lathe</Select.Option>
            <Select.Option key="im">Injection Molding</Select.Option>
            <Select.Option key="sheet">Sheet Metal</Select.Option>
            <Select.Option key="urethane">Urethane Casting</Select.Option>
          </Select.OptGroup>
        </Select>
      </React.Fragment>
    );
    const InputDFM = () => (
      <div>
        <Input.Group compact>
          <Select defaultValue="warning">
            <Option value="warning">Warning</Option>
            <Option value="revision">Required</Option>
            <Option value="cost">Cost Driver</Option>
            <Option value="recommendation">Recommendation</Option>
            <Option value="archive">Archive</Option>
          </Select>
          <AutoComplete
            placeholder="Issue"
            dataSource={issueTypes}
            filterOption="true"
            allowClear="true"
            />
        </Input.Group>
      </div>
    );
    const EditDFMCard = (props) => (
      <Card
        title={<InputDFM/>}
        extra={<CardExtras />}
        style={customCardStyle}
        hoverable="true"
        >
        <Input.TextArea
          autosize="true"
          style={{ marginBottom: 8, minHeight: 60 }}
          />
        <Form formLayout="inline">
          <Form.Item label="Restrict to" {...formItemLayout} colon>
            <SelectRestrictions />
          </Form.Item>
        </Form>
        <Button type="primary" style={{ float: "right" }}>
          Save
        </Button>
      </Card>
    );
    { /* This is the card we are working on */ }
    const DFMCardOld = (props) => (
      <Card
        title={
          <React.Fragment>
            {
              this.state.editing ? 
                <InputDFM/> : 
              (<div>
                  <Tag color="orange">Warning</Tag>
                  <Tag>Auto DFM</Tag>
                  <Tag>Pending</Tag>
                  <Tag>Draft</Tag>
                </div>)
            }
          </React.Fragment>
        }
        extra={      <div>
            <Tooltip title="Edit">
              <a>
                <Icon type="edit" onClick={() => {this.setState({editing: !this.state.editing})}}/>
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
              onConfirm={dfmCardDeleteSuccess}
              okText="Yes"
              cancelText="No"
              >
              <Tooltip title="Delete">
                <a>
                  <Icon type="delete" style={{ color: "red" }} />
                </a>
              </Tooltip>
            </Popconfirm>
          </div>}
        style={customCardStyle}
        hoverable="true"
        >
        <h3>Thin wall</h3>
        <p>
          This area is less than our minimum thickness for metals (0.5mm) and
          it may not hold up to machining. Please modify the model so all
          features are above this minimum if this is a concern.
        </p>
        <span style={{ paddingRight: 8, color: "#00000065" }}>
          Restricted to:
        </span>
        <Tag color="red">Soft metals</Tag>
        <Tag color="red">Plastics</Tag>
      </Card>
    );
    return (
      <Layout>
        <Header style={{zIndex: 2, borderBottom: '1px solid #00000015', height: '60px', position: 'fixed', width: '100%', top: 0, backgroundColor: 'white', padding: 0}}>
          <Breadcrumb style={{lineHeight: '60px', float: 'left', marginLeft: 16}}>
            <Breadcrumb.Item><a><Icon type="home" /> Admin Dashboard</a></Breadcrumb.Item>
            <Breadcrumb.Item><Link href="quote"><a>Quote ID</a></Link></Breadcrumb.Item>
            <Breadcrumb.Item>Part Name <Tag color="green">V3</Tag><Tag color="orange">Requested</Tag></Breadcrumb.Item>
          </Breadcrumb>
          <Button type="primary" style={{float: 'right', marginRight: 8, marginTop: 14}}>Pass</Button>
          <Button type="danger" style={{float: 'right', marginRight: 8, marginTop: 14}}>Fail</Button>
          <Button style={{float: 'right', marginRight: 8, marginTop: 14}}>Reprocess part</Button>
          <p style={{float: 'right', lineHeight: '60px', marginRight: 8}}>Last modified 2 mins ago by <a>Firstname Lastname</a></p>
          <div style={{position: 'fixed', top: 60, width: '100%', zIndex: 1}}>
            <Alert message="Part failed to process. No input file name provided" type="error" banner showIcon={false} style={{backgroundColor: '#EB5757', color: 'white'}}/>
          </div>
        </Header>
        <Content style={{marginTop: 97, backgroundColor: '#ffffff'}}>
          <Row type="flex" justify="center" align="top">
            <Col span={16}>
              <div style={{backgroundColor: 'lightGrey', width: 'auto', height: '60vh', margin: '8px 0px 8px 8px', display: 'flex'}}>
                <h1 style={{margin: 24}}>3D Viewer</h1>
              </div>
              <div style={{border: '1px solid', borderColor: '#00000015', borderRadius: 4, margin: '8px 0px 8px 8px', display: 'flex'}}>
                <table style={{margin: 16}}>
                  <tr>
                    <th>Process:</th>
                    <td>CNC</td>
                  </tr>
                  <tr>
                    <th>Material:</th>
                    <td>Aluminum 6061-T6</td>
                  </tr>
                  <tr>
                    <th style={{paddingRight: 8}}>Post-processing:</th>
                    <td>Anodizing Type II</td>
                  </tr>
                  <tr>
                    <th>Color:</th>
                    <td>Gold</td>
                  </tr>
                  <tr>
                    <th>Quantity:</th>
                    <td>10</td>
                  </tr>
                </table>
                <table style={{margin: 16}}>
                  <tr>
                    <th>Part dimensions:</th>
                    <td>1.526 x 1.526 x 1.339 in</td>
                  </tr>
                  <tr>
                    <th>Bounding box (actual):</th>
                    <td>1.526 x 1.526 x 1.339 in</td>
                  </tr>
                  <tr>
                    <th>Bounding box (safe):</th>
                    <td>1.726 x 1.726 x 1.539 in</td>
                  </tr>
                  <br/>
                  <tr>
                    <th>Material stock size (Mill):<br/><a href="https://www.mcmaster.com/#9008K51" target="_blank">9008K51</a> ($14.20)</th>
                    <td>1.750 x 12.000 x 1.750 in<br/>(L x W x H)</td>
                  </tr>
                  <tr>
                    <th style={{paddingRight: 8}}>Material stock size (Lathe):<br/><a href="https://www.mcmaster.com/#8974K66" target="_blank">8974K66</a> ($14.20)</th>
                    <td>6.000 x 1.625 in<br/>(L x D)</td>
                  </tr>
                  <br/>
                  <tr>
                    <td>Show units in:</td>
                    <td>
                      <Radio.Group value="2">
                        <Radio value="1">mm</Radio>
                        <Radio value="2">in</Radio>
                      </Radio.Group>
                    </td>
                  </tr>
                </table>
                <table style={{margin: 16}}>
                  <tr>
                    <th style={{paddingRight: 8}}>User requirements:</th>
                    <td>0/2 approved</td>
                  </tr>
                  <br/>
                  <tr>
                    <th>User Drawing:</th>
                    <td><a>drawing_name.pdf</a></td>
                  </tr>
                  <tr>
                    <th>Sanitized Drawing:</th>
                    <td><a>Upload sanitized drawing</a></td>
                  </tr>
                  <br/>
                  <tr>
                    <th>Generated Drawing:</th>
                    <td><a>View drawing</a></td>
                  </tr>
                  <tr>
                    <th>Bubble drawing:</th>
                    <td>0 bubbles added <Divider type="vertical"/><a><Icon type="edit" /></a></td>
                  </tr>
                  <br/>
                  <tr>
                    <th>CAD files:</th>
                    <td><a>Download original</a><Divider type="vertical"/><a>Download STEP</a></td>
                  </tr>
                </table>
              </div>
            </Col>
            <Col span={8} style={{overflow: 'auto', height: '90vh'}}>
              <div style={{padding: 8}}>
                <Alert message="Unreachable surfaces" type="warning" showIcon style={{marginBottom: 4}}/>
                <Alert message="Non-manufacturable sharp internal edges" type="warning" showIcon style={{marginBottom: 4}}/>
                <Alert message="CNC setup calculation incomplete" type="warning" showIcon style={{marginBottom: 4}}/>
                <Alert message="Thin wall features below CNC limits" type="warning" showIcon />
              </div>
              <Collapse bordered={true} style={{margin: '0px 8px 8px 8px'}}>
                <Panel header="Manufacturability Feedback" key="0">
                  <DFMCard/>
                  <EditDFMCard/>
                  <Card
                    title={
                      <div>
                        <Tag color="orange">Warning</Tag>
                        <Tag>Auto DFM</Tag>
                        <Tag>Pending</Tag>
                        <Tag>Draft</Tag>
                      </div>
                    }
                    extra={<CardExtras />}
                    style={customCardStyle}
                    hoverable="true"
                    >
                    <h3>Thin wall</h3>
                    <p>
                      This area is less than our minimum thickness for metals (0.5mm) and
                      it may not hold up to machining. Please modify the model so all
                      features are above this minimum if this is a concern.
                    </p>
                    <span style={{ paddingRight: 8, color: "#00000065" }}>
                      Restricted to:
                    </span>
                    <Tag color="red">Soft metals</Tag>
                    <Tag color="red">Plastics</Tag>
                  </Card>
                  { /* This is the card we are working on */ }
                  <Card
                    title={
                      <React.Fragment>
                        {
                          this.state.editing ? 
                            <InputDFM/> : 
                          (<div>
                              <Tag color="orange">Warning</Tag>
                              <Tag>Auto DFM</Tag>
                              <Tag>Pending</Tag>
                              <Tag>Draft</Tag>
                            </div>)
                        }
                      </React.Fragment>
                    }
                    extra={<CardExtras />}
                    style={customCardStyle}
                    hoverable="true"
                    >
                    <h3>Thin wall</h3>
                    <p>
                      This area is less than our minimum thickness for metals (0.5mm) and
                      it may not hold up to machining. Please modify the model so all
                      features are above this minimum if this is a concern.
                    </p>
                    <span style={{ paddingRight: 8, color: "#00000065" }}>
                      Restricted to:
                    </span>
                    <Tag color="red">Soft metals</Tag>
                    <Tag color="red">Plastics</Tag>
                  </Card>
                  <Card
                    title={<InputDFM/>}
                    extra={<CardExtras />}
                    style={customCardStyle}
                    hoverable="true"
                    >
                    <Input.TextArea
                      autosize="true"
                      value="This area is less than our minimum thickness for metals (0.5mm) and it may not hold up to machining. Please modify the model so all features are above this minimum if this is a concern."
                      />
                    <Button type="primary" style={{ float: "right", marginTop: "8px" }}>
                      Save
                    </Button>
                  </Card>
                  <Card
                    style={customCardStyle}
                    title={
                      <div>
                        <Tag color="orange"><Icon type="warning" /> Warning</Tag>
                        <Tag>Auto DFM</Tag>
                      </div>
                    }
                    extra={<Checkbox>Accept warning</Checkbox>}
                    hoverable="true"
                    >
                    <Card.Meta
                      avatar={
                        <Avatar style={{ color: "#ff", backgroundColor: "#16BC9C" }}>
                          F
                        </Avatar>
                      }
                      description={
                        <div>
                          <h3><a>Thin Wall</a></h3>
                          <p>
                            This area is less than our minimum thickness for metals
                            (0.5mm) and it may not hold up to machining. Please modify the
                            model so all features are above this minimum if this is a
                            concern.
                          </p>
                          <a>Reply</a>
                        </div>
                      }
                      />
                  </Card>
                </Panel>
              </Collapse>
              <Collapse bordered={true} defaultActiveKey="1" style={{margin: 8}}> 
                <Panel header="Pricing Parameters" key="1">
                  <div>
                    <div style={{ marginBottom: 8, width: 'auto'}}>
                      <h5>Override process</h5>
                      <Select defaultValue="cnc" style={{width: 'auto'}}>
                        <Select.Option value="cnc">CNC</Select.Option>
                        <Select.Option value="im">Injection Molding</Select.Option>
                        <Select.Option value="sheet">Sheet Metal</Select.Option>
                        <Select.Option value="3DP">3DP</Select.Option>
                      </Select>
                    </div>
                    <div style={{ marginBottom: 8, width: 'auto'}}>
                      <h5>Override material</h5>
                      <Select defaultValue="Aluminum 6061-T6" style={{width: 'auto'}}>
                        <Select.Option value="1">Material 1</Select.Option>
                        <Select.Option value="2">Material 2</Select.Option>
                        <Select.Option value="3">Material 3</Select.Option>
                        <Select.Option value="4">Material 4</Select.Option>
                      </Select>
                    </div>
                    <CalculatorField
                      label="Setups"
                      computed="Mill: 5 | Lathe: 0"
                      prefix="#"
                      />
                    <CalculatorField label="Setup cost" computed="--" prefix="$" />
                    <CalculatorField label="Special fixtures" computed="--" prefix="#" />
                    <CalculatorField label="CAM time" computed="--" suffix="hr:min" />
                    <CalculatorField label="Misc. NRE" computed="--" prefix="$" />
                    <CalculatorField
                      label="Per part material cost"
                      computed="--"
                      prefix="$"
                      />
                    <CalculatorField
                      label="Per part machine time"
                      computed="Mill: -- | Lathe: --"
                      suffix="hr:min"
                      />
                    <CalculatorField label="Machine time multiplier" computed="--" />
                    <CalculatorField label="Incremental setup time" computed="--" />
                    <CalculatorField
                      label="Quoted machine time"
                      computed="--"
                      suffix="hr:min"
                      />
                    <CalculatorField
                      label="Misc production costs"
                      computed="--"
                      prefix="$"
                      />
                    <CalculatorField label="Threads" computed="2" />
                    <div style={{ marginBottom: 8, width: 'auto'}}>
                      <h5>Notes</h5>
                      <Input.TextArea rows={2}/>
                    </div>
                    <div style={{marginTop: 16, marginBottom: 8}}>
                      <Button type="primary" size="large" block >Calculate price</Button>
                      <br/>
                      <Divider/>
                      <h1 style={{float: 'right'}}>Total: $230.21</h1>
                    </div>
                  </div>
                </Panel>
              </Collapse>
              <Collapse bordered={true} defaultActiveKey="2" style={{margin: 8}}>
                <Panel header="Minimum Lead Time Restrictions (in days)" key="2">
                  <Checkbox.Group style={{width: '100%'}}>
                    <Row>
                      <h5>Local</h5>
                      <Col span={4}><Checkbox value="sameday">Same day</Checkbox></Col>
                      <Col span={4}><Checkbox value="1">1 day</Checkbox></Col>
                      <Col span={4}><Checkbox value="3">3 days</Checkbox></Col>
                      <Col span={4}><Checkbox value="5">5 days</Checkbox></Col>
                      <Col span={4}><Checkbox value="7">7 days</Checkbox></Col>
                    </Row>
                    <br/>
                    <Row>
                      <h5>Overseas</h5>
                      <Col span={4}><Checkbox value="7intl">7 days</Checkbox></Col>
                      <Col span={4}><Checkbox value="12intl">12 days</Checkbox></Col>
                    </Row>
                  </Checkbox.Group>
                </Panel>
              </Collapse>
              <Collapse bordered={true} style={{margin: 8}} defaultActiveKey="3">
                <Panel header="Scheduling Requirements" key="3">
                  <Checkbox.Group style={{ width: '100%' }}>
                    <Row>
                      <Col span={8}><Checkbox value="A">Mill</Checkbox></Col>
                      <Col span={8}><Checkbox value="B">Lathe</Checkbox></Col>
                      <Col span={8}><Checkbox value="C">Live tooling lathe</Checkbox></Col>
                      <Col span={8}><Checkbox value="D">Waterjet</Checkbox></Col>
                      <Col span={8}><Checkbox value="E">Finishing</Checkbox></Col>
                      <Col span={8}><Checkbox value="F">Hardware installation</Checkbox></Col>
                      <Col span={8}><Checkbox value="G">4-axis</Checkbox></Col>
                      <Col span={8}><Checkbox value="H">5-axis</Checkbox></Col>
                      <Col span={8}><Checkbox value="I">Tight tolerances</Checkbox></Col>
                      <Col span={8}><Checkbox value="J">Non-standard material</Checkbox></Col>
                      <Col span={8}><Checkbox value="K">Stock thickness</Checkbox></Col>
                      <Col span={8}><Checkbox value="L">Reorder</Checkbox></Col>
                      <Col span={8}><Checkbox value="M">Revision</Checkbox></Col>
                      <Col span={8}><Checkbox value="N">3D machining</Checkbox></Col>
                      <Col span={8}><Checkbox value="O">Engraving</Checkbox></Col>
                      <Col span={8}><Checkbox value="P">Sheet metal</Checkbox></Col>
                      <Col span={8}><Checkbox value="Q">Rework</Checkbox></Col>
                      <Col span={8}><Checkbox value="R">Auto quoted</Checkbox></Col>
                      <Col span={8}><Checkbox value="S">MP quoted</Checkbox></Col>
                      <Col span={8}><Checkbox value="T">Lead time restricted</Checkbox></Col>
                      <Col span={8}><Checkbox value="U">Special tooling</Checkbox></Col>
                      <Col span={8}><Checkbox value="V">Undercuts</Checkbox></Col>
                      <Col span={8}><Checkbox value="W">Overseas</Checkbox></Col>
                      <Col span={8}><Checkbox value="X">Fictiv 5</Checkbox></Col>
                    </Row>
                  </Checkbox.Group>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </Content>
      </Layout>
    )}}
