import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { GenerateService } from '../../../generate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  formulario!: FormGroup;

  canShow: boolean = false;

  password: string | undefined;
  copyClipText: any | undefined;
  buttonCopy = false;

  constructor(
    private generate: GenerateService, 
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario(){
    this.formulario = this.formBuilder.group({
      input1: [null, Validators.required],
      input2: [null, Validators.required]
    });
  } 

  gerar() {
    this.password = this.generate.passGenerate(this.formulario.value)
    this.copyClipText = this.password
    this.canShow = true;
    this.formulario.reset();
  }

}
