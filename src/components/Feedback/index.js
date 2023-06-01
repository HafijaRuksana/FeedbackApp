// Write your React code here.
import {Component} from 'react'
import EmojiItem from '../EmojiItem'
import './index.css'

class Feedback extends Component {
  state = {happyClickedId: false}

  onClickHappy = () => {
    this.setState({happyClickedId: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {happyClickedId} = this.state
    console.log(happyClickedId)

    return (
      <div className="feedback-app">
        {happyClickedId ? (
          <div className="content-card">
            <img src={loveEmojiUrl} alt="love emoji" className="emoji-image" />
            <h1 className="thank-heading">Thank You!</h1>
            <p className="thank-description">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        ) : (
          <div className="content-card">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="expressions-container">
              {emojis.map(eachEmoji => (
                <EmojiItem
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  onClickHappy={this.onClickHappy}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
