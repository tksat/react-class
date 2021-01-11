import { connect } from "react-redux"
import ImageList from "../component/ImageList"

const mapStateToProps = state => {
  return {
    imageUrls: state.imageUrls
  }
}

export default connect(mapStateToProps, null)(ImageList)
