import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { AlertController, LoadingController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {

  private discover: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: Http, private alertCtrl: AlertController, private translate: TranslateService, private loadingCtrl: LoadingController) {
    let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    this.discover = this.formBuilder.group({
      name: ['', Validators.required],
      mail: ['', [Validators.required, Validators.pattern(emailRegex)]],
      field_company: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let data = {
      contact_form: [{target_id: 'discover'}],
      subject: [{value: 'Mobile form submission for ' + this.discover.get('mail').value}]
    };
    for (let i in this.discover.controls) {
      data[i] = [{value: this.discover.get(i).value}];
    }
    let request = this.http.post('/contact_message', data);
    request.subscribe((response: Response) => {
      if (response.status === 200) {
        loading.dismiss();
        this.discover.reset();
        let alert = this.alertCtrl.create({
          title: this.translate.instant('DISCOVER_CONFIRM_HEADER'),
          message: this.translate.instant('DISCOVER_CONFIRM_PROMPT')
        });
        alert.present();
      }
    });
  }

}
