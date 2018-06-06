import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {minAge} from '../../shared/validators/minAge.validator';


interface Partner {
  name: string;
  birthDate: number;
  gender: string;
}

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  pF: FormGroup;
  date = new Date();


  constructor(private fB: FormBuilder) {
    this.pF = this.fB.group({
      name: ['Tom', [Validators.required, Validators.minLength(4), minAge(10)]],
      birthDate: [null, [Validators.required, minAge(14)]],
      gender: ['male']
    });

  }

  submit() {
    Object.keys(this.pF.controls).forEach((key) => {
      this.pF.get(key).markAsTouched();
    })
  }

  ngOnInit() {
  }

}
