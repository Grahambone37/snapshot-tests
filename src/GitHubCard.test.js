// import App from './App';
// import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import GitHubCard from './GitHubCard';

// tried to set this to wait for a while for the page to load, but gonna move on
test('Github profile snapshot', async () => {
    const tree = renderer.create(<GitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
})