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

import { Component, ElementRef, Injector, Input, SimpleChange } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Component({
  template: '',
  selector: 'documentation-edit-page',
  host: {
    class: 'bootstrap',
  },
})
export class AlertsComponent extends UpgradeComponent {
  @Input() alerts;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('alertsComponentAjs', elementRef, injector);
  }

  ngOnInit() {
    // Hack to Force the binding between Angular and AngularJS
    // Don't know why, but the binding is not done automatically when resolver is used
    this.ngOnChanges({
      alerts: new SimpleChange(null, this.alerts, true),
    });

    super.ngOnInit();
  }
}
