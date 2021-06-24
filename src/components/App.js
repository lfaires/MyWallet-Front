import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GlobalStyle from '../styles/GlobalStyle';
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import TransactionPage from './TransactionPage/TransactionPage';
import AddTransactionPage from './AddTransactionPage';

export default function App() {

    return (
        <>
        <GlobalStyle/>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <LoginPage />
                </Route>
                <Route path="/sign-up" exact>
                    <SignUpPage />
                </Route>
                <Route path="/transactions" exact>
                    <TransactionPage />
                </Route>
                <Route path="/add-transaction/:type" exact>
                    <AddTransactionPage />
                </Route>        
            </Switch>
        </BrowserRouter>
        </>
    )
}