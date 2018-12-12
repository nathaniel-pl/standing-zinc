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
} from "antd";

const Panel = Collapse.Panel;

const Option = Select.Option;

// const customPanelStyle = {
//   background: "#00000009",
//   borderRadius: 4,
//   marginBottom: 16,
//   border: 1,
//   overflow: "hidden"
// };

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

const CalculatorField = props => (
  <div style={{ marginBottom: 8 }}>
    <h5>{props.label}</h5>
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
    <Form.Item label="Restrict to:" {...formItemLayout}>
      <SelectRestrictions />
    </Form.Item>
  </Form>
  <Button type="primary" style={{ float: "right" }}>
    Save
  </Button>
</Card>

);

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};

export default () => (
  <Collapse defaultActiveKey={["2"]} bordered={true} style={{margin: 24, width: 600, float: 'right'}}>
    <Panel header="Manufacturability Feedback" key="2">
      <div>
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
      </div>
    </Panel>
    <Panel header="Pricing & Lead time" key="3">
      <div>
        <CalculatorField
          label="Setups:"
          computed="Mill: 5 | Lathe: 0"
          prefix="#"
        />
        <CalculatorField label="Setup cost:" computed="--" prefix="$" />
        <CalculatorField label="Special fixtures:" computed="--" prefix="#" />
        <CalculatorField label="Fixture cost:" computed="--" prefix="#" />
        <CalculatorField label="CAM time:" computed="--" suffix="hr:min" />
        <CalculatorField label="CAM cost:" computed="--" prefix="$" />
        <CalculatorField label="Misc NRE:" computed="--" prefix="$" />
        <CalculatorField
          label="Per part material cost:"
          computed="--"
          prefix="$"
        />
        <CalculatorField
          label="Per part machine time:"
          computed="Mill: -- | Lathe: --"
          suffix="hr:min"
        />
        <CalculatorField label="Machine time multiplier:" computed="--" />
        <CalculatorField label="Incremental setup time" computed="--" />
        <CalculatorField
          label="Quoted machine time:"
          computed="--"
          suffix="hr:min"
        />
        <CalculatorField
          label="Misc production costs:"
          computed="--"
          prefix="$"
        />
        <CalculatorField label="Threads:" computed="2" />
        <CalculatorField label="Additional notes:" computed="--" />
        <div style={{ float: "right", marginTop: 8, marginBottom: 16 }}>
          <Button type="primary">Calculate price</Button>
        </div>
      </div>
    </Panel>
    <Panel header="Comp Geo Feedback" key="4" />
  </Collapse>
)