import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
// import { HashRouter as Router, Route, Link } from './react-router-dom'
// import { BrowserRouter as Router, Route, Link } from './react-router-dom'

import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'
import NavHeader from './components/NavHeader'
import UserAdd from './components/UserAdd'
import Login from './components/Login'
import Protected from './components/Protected'
import MenuLink from './components/MenuLink'

ReactDom.render(
  <Router>
    {/* 和Link一样可以点击切换路由 */}
    <NavHeader />
    <MenuLink to="/home">首页|</MenuLink>
    <MenuLink to="/user/1">用户|</MenuLink>
    <MenuLink to="/profile">资料|</MenuLink>
    <MenuLink to="/add">添加用户|</MenuLink>
    <MenuLink to="/login">登录</MenuLink>
    {/* <Link to="/">首页|</Link>
    <Link to="/user/1">用户|</Link>
    <Link to="/profile">资料|</Link>
    <Link to="/add">添加用户|</Link>
    <Link to="/login">登录</Link> */}
    <>
      <Switch>
        {/* 防止bug，path最好写全 */}
        <Route path="/home" component={Home} exact />
        <Route path="/user/:id" component={User} />
        <Route path="/add" component={UserAdd} />
        <Route path="/login" component={Login} />
        <Protected path="/profile" component={Profile} />
        {/* Redirect一定要放最后，不然，Route不会渲染 */}
        <Redirect to="/home" />
      </Switch>
    </>
  </Router>,
  document.getElementById('root')
)
