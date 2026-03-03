import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
//define 5 trainer
  private registry = signal([
    {
      name:'Ash Ketchum',
      team:['Pikachu', 'Charizard'],
      items:['Light Ball', 'Charizardite Y']
    },
    {
      name:'Misty',
      team:['Starmie', 'Psyduck', 'Gyarados'],
      items:['Mystic Water', 'None', 'Gyaradosite']
    },
    {
  name:'Brock',
  team:['Onix', 'Geodude'],
  items:['Hard Stone', 'Potion']
},
{
  name:'Cynthia',
  team:['Garchomp', 'Lucario'],
  items:['Dragon Fang', 'Lucarionite']
},
{
  name:'Leon',
  team:['Charizard', 'Dragapult'],
  items:['Charizardite X', 'Max Revive']
},
  ]);
  trainers = this.registry.asReadonly();
}
