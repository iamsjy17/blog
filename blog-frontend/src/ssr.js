import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import configure from 'store/configure';

import App from 'components/App';

const render = ctx => {
  const { url } = ctx; //요청에서 url을 받아온다.

  const store = configure(); //요청이 들어올 때마다 새 스토어를 생성한다.

  const html = ReactDomServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  return html;
};

export default render;
