import { FC, useState } from "react";
import { Outlet, NavLink, useHref, useMatch } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import type { MenuProps } from 'antd'

const { Header, Content } = Layout
const CustomLink: FC<{ label: string, href: string }> = ({ label, href }) => {
  const [active, setActive] = useState(false)
  return (<NavLink to={href} >{label}</NavLink>)
}


const items: MenuProps['items'] = [{
  label: 'Color',
  key: 'color'
}, {
  label: 'Other',
  key: 'other'
}]
const Home: FC = () => {
  const [current, setCurrent] = useState('color')
  const menuChange: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }
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