import { connect } from "react-redux"
import Serch from "../component/Serch"
import giphyApi from "../APIs/giphyApi"

const mapDispatchToProps = dispatch => {
  return {
    getImageUrls: word => {
      const imageUrls = giphyApi(word).then(res => res.data)
      dispatch({ type: '', payload: imageUrls })
    }
  }
}


export default connect(null, mapDispatchToProps)(Serch)
