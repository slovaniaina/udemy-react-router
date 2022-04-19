import { Route, Switch, Redirect } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';

function App() {
  return (
    <div>
      {/* <MainHeader /> */}
      <main>
        <Switch>
          {/* <Route path='/' exact>
            <Redirect to='/welcome'/>
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route> */}
          <Route path='/' exact>
            <Redirect to='/quotes'/>
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
