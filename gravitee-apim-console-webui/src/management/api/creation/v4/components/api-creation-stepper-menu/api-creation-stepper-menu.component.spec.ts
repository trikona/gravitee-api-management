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
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { HarnessLoader } from '@angular/cdk/testing';

import { ApiCreationStepperMenuModule } from './api-creation-stepper-menu.module';
import { StepperMenuStepHarness } from './stepper-menu-step/stepper-menu-step.harness';

import { ApiCreationStep } from '../../services/api-creation-stepper.service';

@Component({
  template: `<api-creation-stepper-menu [steps]="steps" [currentStep]="currentStep"></api-creation-stepper-menu>`,
})
class TestHostComponent {
  public steps: ApiCreationStep[] = [];
  public currentStep: ApiCreationStep = undefined;
}

const FAKE_STEPS: ApiCreationStep[] = [
  {
    id: 'step-1',
    component: undefined,
    label: 'Step 1',
    labelNumber: 1,
    state: 'valid',
    patchPayload: () => ({}),
  },
  {
    id: 'step-2',
    component: undefined,
    label: 'Step 2',
    labelNumber: 2,
    state: 'initial',
    patchPayload: () => ({}),
  },
  {
    id: 'step-3',
    component: undefined,
    label: 'Step 3',
    labelNumber: 3,
    state: 'initial',
    patchPayload: () => ({}),
  },
];

describe('ApiCreationStepperMenuComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let harnessLoader: HarnessLoader;

  const initConfigureTestingModule = async (steps: ApiCreationStep[], currentStep: ApiCreationStep) => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [ApiCreationStepperMenuModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    harnessLoader = await TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    component.steps = steps;
    component.currentStep = currentStep;
    fixture.detectChanges();
  };

  it('should show step number and title', async () => {
    await initConfigureTestingModule(FAKE_STEPS, FAKE_STEPS[1]);

    const menuSteps = await harnessLoader.getAllHarnesses(StepperMenuStepHarness);

    expect(await menuSteps[0].getStepTitle()).toEqual('Step 1');
    expect(await menuSteps[0].getStepNumber()).toEqual('1');
  });

  it('should show active state', async () => {
    await initConfigureTestingModule(FAKE_STEPS, FAKE_STEPS[1]);
    const menuSteps = await harnessLoader.getAllHarnesses(StepperMenuStepHarness);

    expect(await menuSteps[1].getStepIconName()).toEqual('edit-pencil');
  });

  it('should show filled state', async () => {
    await initConfigureTestingModule(FAKE_STEPS, FAKE_STEPS[1]);
    const menuSteps = await harnessLoader.getAllHarnesses(StepperMenuStepHarness);

    expect(await menuSteps[0].getStepIconName()).toEqual('nav-arrow-down');
  });

  it('should show inactive state', async () => {
    await initConfigureTestingModule(FAKE_STEPS, FAKE_STEPS[1]);
    const menuSteps = await harnessLoader.getAllHarnesses(StepperMenuStepHarness);

    expect(await menuSteps[2].hasStepIcon()).toEqual(false);
  });
});
