import React from 'react'


export default function Test() {
  const [data, senddata] = React.useState([])
  const [lang, sendlang] = React.useState(0)

  const getdata = () => {
    // let proxy = 'https://cors-anywhere.herokuapp.com/'
    const api = 'http://greatmocks.com/admin/api/great-mocks-apis.php?type=questionsbySetId&set_id=2'
    // let Url ='http://greatmocks.com/admit/api/great-mocks-apis.php?'
    fetch(api)
      .then(res => res.json())
      .then(function (response) {
        console.log(response)
        senddata(response.data)
      })
  }

  React.useEffect(() => {
    getdata()
  }, [])

  return (
    <div>
      <select onChange={(e) => sendlang(e.target.value)}>
        <option value="0">English</option>
        <option value="1">Hindi</option>
      </select>
      {data.map(function (question, i) {
        <h1>{question.set_id}</h1>
        if (lang == 0) {
          return (
            <div class="question_answer">
              <h2>Question Type - {question.subject}</h2>
              <h2>Question-ID - {question.question_id}</h2>
              <h4>Question -{question.question_title}</h4>
              <ul>
                <li><input type="radio" name={'Q.No-' + i} value="a" onClick={(e)=>localStorage.setItem((e.target.name), (e.target.value))}/>Q.1 {question.option_a}</li>
                <li><input type="radio" name={'Q.No-' + i} value="b" onClick={(e)=>localStorage.setItem((e.target.name), (e.target.value))}/>Q.2 {question.option_b}</li>
                <li><input type="radio" name={'Q.No-' + i} value="c" onClick={(e)=>localStorage.setItem((e.target.name), (e.target.value))}/>Q.3 {question.option_c}</li>
                <li><input type="radio" name={'Q.No-' + i} value="d" onClick={(e)=>localStorage.setItem((e.target.name), (e.target.value))}/>Q.4 {question.option_d}</li>
              </ul>
            </div>)
        } else if (lang == 1) {
          return (
            <div class="question_answer">
              <h2>Question Type - {question.subject}</h2>
              <h2>Question-ID - {question.question_id}</h2>
              <h4>Question -{question.question_title_hi}</h4>
              <ul>
                <li><input type="radio" name={'Q.No-' + i} value="a" onClick={(e)=>localStorage.setItem((e.target.name), (e.target.value))}/>Q.1 {question.option_a_hi}</li>
                <li><input type="radio" name={'Q.No-' + i} value="a" onClick={(e)=>localStorage.setItem((e.target.name), (e.target.value))}/>Q.2 {question.option_b_hi}</li>
                <li><input type="radio" name={'Q.No-' + i} value="a" onClick={(e)=>localStorage.setItem((e.target.name), (e.target.value))}/>Q.3 {question.option_c_hi}</li>
                <li><input type="radio" name={'Q.No-' + i} value="a" onClick={(e)=>localStorage.setItem((e.target.name), (e.target.value))}/>Q.4 {question.option_d_hi}</li>
              </ul>
            </div>)
        } else {
          return (
            <div class="question_answer">
              <h2>Question Type - {question.subject}</h2>
              <h2>Question-ID - {question.question_id}</h2>
              <h4>Question -{question.question_title}</h4>
              <ul>
                <li><input type="radio" name={'Q.No-' + i} value="a" onClick={(e)=>localStorage.setItem((e.target.name), (e.target.value))}/>Q.1 {question.option_a}</li>
                <li><input type="radio" name={'Q.No-' + i} value="a" onClick={(e)=>localStorage.setItem((e.target.name), (e.target.value))}/>Q.2 {question.option_b}</li>
                <li><input type="radio" name={'Q.No-' + i} value="a" onClick={(e)=>localStorage.setItem((e.target.name), (e.target.value))}/>Q.3 {question.option_c}</li>
                <li><input type="radio" name={'Q.No-' + i} value="a" onClick={(e)=>localStorage.setItem((e.target.name), (e.target.value))}/>Q.4 {question.option_d}</li>
              </ul>
            </div>)
        }
      })}

    </div>
  )
}

