import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../servicios/client.service';
import { Router } from '@angular/router';

// import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-reguistro',
  templateUrl: './reguistro.component.html',
  styleUrls: ['./reguistro.component.css']
})
export class ReguistroComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  load: boolean = true;


  constructor(
    private fb: FormBuilder,
    private client: ClientService,
    private route: Router,
  ) {

  }

  ngOnInit(): void {

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.email],
      contraseña: ['', Validators.required],

    });

  }

  async onSubmit() {

    // this.submitted = true;

    if (this.form.valid) {

      let data = {
        nombre: this.form.value.nombre,
        apellidos: this.form.value.apellidos,
        correo: this.form.value.correo,
        contraseña: this.form.value.contraseña

      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/registro', data).subscribe(

        (response: any) => {

          this.route.navigate(['/login'])

        },
      )

    } else {

      console.log("Form error");
    }


  }

}

