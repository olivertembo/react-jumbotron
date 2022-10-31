import { Jumbotron, JumbotronProps } from './Jumbotron';
import { Story, Meta } from '@storybook/react/types-6-0';
import exampleImage from './assets/example-image.jpg';

export default {
  title: 'Example/Jumbotron',
  component: Jumbotron,
} as Meta<JumbotronProps>;

const Template: Story<JumbotronProps> = (args) => <Jumbotron {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundImage: exampleImage,
};
