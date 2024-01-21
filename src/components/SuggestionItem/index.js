// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails} = props
  const {id, suggestion} = suggestionDetails

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
      />
    </li>
  )
}

export default SuggestionItem
