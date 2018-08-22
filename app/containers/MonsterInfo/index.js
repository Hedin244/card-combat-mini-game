import { connect } from 'react-redux';
import MonsterInfo from '../../components/MonsterInfo';

const mapStateToProps = state => {
  return {
    monster: state.monster.toObject()
  };
};

export default connect(mapStateToProps)(MonsterInfo);
