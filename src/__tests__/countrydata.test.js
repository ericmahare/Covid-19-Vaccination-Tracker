import renderer from 'react-test-renderer'
import CountryData from '../components/CountryData'

it('renders correctly', () => {
  const tree = renderer.create(
    <CountryData/>
  ).toJSON()
  expect(tree).toMatchSnapshot();
})