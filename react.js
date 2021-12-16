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

// ==========

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

// ==========

import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
      // A
      console.log('A');
  })

  useEffect(() => {
    // B
    console.log('B');
  }, [count])

  useEffect(() => {
    // C
    console.log('C');
  }, [])

  const onBtnClick = () => { setCount(v => v + 1) }

  return (
    <div>
      <button onClick={onBtnClick}>Hello World</button>
      <span>Count: {count}</span>
    </div>
  );
}

export default App; // A Y B


const value = useMemo(() => {
  // A
}, [valueOne, valueTwo]); // Cuand valueOne cambia

// props
// Los componentes secundarios se vuelven a renderizar cuando cambian los accesorios
// Los accesorios se pasan del componete principal al secundarios


// XXX = {String(props.foo)}
import React from 'react';
import ReactDOM from 'react-dom';

const PrintFoo = (props) => {
  return (
    <div>
      XXX
    </div>
  );
};

ReactDOM.render(  <PrintFoo foo={true} />, document.getElementById('root'));

// Comentarios en JSX
{/* <div> */ }

// redux
// props.todos de TodoApp estan disponibles en la tienda a traves de mapStateToProps
// mapStateToProps es una funcion que recibe el estado y devuelve un objeto con las propiedades que queremos pasar al componente
// La llamada a connect es una funcion que recibe una funcion y devuelve una funcion HOC

// ==========
// Hello World foo = 4
import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, bar, val }) => (
  <div>
    {name ? <span>Hello {name}</span>: null}
    {bar && <span> foo = {bar}</span>}
    {val && <span> val = {val}</span>}
  </div>
);

const data = {
  bar: 4,
  val: null
};

ReactDOM.render(<Hello name="World" {...data} />, document.getElementById('root'));
// ==========

import React from 'react';
import PropTypes from 'prop-types';

const ColorComponent = ({ color }) => {
  return (
    <div>
      {color}
    </div>
  )
};

ColorComponent.PropTypes = {
  color: PropTypes.string.isRequired
}

// ==========

import React from 'react';

// Create the Label React component​​​​​​‌​​‌​‌‌​‌​​​​​‌‌‌‌‌​​​​​​ here
function ListUsers({users}) {
    const ordered = users.sort((a, b) => a.lastName > b.lastName);
    return (
        <div>
            <div className='user-count'>{`Users: ${users.length}`}</div>
            {ordered.length > 0 && (
                <ul className='user-list'>
                    {ordered.map(user => <li>{`${user.firstName} ${user.lastName}`}</li>)}
                </ul>
            )}
        </div>
    )
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    return <ListUsers users={[{firstName: 'Donald', lastName: 'Knuth'}, {firstName: 'Ada', lastName: 'Lovelace'}]} />;
}

// Do not change
export default ListUsers;
// ==========
