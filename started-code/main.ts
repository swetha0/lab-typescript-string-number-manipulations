import { StringManipulationService, NumberManipulationService } from './main-service';

class StringManipulations implements StringManipulationService
{
    
    print(word: string): void{
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(5));
        let word1 = " FSD";
        console.log(word.concat(" FSD"));
        let wslice = word.slice(2 , 5);
        console.log(wslice);
        console.log(word.length);
    }
    printWithSpace(sentence: string): void{
        console.log(sentence.split(" ").join(" "));
    }
    findVowel(str: string): void{
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'e' || str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' || str[i].toLowerCase() == 'u') {
                count++;
            }
        }
        console.log(count);
    }
 }

class NumbersManipulations implements NumberManipulationService
{
    findPrime(num: number): void{
        var flag : boolean = false;
        for(var i=2; i<num/2; i++)
        {
            if (num % i === 0) 
            {
                console.log(num + " is a PRIME NUMBER !!");
            }
        }
        console.log(num + " is not a PRIME NUMBER !!");
    }

    findMagic(num: number) : void{
        if(num%9 == 1)
        {
            console.log(num + " is a MAGIC NUMBER !!");
        }
        else
        {
            console.log(num + " is a not a MAGIC NUMBER !!");
        }
    }

}

var word = "FullStackDevelopment";
var obj1 = new StringManipulations();
obj1.print(word);
obj1.printWithSpace(word);
obj1.findVowel(word);

var num = 199;
var obj2 = new NumbersManipulations();
obj2.findPrime(num);
obj2.findMagic(num);