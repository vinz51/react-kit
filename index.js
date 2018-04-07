import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import 'Styles/reset'

const App = Loadable({
    loader : () => import('Containers/App'),
    loading: () => (<div>loading ... </div>),
});

ReactDOM.render(
    <App name="World" />,
    document.getElementById('root')
)
