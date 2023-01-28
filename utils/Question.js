export class Question{
constructor(id, description, choices)
{
  this._id = id;
  this._description = description;
  this._choices = choices;
}

get get_id()
{
  return this._id;
}

get get_description()
{
  return this._description;
}
get get_choices()
{
  return this._choices;
}

}