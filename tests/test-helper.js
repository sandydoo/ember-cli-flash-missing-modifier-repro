import Application from 'ember-cli-flash-missing-modifier-repro/app';
import config from 'ember-cli-flash-missing-modifier-repro/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
