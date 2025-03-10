import { inject, observable, NewInstance } from 'aurelia-framework';
import { ValidationRules, ValidationController } from 'aurelia-validation';
import { Preferences } from '@capacitor/preferences';
import { KeyValue } from 'domain/models/key-value';
import { SupabaseService } from 'services/supabase-service';
import { AppStore, ContactFormModel } from '@moimob/common';

@inject(NewInstance.of(ValidationController), SupabaseService)
export class Contact {
    @observable public selectedReason: string;

    public email = '';
    public message = '';
    public isBusy = false;
    public formSent = false;
    public formSendFailed = false;
    public errorMessage = '';

    public reasons: string[] = [
        'general-question',
        'cocktail-request',
        'feature-request',
        'language-request',
        'bug-report',
        'other'
    ];

    constructor(private _controller: ValidationController, private _supabaseService: SupabaseService) {
        ValidationRules.ensure('email')
            .required()
            .email()
            .ensure('selectedReason')
            .required()
            .ensure('message')
            .required()
            .on(this);
    }

    public async submit(): Promise<void> {
        if (this.isBusy === true) {
            return;
        }

        this.isBusy = true;
        this.errorMessage = '';

        const result = await this._controller.validate();
        if (result.valid) {
            try {
                const data: ContactFormModel = {
                    email: this.email,
                    applicationName: 'Drinkable',
                    messageType: this.selectedReason,
                    message: this.message,
                    json: await this.getAllFromCapacitorStorage(),
                    appStore: this.getAppStore()
                };

                const response = await this._supabaseService.createContactForm(data);
                if (response.status !== 201) {
                    this.errorMessage = 'StatusCode ' + response.status + ' returned from supabaseClient';
                } else {
                    this.formSent = true;
                }
            } catch (error) {
                this.errorMessage = (error as Error).message;
            }
        }
        this.isBusy = false;
    }

    private async getAllFromCapacitorStorage(): Promise<string> {
        const values: KeyValue[] = [];
        const keysResult = await Preferences.keys();

        for (let i = 0; i < keysResult.keys.length; i++) {
            const element = keysResult.keys[i];
            const getResult = await Preferences.get({ key: element });
            values.push({ key: element, value: getResult.value });
        }

        return JSON.stringify(values);
    }

    private getAppStore() {
        if (STORE === 'fdroid') {
            return AppStore.FDroid;
        }

        if (STORE === 'playstore') {
            return AppStore.PlayStore;
        }

        return AppStore.Unknown;
    }
}
