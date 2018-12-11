import { Button, DatePicker } from 'antd'
import Head from 'next/head'

export default () =>
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <div>
      <Button>About</Button>
      <DatePicker />
    </div>
  </div>