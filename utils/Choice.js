export class Choice
{
  constructor(index, description, value)
  {
    this._index = index;
    this._description = description;
    this._value = value;
  }

  get get_value()
  {
    return this._value;
  }

  get get_index()
  {
    return this._index;
  }

  get get_description()
  {
    return this._description;
  }
}