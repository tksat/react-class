const buttonText = (state = "検索する", action) => {
  switch (action.type) {
    case 'LOADING':
      return "検索中です・・・";
    case 'RESEIVE_URL':
      return "検索する";
    default:
      return "検索する"
  }
}

export default buttonText
