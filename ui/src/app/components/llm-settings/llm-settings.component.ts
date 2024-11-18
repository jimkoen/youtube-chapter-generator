import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";

@Component({
  selector: 'app-llm-settings',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    MatLabel,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatCardTitle,
    MatCardHeader,
    MatOption,
    MatSelect,
    MatSlider,
    MatSliderThumb
  ],
  templateUrl: './llm-settings.component.html',
  styleUrl: './llm-settings.component.scss'
})
export class LlmSettingsComponent {
  public form = this.fb.group({
    systemPrompt: ['', [
      Validators.required
    ]],
    model: ['', [
      Validators.required
    ]],
    temperature: ['', [
      Validators.required
    ]],
    maxTokens: ['', [
      Validators.required
    ]],
  })
  constructor(private fb : FormBuilder) {
  }
}
