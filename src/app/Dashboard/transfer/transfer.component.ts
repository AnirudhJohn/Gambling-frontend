import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  users = []
  selected = ''
  transferForm: FormGroup;
  showSuccessMessage: boolean
  constructor(
    private router: Router,
    private service: DataserviceService
    ) { 
      this.users = []
      this.getChild()
      this.showSuccessMessage = false

      this.transferForm = new FormGroup({
        amount: new FormControl(null, Validators.required)

      })
    }

  ngOnInit(): void {
  }

  update(e: any){
    this.selected = e.target.value
  }

  getChild(){
    this.service.getUser()
    .subscribe({
        next: (res) => {
          console.log(res)
          this.users = JSON.parse(JSON.stringify(res))['data']['child']
          console.log('got these '+this.users)
        },
        error: (e) => {
          console.log('in user failed response error',e['message'])
          
        },
        complete: () => {
          console.log('completed')
        }
    });
  }

  sendMoneytochild(){
    this.service.transfer(this.selected, this.transferForm.value)
    .subscribe({
      next: (res) => {
        console.log('in res'+res)
      },
      error: (err) => {
        console.log('in err'+err['headers']['status'])
        console.log(JSON.stringify(err))
        this.showSuccessMessage = true
      },
      complete: () => {
        console.log('completed')
      }

    })
  }

  onSubmit() {
    this.transferForm.reset()
  }
}
