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


import React, { useState, useMemo } from "react";
import data from "./data";

/* 
  1.  Create a table with the following columns:

    - createdAt
    - name
    - avatar
    - zip
    - last_name
    - job_area

  2.  Populate the table using `data.js`:

  3.  Add a input text to filter the table by name

  4.  Group orders by `job_area` and count + display the results

  5.  BONUS 1

  Populate the table using the following endpoint:

      https://61602c82faa03600179fb917.mockapi.io/orders
*/

export default () => {
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => data.filter(({ name }) =>
    search !== "" ? name.includes(search) : true
  ), [data, search]);

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <th>createdAt</th>
          <th>name</th>
          <th>avatar</th>
          <th>zip</th>
          <th>last_name</th>
          <th>job_area</th>
        </thead>
        <tbody>
          {filtered.length > 0 &&
            filtered.map(
              ({ id, createdAt, name, avatar, zip, last_name, job_area }) => (
                <tr key={`item-${id}`}>
                  <td>{createdAt}</td>
                  <td>{name}</td>
                  <td>{avatar}</td>
                  <td>{zip}</td>
                  <td>{last_name}</td>
                  <td>{job_area}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </>
  );
};

const Autocomplete = () => {
  const [ query, setQuery ] = useState('');
  const [ loadings, setLoadings ] = useState(false);
  const [ results, setResults ] = useState([]);

  const awaitFor = () => new Promise(resolve => setTimeout(resolve, 3000));

  const onAutocomplete = async (e) => {
    try {
      setLoadings(true);
      setQuery(e.target.value);
      await awaitFor();
      const results = await fetch(`/api/autocomplete?q=${query}`).then(res => res.json());
      setResults(results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadings(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 2) {
        onAutocomplete(query);
      }
    }, 1000);
    onAutocomplete(),
    return () => {
      clearTimeout(delayDebounce);
    }
  },[query]);

  return (
    <>
      <input type="text" placeholder="search..." value={query} onChange={e => setQuery(e.target.value)} />
      {loadings && <div>Loading...</div>}
      {results.length > 0 &&  (
        <ul className="show-results">
          {results.map(result => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      )}
    </>
  )
};

import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
// setResult(numberOne + numberTwo)
// setResult(numberOne - numberTwo)
function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  const resultMemorize = useMemo(() => {
    return operator === "+" ? numberOne + numberTwo : numberOne - numberTwo;
  }, [numberOne, numberTwo, operator]);

  return (
    <div className="App">
      <h1>Calculator</h1>

      <div className="number-inputs">
        <input
          style={{ outline: 0, borderRadius: "1rem", fontSize: "1.5rem" }}
          type="number"
          placeholder="0"
          value={numberOne}
          onChange={(e) => setNumberOne(+e.target.value)}
        />
        <input
          style={{ outline: 0, borderRadius: "1rem", fontSize: "1.5rem" }}
          type="number"
          placeholder="0"
          value={numberTwo}
          onChange={(e) => setNumberTwo(+e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          margin: "1rem",
          padding: "1rem"
        }}
      >
        <button
          style={{ borderRadius: "1rem", fontSize: "2rem" }}
          onClick={() => setOperator("+")}
        >
          +
        </button>

        <button
          style={{ borderRadius: "1rem", fontSize: "2rem" }}
          onClick={() => setOperator("-")}
        >
          -
        </button>
      </div>

      <h2 style={{ fontSize: "2rem", color: "red" }}>{resultMemorize}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


<html>
  <head>
    <meta charset="UTF-8" />
    <title>Bookshelf!</title>
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.13.12/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/jsx">
      /*
        Question: 

        Given a system that has users and books, where each user may like multiple books, complete
        the react code below to do the following:
        
        • Render the list of users with their favorite books
        • Find the books common to all users
        • Render the list of common books
        
        Example:

        user1: book1, book2, book3
        user2: book3
        user3: book2, book3

        Common books: book3

      */
    
      class User extends React.PureComponent {
        render() {
          // ADD CODE BELOW
          // Add the necessary code to render a User
          return <li>
                  {this.props.name}: {this.props.favBooks.map(book => <span>{book},</span>)}
                </li>;
        }
      }

      const findCommonBooks = (users) => {
        // ADD YOUR CODE HERE
        // find the books common to all user's favBooks lists
        const booksCnt = {};
        let commonsBooks = '';
        
        users.forEach(({ favBooks }) => { // n
          let band = false;
          for (const book of favBooks) { // m
            // // favBooks,filter(item => item === book).length
            if(book) {
              booksCnt[book] = booksCnt[book] ? booksCnt[book] + 1 : 1;
            }
          }
        });
        
        // N * M
        // + Z
        // O(n^2)
        
        const commons = Object.entries(booksCnt).forEach(([key,value]) => { // z
          if (value === users.length) {
            commonsBooks += `${key}, `;
          }
        });
        
        console.log('commonsBooks', commonsBooks);
        return commonsBooks;
      }

      const BookShelf = (props) => {
        // ADD YOUR CODE HERE
        // Add the necessary code to render the list of users and
        // and the code needed to find the common books and render
        // that as well

        return (
          <div className="App">
            <header className="App-header">
              <h1>Bookshelf!</h1>
            </header>
            {/* ADD CODE BELOW */}
            {props.users.length > 0 && (
              <ul>
                {props.users.map(user => <User key={user.name} {...user} /> )}
              </ul>
            )}
            Common books: {findCommonBooks(props.users)}
          </div>
        );
      }
      
      const user1 = {
        name: 'user1',
        favBooks: ['book1', 'book2', 'book3', 'book4'],
      }

      const user2 = {
        name: 'user2',
        favBooks: ['book2', 'book3', 'book4'],
      }

      const user3 = {
        name: 'user3',
        favBooks: ['book2', 'book3'],
      }
      
      ReactDOM.render(
        <BookShelf users={[user1, user2, user3]}/>,
        document.getElementById('root')
      );
    </script>
  </body>
</html>
