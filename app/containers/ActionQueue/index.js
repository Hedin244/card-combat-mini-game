import { connect } from 'react-redux';
import ActionQueue from '../../components/ActionQueue';

function mapStateToProps(state) {
  return {
    actionQueue: state.turnFlow.get('actionQueue').toArray(),
  };
}

export default connect(mapStateToProps)(ActionQueue);
