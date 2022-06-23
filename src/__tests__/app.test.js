import renderer from 'react-test-renderer';
import App from '../App';
import store from '../redux/configurationStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})