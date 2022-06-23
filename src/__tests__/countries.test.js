import renderer from 'react-test-renderer'
import Countries from '../components/Countries'
import store from '../redux/configurationStore';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Countries/>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})

test('Renders countries in DOM porperly', async () => {
    render(
      <Provider store={store}>
          <Countries />
      </Provider>,
    );
    expect(screen.queryByText(/CALIEL/)).toBeNull();
});
