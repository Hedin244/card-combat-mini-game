import { connect } from 'react-redux';
import TurnCounter from '../../components/TurnCounter';
import { endTurn, endPhase } from '../../reducers/TurnFlowReducer/actions';

function mapStateToProps(state) {
  return {
    turn: state.turnFlow.get('turn'),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    endTurn: () => dispatch(endTurn()),
    endPhase: () => dispatch(endPhase()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnCounter);
