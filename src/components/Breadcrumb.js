import React from 'react'
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';

const Apps = () => (
    <ul className="app-list">
        <li>
            <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
        </li>
        <li>
            <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
        </li>
    </ul>
);

const breadcrumbNameMap = {
    '/sheets': 'Sheets',
    '/users': 'Users',
    '/users/mobile': 'Mobile',
    '/users/web': 'Web',
    '/forms': 'Forms',
    '/forms/studio': 'Studio',
    '/forms/studio/new': 'New',
};
const Home = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>
                    {breadcrumbNameMap[url]}
                </Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [(
        <Breadcrumb.Item key="home">
            <Link to="/home">Home</Link>
        </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
        <Breadcrumb style={{ margin: '16px 0' }}> 
                {breadcrumbItems}
            </Breadcrumb>
    );
});

export default withRouter(Home)