[![npm version](https://badge.fury.io/js/react-html-tag-attributes.svg)](https://www.npmjs.com/package/react-html-tag-attributes)
# react-html-tag-attributes

Simple React component that lets you insert attributes into the <html> tag from basically anywhere.
as long as it is mounted.   

once the component is unmounted, the previous attributes are back.



## Usage

* Install.
```bash
yarn add react-html-tag-attributes
```

* Require component.
```js
import HtmlTags from 'react-html-tag-attributes';
```

* Setup and render.
```jsx
import React, { Component } from "react";
import HtmlTags from 'react-html-tag-attributes';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HtmlTags itemtype="https://schema.org/FAQPage"/>
      </div>
    );
  }
}

export default App;
```

or typescript:
```tsx
import * as React from 'react';
import HtmlTags from 'react-html-tag-attributes';


export class App extends React.Component<any, any> {
  render() {
    return (
        <div>
            <HtmlTags itemtype="https://schema.org/FAQPage"/>
        </div>
    );
  }
}

```
