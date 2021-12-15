// const D = C => ({ children }) => (
//   <div>
//     <span>Foo</span>
//     <C>{children}</C>
//   </div>
// );

// class MyClass extends React.Component {
//   render() {
//     return <span>{this.props.children}</span>;
//   }
// }

// const X = D(MyClass, "world");

// class MyClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mail: "hello@example.com",
//     };
//   }

//   render() {
//     return <p>Mail: {state.mail}</p>;
//   }
// }

// ReactDOM.render(<MyClass />, document.getElementById("root"));

// class MyClass extends React.Component {
//   render() {
//     return (
//       <p>Hello World</p>
//       <p>1+1</p>
//     );
//   }
// }

function App() {
  const [count, setCount] = useState(0);
  if(count === 0) {
    const [name, setName] = useState("sdsdsd");
  }

  useEffect(() => {
    setCount(1);
  }, [])
  return (
    <div>
      <h1>Hello World</h1>
      <p>1+1</p>
    </div>
  );
}


// React 16.x code​​​​​​‌​​‌​‌‌​​‌‌‌‌​​​​‌​‌‌‌​​​ below
import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        };
    }

    handleChangeValuePositive() {
        this.setState((state, _)  => ({value: state.value + 1 }))
    }

    handleChangeValueNegative() {
        this.setState((state, _) => ({value: state.value - 1 }))
    }
    render() {
        return (
            <div>
                <p id="value">{this.state.value}</p>
                <button id="increment" onClick={() => this.handleChangeValuePositive() }>+</button>
                <button id="decrement" onClick={() => this.handleChangeValueNegative() }>-</button>
            </div>
        );
    }
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    return <Counter value={0} />;
}

// Do not change
export default Counter;




import React from "react";

// Update Page and​​​​​​‌​​‌​‌‌​​‌‌‌‌​​​​‌​‌‌‌​​​ UserInfoWithTitle
function Page({ user }) {
    return (
        <div>
            <div>...</div>
            <UserInfoWithTitle title='User Info' user={user} />
            <div>...</div>
        </div>
    );
}

function UserInfoWithTitle({title, user}) {
    return (
        <div>
            <div>{title}</div>
            <UserInfo user={user} />
        </div>
    );
}

// Do not change the UserInfo component
function UserInfo({user}) {
    return (
        <div>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
        </div>
    );
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    return (
        <Page user={{firstName: 'John', lastName: 'Doe'}} />
    );
}

// Do not change
export {
    Page,
    UserInfoWithTitle,
    UserInfo
}


import React, { useState } from 'react';

function Counter() {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p id="value">{value}</p>
            <button id="increment" onClick={() => setValue(prevState => (prevState + 1))}>+</button>
            <button id="decrement" onClick={() => setValue(prevState => (prevState - 1))}>-</button>
        </div>
    )
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    return <Counter />;
}

// Do not​​​​​​‌​​‌​‌‌​​‌‌‌‌​​​​‌​‌‌‌​​​ change
export default Counter;

const ResultDisplayer = ({ getNewResult = () => 'test'}, children ) => {
    let [result, setResult] = useState(null);
    
    const handleClick = () => {
      setResult(getNewResult);
    }
  
    
    return (<div>
        <button id="button" onClick={() => handleClick()}>Click</button>
        {result && <span id="result">{result}</span>}
    </div>);
  }
  
  // Modify this function if you want to change the preview
  // It will not be evaluated as part of the assessment
  export function Preview() {
    console.log('first call');
    return <ResultDisplayer getNewResult={'test'} />;
  }
  
  // Do not change
  export default ResultDisplayer;