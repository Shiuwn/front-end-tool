import { FC, useEffect, useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import type { MenuProps } from 'antd'
import { Storage } from '@plasmohq/storage'

const { Header, Content } = Layout

const items: MenuProps['items'] = [{
  label: 'Color',
  key: 'color'
}, {
  label: 'URL Code',
  key: 'urlcode'
}, {
  label: 'Base64',
  key: 'base64'
}, {
  label: 'Other',
  key: 'other'
}]

const storage = new Storage({
  area: 'local'
})

const Home: FC = () => {
  const [current, setCurrent] = useState('color')
  const navigate = useNavigate()
  const menuChange: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    navigate(`/${e.key}`)
    storage.set('menu', e.key)
  }

  useEffect(() => {
    storage.get('menu').then((key) => {
      if (key) {
        setCurrent(key)
        navigate(`/${key}`)
      }
    })
  }, [])

  return (
    <Layout className="layout">
      <Header className="header">
        <Menu className="menu" selectedKeys={[current]} mode="horizontal" items={items} theme="light" onClick={menuChange} />
      </Header>
      <Content className="content">
        <Outlet />
      </Content>
    </Layout>
  )
}

export default Home