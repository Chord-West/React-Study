// 모든 페이지들의 공통속성 처리
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css'
import withReduxSaga from 'next-redux-saga';
import wrapper from "../store/configureStore";

const NodeBird = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>

    );
}

NodeBird.propTypes = {
    Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(withReduxSaga(NodeBird));