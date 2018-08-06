import { connect } from 'react-redux';
import ActionQueue from '../../components/ActionQueue';

function mapStateToProps(state) {
  return {
    phases: state.turnFlow.get('phases').toArray(),
    activePhase: state.turnFlow.get('activePhase'),
    activeActionSlot: state.turnFlow.get('activeActionSlot'),
  };
}

export default connect(mapStateToProps)(ActionQueue);
