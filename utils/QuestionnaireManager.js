export class QuestionManager{
  constructor()
  {
    this.load_questionnaire();
  }

  load_questionnaire(){
    this.load_mbti();
  }

  load_mbti()
  {
    fetch('../src/questionnaires/MBTI.json')
      .then((response) => response.json())
      .then((json)=> {
        
      });  
  }
}