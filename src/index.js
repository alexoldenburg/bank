import { Page } from './page.js';
import styles from './style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Page />,
    document.getElementById('bankapp')
);

module.hot.accept();
