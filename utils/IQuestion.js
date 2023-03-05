export class IQuestion{
  constructor(id, description, choices)
  {
    this._id = id;
    this._description = description;
    this._choices = choices;
    this._prev = "";
    this._next = "";
  }

  get_id()
  {
    return this._id;
  }

  get_description()
  {
    return this._description;
  }
  get_choices()
  {
    return this._choices;
  }

  has_previous()
  {
    return this._prev != "";
  }

  get_previous_question(){
    if(this.has_previous())
    {
      return this._prev;
    }
  }

  has_next()
  {
    return this._next != "";
  }

  get_next_question(){
    if(this.has_next())
    {
      return this._next;
    }
  }
}