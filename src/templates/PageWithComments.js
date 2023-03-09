import React from "react"
import commentBox from "commentbox.io"

class PageWithComments extends React.Component {
  componentDidMount() {
    this.removeCommentBox = commentBox("5648310794715136-proj")
  }

  componentWillUnmount() {
    this.removeCommentBox()
  }

  render() {
    return <div className="commentbox" />
  }
}

export default PageWithComments
