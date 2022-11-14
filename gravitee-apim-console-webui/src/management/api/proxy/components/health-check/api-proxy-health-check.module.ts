/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GioFormHeadersModule, GioSaveBarModule } from '@gravitee/ui-particles-angular';

import { ApiProxyHealthCheckComponent } from './api-proxy-health-check.component';

import { GioFormSlideToggleModule } from '../../../../../shared/components/gio-form-slide-toogle/gio-form-slide-toggle.module';

@NgModule({
  declarations: [ApiProxyHealthCheckComponent],
  exports: [ApiProxyHealthCheckComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,

    GioSaveBarModule,
    GioFormSlideToggleModule,
    GioFormHeadersModule,
  ],
})
export class ApiProxyHealthCheckModule {}
