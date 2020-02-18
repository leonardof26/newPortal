import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'

import Login from '../pages/Login'
import Main from '../pages/Main'

import Pricing from '../pages/FoursysMenu/Pricing/List'

import Profiles from '../pages/Parametrization/Profiles'
import MonthlyHour from '../pages/Parametrization/MonthlyHour'
import Roles from '../pages/Parametrization/Roles'
import Technology from '../pages/Parametrization/Technology'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={Login} />

      <Route path="/menufoursys/pricing" component={Pricing} />

      <Route path="/parametrizacao/perfilvenda" component={Profiles} />
      <Route path="/parametrizacao/monthlyhours" component={MonthlyHour} />
      <Route path="/parametrizacao/roles" component={Roles} />
      <Route path="/parametrizacao/technology" component={Technology} />
    </Switch>
  )
}
