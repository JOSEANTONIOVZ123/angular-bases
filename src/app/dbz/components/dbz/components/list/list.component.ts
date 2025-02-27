import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../../../interfaces/character.interface';

@Component({
  standalone:false,
  selector: 'dbz-list',
  templateUrl: "./list.component.html",
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[]= [{
    name: 'Trunks',
    power: 10
  }];
    @Output()
    public onDelete:EventEmitter<string> = new EventEmitter();

    onDeleteCharacter(id?:string):void{

      if (!id) {return;}
      console.log({id: id});
      this.onDelete.emit(id);
    }

 }

