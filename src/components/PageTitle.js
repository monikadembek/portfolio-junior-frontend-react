import React from 'react';
import '../styles/PageTitle.scss';

const PageTitle = (props) => {
    return (
        <div className="page-title">{props.title}</div>
    );
}

export default PageTitle;