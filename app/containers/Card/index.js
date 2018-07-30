import { connect } from 'react-redux';
import Card from '../../components/Card';
import { playCard } from "../../reducers/CardsReducer/actions";

const mapDispatchToProps = dispatch => {
  return {
    playCard: data => dispatch(playCard(data))
  }
};

export default connect(null, mapDispatchToProps)(Card)
