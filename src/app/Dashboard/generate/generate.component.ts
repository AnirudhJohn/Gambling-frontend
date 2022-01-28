import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
  genMon: FormGroup;

  constructor(
    private service: DataserviceService,
    private router: Router
    ) {
    this.genMon = new FormGroup({
      ammount: new FormControl(null, Validators.required)
    });
   }

  ngOnInit(): void {
  }
gen(){
  this.service.genCoin(this.genMon.value)
      .subscribe({
        next: (res) => {
          console.log('in res',res)
        },
        error: (e) => {
          console.log('in err', e)
          this.router.navigate(['/dash'])
          
        },
        complete: () => {
          console.log('in complete')
          
      
        }
        } 
        )
}
}
