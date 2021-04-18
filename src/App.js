import React, { Fragment } from 'react';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Form from './components/form/Form.js';
import Content from './components/content/Content.js';
import MainCta from './components/mainCta/MainCta.js';

function App() {
  return (
    <Fragment>
      <Header />
      {/* <MainCta /> */}
      <Content />
      <Form />
      <Footer />
    </Fragment>
  );
}

export default App;
