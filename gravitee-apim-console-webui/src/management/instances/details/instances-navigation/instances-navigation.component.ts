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
import { Component, Inject, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';

import { UIRouterState } from '../../../../ajs-upgraded-providers';

interface MenuItem {
  targetRoute?: string;
  baseRoute?: string;
  displayName: string;
  permissions?: string[];
  testId?: string;
}

@Component({
  selector: 'instances-navigation',
  template: require('./instances-navigation.component.html'),
  styles: [require('./instances-navigation.component.scss')],
})
export class InstancesNavigationComponent implements OnInit {
  public subMenuItems: MenuItem[] = [];

  constructor(@Inject(UIRouterState) private readonly ajsState: StateService) {}

  ngOnInit() {
    this.subMenuItems = [
      {
        displayName: 'Environment',
        targetRoute: 'management.instances.detail.environment',
        baseRoute: 'management.instances.detail.environment',
        testId: 'management.instances.detail.environment',
      },
      {
        displayName: 'Monitoring',
        targetRoute: 'management.instances.detail.monitoring',
        baseRoute: 'management.instances.detail.monitoring',
        testId: 'management.instances.detail.monitoring',
      },
    ];
  }

  navigateTo(route: string) {
    this.ajsState.go(route);
  }

  isActive(route: string): boolean {
    return this.ajsState.includes(route);
  }
}
