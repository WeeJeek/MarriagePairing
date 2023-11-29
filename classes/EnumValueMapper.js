import CHOICES from "../enums/ChoiceCategories"

export default class EnumValueMapper{
    constructor(){

    }

    map_choice_value(str) {
        let result;
    
        if (str == "A") {
            result = CHOICES.A;
        } else if (str == "B") {
            result = CHOICES.B;
        } else if (str == "C") {
            result = CHOICES.C;
        } else {
            result = CHOICES.D;
        }
    
        return result;
    }
    
}