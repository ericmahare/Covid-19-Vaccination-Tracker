import renderer from 'react-test-renderer';
import Header from '../components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

const img = './images/africa.svg';
const vaccinated = 30000;
const country = 'Kenya';
const total = 70000;

it('renders correctly', () => {
  const tree = renderer.create(
    <Router>
      <Header img={img} vaccinated={vaccinated} country={country} total={total}/>
    </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})