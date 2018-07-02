import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '../../../shared/services/translate.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InvitationComponent implements OnInit {
  invitationForm: FormGroup;
  invitationErrorMessage = '';
  data: FormGroup[] = [];
  active = true;

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService
  ) {
    this.invitationForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.data = [this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      confirm: ['', Validators.required ]
    })];
  }

  addAnother() {
    this.data.push(this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      confirm: ['', Validators.required ]
    }));
  }

  show() {
    this.active = !this.active;
  }

  get firstText(): string {
    return this.translateService.translateText('account_edit_profile_field_first_name_placeholder', {});
  }
  get lastText(): string {
    return this.translateService.translateText('account_edit_profile_field_last_name_placeholder', {});
  }
  get emailText(): string {
    return this.translateService.translateText('common_text_email_placeholder', {});
  }
  get confirmText(): string {
    return this.translateService.translateText('common_text_confirm_email_placeholder', {});
  }
}
