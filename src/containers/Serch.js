import { connect } from "react-redux"
import Serch from "../component/Serch"
import getImageUrls from "../actions/getImageUrls"

const mapStateToProps = state => {
  return {
    buttonText: state.buttonText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getImageUrls: word => {
      dispatch(getImageUrls(word))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Serch)
