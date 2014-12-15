import Ember from "ember";
import { test, moduleFor } from 'ember-qunit';
import MH from "../../helpers/model-helpers";

moduleFor("balanced-addon-models@model:customer", "model - Customer");

test("#adapter", MH.shouldUseBalancedApiAdapter());
