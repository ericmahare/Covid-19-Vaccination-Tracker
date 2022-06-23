import renderer from 'react-test-renderer';
import Hero from '../components/Hero';

const map = './images/africa.svg';
const country = 'Kenya';
const vaccinated = 40000;
const total = 100000;

it('renders correctly', () => {
  const tree = renderer.create(
    <Hero map={map} country={country} vaccinated={vaccinated} total={total}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})