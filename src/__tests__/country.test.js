import { BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Country from '../components/Country';

const info = {
  administered: 23000,
  country: 'Kenya',
  abbreviation: 'KE'
}

it('renders properly', () => {
  const tree = renderer.create(
    <Router>
      <Country info={info}/>
    </Router>
  ).toJSON()
  expect(tree).toMatchSnapshot();
})