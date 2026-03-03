import { Component, inject } from '@angular/core';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-display',
  imports: [],
  templateUrl: './trainer-display.component.html',
  styleUrl: './trainer-display.component.css'
})
export class TrainerDisplayComponent {
  trainerService= inject(TrainerService);//data as a read only file from the trainer server is injected 

}
