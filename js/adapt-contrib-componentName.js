import Adapt from 'core/js/adapt';
import ComponentNameModel from './ComponentNameModel';
import ComponentNameView from './ComponentNameView';

export default Adapt.register('componentName', {
  model: ComponentNameModel,
  view: ComponentNameView
});
