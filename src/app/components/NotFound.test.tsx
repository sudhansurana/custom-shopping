import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from './NotFound';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

test('NotFound component', () => {
  const component = renderer.create(
    <Router>
      <Switch>
          <Route path='**' component={NotFound}></Route>
        </Switch>
    </Router>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
