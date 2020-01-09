import {Pipe, PipeTransform} from '@angular/core';


@Pipe ({
    name : 'titlePipe'
}) 

export class TitlePipe implements PipeTransform {
    transform ( name : String, gender : String) : String {
        if (gender.toLowerCase() == 'male') {
            return 'Mr.' + name;
        }
        else {
            return 'Mrs.' + name;
        }
    }
}