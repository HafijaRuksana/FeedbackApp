import './index.css'

const EmojiItem = props => {
  const {emojiDetails, onClickHappy} = props
  const {id, name, imageUrl} = emojiDetails

  const onClickHappyEmoji = () => {
    onClickHappy(id)
  }

  return (
    <li onClick={onClickHappyEmoji} className="emoji-reaction-container">
      <img src={imageUrl} alt={name} className="emoji-image" />
      <p>{name}</p>
    </li>
  )
}
export default EmojiItem
