import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote detail page</h1>
      <p>This is the detail page for {params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
