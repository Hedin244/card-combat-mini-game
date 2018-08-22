import { connect } from 'react-redux';
import HunterInfo from '../../components/HunterInfo';

const mapStateToProps = state => {
  return {
    hunter: state.hunter.toObject()
  };
};

export default connect(mapStateToProps)(HunterInfo);
